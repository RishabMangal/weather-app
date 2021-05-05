import React from "react";

const WeatherCard = (props) => {
  return (
    <div>
      <p>Main: {props.main}</p>
      <p>DES : {props.description}</p>
      <p>
        <img
          src={`http://openweathermap.org/img/w/${props.icon}.png`}
          alt={props.main}
        ></img>
      </p>
    </div>
  );
};

export default WeatherCard;
