import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./Fore.css"
const Week_days = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

const Forecast = ({ data }) => {
 const dayinweek = new Date().getDay();
 const forcastdays = Week_days.slice(dayinweek, Week_days.length).concat(
    Week_days.slice(0, dayinweek)
 )
 
 
    return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily">
                  <img
                    alt="weather"
                    className="icon-small"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
               <label className="day">{forcastdays[idx]}</label>
               <label className="weather-description">{item.weather[0].description}</label>
               <label className="min-max">{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
               
                </div>
              </AccordionItemButton>
            
        </AccordionItemHeading>
          <AccordionItemPanel>

<div className="daily-detail-grid"></div>
<div className="daily-detail-grid-item">
<label>preessure</label>
<label>{item.main.pressure}</label>
</div>
<div className="daily-detail-grid"></div>
<div className="daily-detail-grid-item">
<label>Humidity</label>
<label>{item.main.humidity}%</label>
</div>
          
<div className="daily-detail-grid"></div>
<div className="daily-detail-grid-item">
<label>clouds</label>
<label>{item.clouds.all}%</label>
</div>
          
          
<div className="daily-detail-grid"></div>
<div className="daily-detail-grid-item">
<label>wind soeed:e</label>
<label>{item.wind.speed}m/s</label>
</div>  
<div className="daily-detail-grid"></div>
<div className="daily-detail-grid-item">
<label>psea level:</label>
<label>{item.main.sea_level}m</label>
</div>  
<div className="daily-detail-grid"></div>
<div className="daily-detail-grid-item">
<label>feels like</label>
<label>{Math.round(item.main.feels_like)}°C</label>
</div>  
          
          
          
          </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
