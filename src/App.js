import Header from './components/Header';
import Map from './components/Map';
import Footer from './components/Footer';
import Point from './models/Point';
import WeatherDialogBox from './components/WeatherDialogBox';
import { useState } from 'react';
import Weather from './models/Weather';

function App() {
  const [weather, setWeather] = useState(null)

  var myWeather = weather;

  const myLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
          onMapHover(new Point(position.coords.latitude, position.coords.longitude), "latLang")
      }, () => {
          onMapHover("New Delhi", "Place")
      })
    }
  }

  const onMapHover = async (element, type) => {
    if (type === "latLang") {
      await fetch("https://api.openweathermap.org/data/2.5/weather?units=metric&lat=" + element.latitude + "&lon=" + element.longitude + "&appid=b317aca2e83ad16e219ff2283ca837d5").then((response) => {
        if (response.ok) {
          response.json().then((response) => {
            setWeather(new Weather(response.name, response.main.temp, response.weather[0].description.charAt(0).toUpperCase() + response.weather[0].description.slice(1), response.main.feels_like, response.main.humidity))
          })
        }
      })
    } else if (type === "Place") {
      await fetch("https://api.openweathermap.org/data/2.5/weather?units=metric&q=" + element + "&appid=b317aca2e83ad16e219ff2283ca837d5").then((response) => {
        if (response.ok) {
          response.json().then((response) => {
            setWeather(new Weather(response.name, response.main.temp, response.weather[0].description.charAt(0).toUpperCase() + response.weather[0].description.slice(1), response.main.feels_like, response.main.humidity))
          })
        }
      })
    }
  }

  return (
    <>
      <Header myFunc={onMapHover}/>
      <div className='container-flex m-5'>
        <div className='container d-flex justify-content-around flex-wrap align-items-center flex-row'>
          <Map myFunc={onMapHover} />
          {
            (myWeather != null) ? <WeatherDialogBox temperature={myWeather.temperature} condition={myWeather.message} place={myWeather.place} feels_like={myWeather.feels_like} humidity={myWeather.humidity} /> : myLocation()
          }
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
