import React, { useEffect, useState } from "react";
import ChartLine from "./ChartLine";
import CurrentCard from "./CurrentCard";
import DrawWeatherChartIcon from "./DrawWeatherChartIcon";
// import DrawLine from "./DrawLine";

const WholeCard = (props) => {
  const [graphData, setGraphData] = useState({});
  const [weatherChartData, setWeatherChartData] = useState({});

  useEffect(() => {
    const getTime = (date) => {
      var hours = "0" + date.getHours();
      // Minutes part from the timestamp
      var minutes = "0" + date.getMinutes();
      // Seconds part from the timestamp
      //   var seconds = "0" + date.getSeconds();

      // Will display time in 10:30:23 format
      var formattedTime = hours.substr(-2) + ":" + minutes.substr(-2);
      return formattedTime;
      //   return date.getHours();
    };
    const cookData = () => {
      let time = [],
        temp = [],
        fl = [],
        pressure = [],
        humidity = [],
        dewP = [],
        uvi = [],
        clouds = [],
        visibility = [],
        wind_speed = [],
        wind_deg = [],
        weather = [];
      props.hourly.forEach((hwe, i) => {
        let hrs = getTime(new Date(hwe.dt * 1000));
        time.push({ x: hrs, y: i });
        temp.push({ x: hrs, y: hwe.temp });
        fl.push({ x: hrs, y: hwe.feels_like });
        pressure.push({ x: hrs, y: hwe.pressure });
        humidity.push({ x: hrs, y: hwe.humidity });
        dewP.push({ x: hrs, y: hwe.dew_point });
        uvi.push({ x: hrs, y: hwe.uvi });
        clouds.push({ x: hrs, y: hwe.clouds });
        visibility.push({ x: hrs, y: hwe.visibility });
        wind_speed.push({ x: hrs, y: hwe.wind_speed });
        wind_deg.push({ x: hrs, y: hwe.wind_deg });
        weather.push({ x: hrs, y: hwe.weather[0] });
      });
      let dataP = {
        // time,
        temp,
        fl,
        pressure,
        humidity,
        dewP,
        uvi,
        clouds,
        visibility,
        wind_speed,
        wind_deg,
        // weather,
      };
      console.table(dataP);
      setGraphData(dataP);
      setWeatherChartData(weather);
    };
    cookData();
  }, [props.hourly]);
  let dict = {
    // time,
    temp: "Tempreature (°C)",
    fl: "Feels Like (°C)",
    pressure: "Pressure (hPa)",
    humidity: "Humidity (%)",
    dewP: "Dew Point (°C)",
    uvi: "UV Index (%)",
    clouds: "Cloundiness (%)",
    visibility: "Visibility (metres)",
    wind_speed: "Wind Speed (m/s)",
    wind_deg: "Wind Degree (°)",
    weather: "Weather",
  };

  return (
    <div className="">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          padding: "2rem",
        }}
      >
        <div
          className="lead "
          style={{ fontSize: "2rem", fontWeight: "bold", letterSpacing: "3px" }}
        >
          {props.timezone}{" "}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "justify",
          }}
        >
          <div className="inline" style={{ justifyContent: "space-around" }}>
            <div className="text-info lead" style={{ width: "30px" }}>
              Latitude
            </div>
            :<div className="text-success">{props.lat}</div>
          </div>
          <div className="inline" style={{ justifyContent: "space-around" }}>
            <div className="text-info lead" style={{ width: "30px" }}>
              Longitude
            </div>
            :<div className="text-success">{props.lon}</div>
          </div>
        </div>
      </div>
      <div className="">
        <CurrentCard {...props.current}></CurrentCard>
      </div>
      <div className="display-4 m-3 p-4 border">Next Week Prediction</div>

      <div className="row mx-0">
        {props.daily.map((hwe, i) => (
          <div key={i + Math.random} className="col-xl-3 my-4">
            <CurrentCard {...hwe}></CurrentCard>
          </div>
        ))}
      </div>
      <div className="display-4 m-3 p-4 border">Hourly Representation</div>

      <div className="row mx-0">
        {props.hourly.map((hwe, i) => (
          <div key={i + Math.random} className="col-md-3 my-4">
            <CurrentCard {...hwe}></CurrentCard>
          </div>
        ))}
      </div>
      {/* <div className="row mx-0">
        {Object.keys(graphData).map((gKey, i) => (
          <div key={i + Math.random} className="col-sm-12">
            <p className="text-secondary">{gKey}</p>
            <DrawLine data={graphData[gKey]}></DrawLine>
          </div>
        ))}
      </div> */}
      <div className="display-4 m-3 p-4 border">Graphical Representation</div>
      <div className="row mx-0">
        {Object.keys(graphData).map((gKey, i) => (
          <div
            key={i + Math.random}
            className="col-sm-12 m-1 my-4 p-4 border-bottom"
          >
            <ChartLine data={graphData[gKey]} keyName={dict[gKey]}></ChartLine>
          </div>
        ))}
      </div>
      <div className="display-4 m-3 p-4 border">Overview Representation</div>
      <div>
        <DrawWeatherChartIcon weather={weatherChartData}></DrawWeatherChartIcon>
      </div>
    </div>
  );
};

export default WholeCard;
