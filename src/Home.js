import React, { useEffect, useState } from "react";
import WholeCard from "./WholeCard";
import logo from "./assests/icon.png";
const Home = () => {
  const [w, sW] = useState(JSON.parse(localStorage.getItem("weather")));
  useEffect(() => {
    sW(JSON.parse(localStorage.getItem("weather")));
  }, []);
  return (
    <div>
      <div
        className="p-4 mb-2"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // backgroundColor: "#273B3C",
        }}
      >
        <div
          style={{
            width: "200px",
            height: "100px",
            margin: "0 2rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img style={{ width: "100%" }} src={logo} alt="sunny"></img>{" "}
        </div>
        <h1>Weather App</h1>
      </div>
      <WholeCard {...w}></WholeCard>
    </div>
  );
};

export default Home;
