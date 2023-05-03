import Header from './components/Header';
import Map from './components/Map';

function App() {
  return (
    <>
      <Header />
      <div className='container-flex m-5'>
        <div className='container d-flex justify-content-around flex-wrap flex-row'>
          <Map />
          <Map />
        </div>
      </div>
    </>
  );
}

export default App;
