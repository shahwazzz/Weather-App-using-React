import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
const InfoBox = ({ info }) => {
  const INIT_IMG =
    "https://images.unsplash.com/photo-1580687774725-4e23db308efc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8MHwwfHx8MA%3D%3D";

  const HOT_IMG =
    "https://img.freepik.com/free-vector/fuzzy-sun-rays-through-scattered-clouds-gradient-blue-sky-realistic-background_1284-58644.jpg?w=1380&t=st=1705905374~exp=1705905974~hmac=f254040c662709e3400e2cc9c0845d4ee14b04c0a251584a6a387d434a6b2fac";

  const COLD_IMG =
    "https://img.freepik.com/free-photo/view-snowy-mountain-fir-trees-with-blue-sky-background_9083-8044.jpg?w=996&t=st=1705905501~exp=1705906101~hmac=6e12c7fa2be5419c96f2876c10a19c6ee641a2d708aa0d33674abf482422b96e";

  const RAIN_IMG =
    "https://img.freepik.com/free-photo/weather-effects-composition_23-2149853295.jpg?w=996&t=st=1705905550~exp=1705906150~hmac=c08153445763ac58353580f311288c2615bd3736a3656d7b85132c953c57b1a7";

  return (
    <div className="InfoBox">
      <div className="CardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_IMG
                : info.temp < 15
                ? COLD_IMG
                : HOT_IMG
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp < 15 ? (
                <AcUnitIcon />
              ) : (
                <WbSunnyIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>temprature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temp = {info.tempMin}</p>
              <p>Max Temp = {info.temp.max}</p>
              <p>{info.humidity}</p>
              <p>
                The Weather can be Describes as <i>{info.weather}</i> Feels Like
                = {info.feelsLike}{" "}
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InfoBox;
