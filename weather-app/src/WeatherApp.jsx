import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {

    let [weatherInfo,setWeatherInfo] = useState({
    city : "Delhi",    
    feelsLike: 38.99,
    humidity: 90,
    temp: 31.99,
    tempMax: 31.99,
    tempMin: 31.99,
    weather: "haze",
  });

  let updateInfo = (result)=>{
    setWeatherInfo(result);
  }

  return (
    <div>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  );
}
