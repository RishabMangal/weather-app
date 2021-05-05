import React from "react";
import WeatherCard from "./WeatherCard";

const CurrentCard = (props) => {
  let sunrise = new Date(props?.sunrise * 1000);
  let sunset = new Date(props?.sunset * 1000);
  let reqT = new Date(props.dt * 1000);
  const getTime = (date) => {
    var hours = "0" + date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    var formattedTime =
      hours.substr(-2) +
      " : " +
      minutes.substr(-2) +
      " : " +
      seconds.substr(-2);
    return <span>{formattedTime}</span>;
  };

  return (
    <div style={{}} className="bg-dark text-light container">
      {props?.sunrise && <p> {sunrise.toDateString()}</p>}
      <p>At : {getTime(reqT)}</p>
      {props?.sunrise && <p>Sunrise : {getTime(sunrise)}</p>}
      {props?.sunset && <p>Sunset : {getTime(sunset)}</p>}
      <p>Temp : {props.temp}°C</p>
      <p>Feels Like : {props.feels_like}°C</p>
      <p>Pressure : {props.pressure} hPa</p>
      <p>Humidity : {props.humidity}%</p>
      <p>Dew Point : {props.dew_point}°C</p>
      <p>UV index : {props.uvi}</p>
      <p>Cloudiness : {props.clouds}%</p>
      <p>Visibility : {props.visibility} m</p>
      <p>Wind Speed : {props.wind_speed} m/s</p>
      <p>Wind Deg : {props.wind_deg}° </p>
      {props.weather.map((we, i) => (
        <WeatherCard key={we.id} {...we}></WeatherCard>
      ))}
    </div>
  );
};

export default CurrentCard;
