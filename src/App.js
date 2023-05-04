import Header from './components/Header';
import Map from './components/Map';
import Footer from './components/Footer';
import Point from './models/Point';
import WeatherDialogBox from './components/WeatherDialogBox';
import { useState } from 'react';

function App() {
  const [location, setLocation] = useState(null);

  const myLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
          setLocation({place: new Point(position.coords.latitude, position.coords.longitude), type: "latLang"})
          return
      }, () => {
          setLocation({place: "New Delhi", type: "Place"})
      })
    }
  }

  return (
    <>
      <Header myFunc={setLocation}/>
      <div className='container-flex m-5'>
        <div className='container d-flex justify-content-around flex-wrap align-items-center flex-row'>
          <Map myFunc={setLocation} />
          {
            (location != null) ? <WeatherDialogBox location={location.place} searchType={location.type} /> : myLocation()
          }
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
