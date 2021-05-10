import React from "react";

const WeatherCard = (props) => {
  return (
    <div className="weather-card">
      <div className="weather-title">{props.main}</div>
      <div
        className="inline px-4 p-2"
        style={{ width: "100%", justifyContent: "space-around" }}
      >
        <div className="weather-desc">{props.description}</div>
        <div className="weather-img">
          <img
            src={`http://openweathermap.org/img/w/${props.icon}.png`}
            alt={props.main}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
