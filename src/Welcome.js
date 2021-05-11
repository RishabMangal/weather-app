import React from "react";
import wi from "./assests/wi-small.jpg";
const Welcome = () => {
  return (
    <div
      className="p-4"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column",
        backgroundImage: `url(${wi})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <div className="m-4 p-4 display-4">Getting Your Location...</div>
      <div className="m-4 p-4 display-4" style={{ fontFamily: "cursive" }}>
        Check Weather at your Location
      </div>
    </div>
  );
};

export default Welcome;
