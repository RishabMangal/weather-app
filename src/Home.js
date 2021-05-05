import React, { useEffect, useState } from "react";
import WholeCard from "./WholeCard";

const Home = () => {
  const [w, sW] = useState(JSON.parse(localStorage.getItem("weather")));
  useEffect(() => {
    sW(JSON.parse(localStorage.getItem("weather")));
  }, []);
  return (
    <div>
      <h1>Weather App</h1>
      <WholeCard {...w}></WholeCard>
    </div>
  );
};

export default Home;
