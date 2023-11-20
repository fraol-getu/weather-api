import "./current-weather.css";

const Currentweather = ({data}) => {
  return (
    <div className="weather-container">
      <div className="weather">
        <p className="city">{data.city}</p>
        <p className="weather-discription">{data.weather[0].description}</p>
        <img alt="weather" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
        <p className="temprature">{data.main.temp}°C</p>
        <div className="minmaxcontainer">
          <div className="min">
            <p className="minheading">min</p>
            <p className="mintemp">{data.main.temp_min}°C</p>
          </div>
          <div className="max">
            <p className="maxheading">max</p>
            <p className="maxtemp">{Math.round(data.main.temp_max)}°C</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};




export default Currentweather;
