// Libraries
import { useEffect, useState } from 'react';

// Components
import Navbar from './components/Navbar';
import RenderHourlyCards from './components/RenderHourlyCard';
import Map from './components/Map';
import Chart from './components/Chart';
import Footer from './components/Footer';
import LoadingAnimation from './components/LoadingAnimation';
import ErrorMessage from './components/ErrorMessage';

// Modules
import weatherIcons from './modules/WeatherIcon'

function App() {
  const [isError, setError] = useState(false);
  const [locationData, setLocationData] = useState("New Delhi");
  const [weatherData, setWeatherData] = useState(null);
  const [unit, setUnit] = useState("metric");
  const [weatherConditionIcon, setWeatherConditionIcon] = useState(null);
  const [pastForecastData, setPastForecastData] = useState(null);

  const handleError = (e) => setError(e)

  // Main Api Fetching function
  useEffect(() => {
    const apiUrlHeader = "https://weatherapi-com.p.rapidapi.com/";
    const apiOptions = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };

    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 6);

    const fetchData = async () => {
      try {
        const weatherForecastResponse = await fetch(`${apiUrlHeader}forecast.json?q=${locationData}&days=10`, apiOptions);
        const pastForecastResponse = await fetch(`${apiUrlHeader}history.json?q=${locationData}&dt=${currentDate.toISOString().split('T')[0]}&lang=en&end_dt=${new Date().toISOString().split('T')[0]}`, apiOptions);

        if (!weatherForecastResponse.ok || !pastForecastResponse.ok) {
          handleError(true);
          return
        } else {
          handleError(false);
        }

        const weatherData = await weatherForecastResponse.json();
        const pastForecast = await pastForecastResponse.json();

        setWeatherData(weatherData);
        setWeatherConditionIcon(weatherIcons(weatherData.current.condition.code, "white"));
        setPastForecastData(pastForecast.forecast.forecastday);
      } catch {
        handleError(true);
      }
    };

    if (locationData) {
      fetchData();
    }
  }, [locationData]);

  // Fetches Your Current Location
  const handleFetchLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocationData(`${position.coords.latitude},${position.coords.longitude}`)
        return
      })
    } else {
      alert("We are not able to fetch your location")
    }
  }

  return (
    <>
      <Navbar fetchMyLocation={handleFetchLocation} changeUnit={setUnit} searchPlace={setLocationData} />
      <div className='main-body container-flex'>
        <div className='container'>
          <>
            <div className='row'>
              <div className='weather-info col-11 col-lg-6 col-xl-7 my-3'>
                <div className='container-flex'>

                  {/* Weather Data Section Start */}
                  {weatherData ?
                    isError ? <ErrorMessage /> :
                      <>
                        <div className='row align-items-center justify-content-center justify-content-lg-start my-2'>
                          <div className='col-12 col-md-3 col-lg-3 text-center'>
                            <i className={weatherConditionIcon} style={{ fontSize: "50px" }} />
                          </div>
                          <div className='col-12 col-md-6 col-lg-6 text-center'>
                            <h1>{weatherData.location.name}</h1>
                            <p>{weatherData.location.country}</p>
                          </div>
                        </div>

                        <div className='text-center col-12 mb-3'>
                          <div className='h3'>{weatherData.current.condition.text}</div>
                        </div>

                        <div className='row align-items-center justify-content-evenly my-2'>
                          <div className='col-12 col-md-3 col-lg-12 col-xl-3 text-center'>
                            {unit === "metric" ?
                              <h1>{weatherData.current.temp_c}°<span> C</span></h1> :
                              <h1>{weatherData.current.temp_f}°<span> F</span></h1>}
                            <p>Temperature</p>
                          </div>
                          <div className='col-4 col-md-3 col-lg-4 col-xl-3 text-center'>
                            <h1>{weatherData.current.humidity}<span> %</span></h1>
                            <p>Humidity</p>
                          </div>
                          <div className='col-4 col-md-3 col-lg-4 col-xl-3 text-center'>
                            {unit === "metric" ?
                              <h1>{weatherData.current.wind_kph}<span> km/h</span></h1> :
                              <h1>{weatherData.current.wind_mph}<span> m/h</span></h1>}
                            <p>Wind Speed</p>
                          </div>
                          <div className='col-4 col-md-3 col-lg-4 col-xl-3 text-center'>
                            {unit === "metric" ?
                              <h1>{weatherData.current.pressure_mb}<span> mb</span></h1> :
                              <h1>{weatherData.current.pressure_in}<span> hg</span></h1>}
                            <p>Air Pressure</p>
                          </div>
                        </div>
                      </>
                    : <LoadingAnimation />}
                </div>
              </div>
              {/* Weather Data Section End */}

              {/* Map Section Start */}
              <div className='map col-12 col-md-11 col-lg-6 col-xl-5 my-3'>
                {weatherData ? isError ? <ErrorMessage /> : <Map locationData={weatherData.location} /> : <LoadingAnimation />}
              </div>
              {/* Map Section End */}

            </div>

            <div className='row'>

              {/* Past Temperature Section Start */}
              <div className='past-temperature-data col-11 col-lg-6 col-xl-7 my-3'>
                <div className='container-flex'>
                  <h2 className='p-3'>Past Temperature Data</h2>
                  {pastForecastData ? isError ? <ErrorMessage /> : <Chart weatherData={pastForecastData} unit={unit} /> : <LoadingAnimation />}
                </div>
              </div>
              {/* Past Temperature Section End */}

              {/* Hourly Forecast Section Start */}
              <div className='hourly-forecasts col-12 col-lg-6 col-xl-5 my-3'>
                <div className='container-flex p-3'>
                  <h2>Forecasts</h2>
                  {weatherData ? isError ? <ErrorMessage /> :
                    <div className='col'>
                      {RenderHourlyCards(weatherData.forecast.forecastday[0].hour, unit)}
                    </div> : <LoadingAnimation />}
                </div>
              </div>
              {/* Hourly Forecast Section End */}

            </div>
          </>
        </div>
      </div >
      <Footer />
    </>
  );
}

export default App;
