import React from "react";

const DrawWeatherChartIcon = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      {props?.weather.length
        ? props?.weather?.map((w, i) => (
            <div key={i + Math.random()} className="card m-2">
              <div>
                <img
                  src={`http://openweathermap.org/img/w/${w.y.icon}.png`}
                  alt={w.y.main}
                ></img>
              </div>
              <div>{w.x}</div>
            </div>
          ))
        : null}
    </div>
  );
};

export default DrawWeatherChartIcon;
