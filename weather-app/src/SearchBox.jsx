import "./SearchBox.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox() {
    let [city, setCity] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "25a219bc6dea192884574f38b7ebefed";

  let getWeatherInfo = async () => {
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();
    
    let result = {
      temp : jsonResponse.main.temp,
      tempMin : jsonResponse.main.temp_min,
      tempMax : jsonResponse.main.temp_max,
      humidity : jsonResponse.main.humidity,
      feelsLike : jsonResponse.main.feels_like,
      weather : jsonResponse.weather[0].description
    }
    console.log(result);
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleForm = (event) => {
    event.preventDefault();
    setCity("");
    getWeatherInfo();
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
    </div>
  );
}
