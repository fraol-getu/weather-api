



import { useState } from 'react';
import './App.css';
import Currentweather from './components/current-weather/current-weather';
import Search from './components/seach/search';
import { WEATHER_API_URL, WEATHER_API_KEY } from './Api';
import Forecast from './forecast/Forecast';


function App() {


  const ftoC = (x)=>{
        const y = x-273.5
        return y
  }

   console.log(ftoC(400))
  const [currentweather, setCurrentWeather] = useState(null)
  const [forecast, setForeCast] = useState(null)
  
  const handleonSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ")
  const currentweatherfetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
 const forecastfetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
 
 Promise.all([currentweatherfetch, forecastfetch])
.then(async (response) => {
const weatherResponse = await response[0].json();
const forecastResponse = await response[1].json();
setCurrentWeather({ city: searchData.label, ...weatherResponse})
setForeCast({ city: searchData.label, ...forecastResponse})
})
.catch((err) => console.log(err))



}
  console.log(currentweather)
  console.log(forecast)
  return (
    
   
    
    <div className="container">
     <Search onSearchChange={handleonSearchChange} />
  {currentweather &&  <Currentweather data={currentweather} />}
   {forecast && <Forecast data={forecast} /> }
    </div>
  );
}

export default App;
