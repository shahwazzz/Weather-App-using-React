import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { red } from "@mui/material/colors";

const SearchBox = ({ updateInfo }) => {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "cd8df11fec6692d75b77fbf04a2fed09";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        temp_max: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log("form Submitted");
      setCity("");
      setError(false);
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{ color: "red" }}>No such places exist!</p>}
      </form>
    </div>
  );
};

export default SearchBox;
