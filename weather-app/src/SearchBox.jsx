import "./SearchBox.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "25a219bc6dea192884574f38b7ebefed";

  let getWeatherInfo = async () => {
    try{
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();
    
    let result = {
      city : city,
      temp : jsonResponse.main.temp,
      tempMin : jsonResponse.main.temp_min,
      tempMax : jsonResponse.main.temp_max,
      humidity : jsonResponse.main.humidity,
      feelsLike : jsonResponse.main.feels_like,
      weather : jsonResponse.weather[0].description
    }
    console.log(result);
    return result;
    }catch(err){
      throw err;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleForm = async (event) => {
   try{
     event.preventDefault();
    setCity("");
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
   }catch(err){
      setError(true);
   }
  };

  return (
    <div className="searchBox">
      <h2>Search for the weather</h2>
      <form onSubmit={handleForm}>
        <TextField
          required
          id="outlined-basic"
          label="City"
          variant="outlined"
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button type="Submit" variant="contained">
          SEARCH
        </Button>
      </form>
      {error && <p style={{color:"red"}}>No such place exists!</p>}
    </div>
    
  );
}
