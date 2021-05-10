import React from "react";

const DrawWeatherChartIcon = (props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        // justifyContent: "space-evenly",
        flexWrap: "wrap",
        padding: "1rem",
        color: "black",
      }}
    >
      {props?.weather?.length
        ? props?.weather?.map((w, i) => (
            <div key={i + Math.random()} className="m-1 bg-light p-1 border">
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
