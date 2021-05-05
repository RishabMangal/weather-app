import React, { useState, useEffect } from "react";
import Geolocation from "react-geolocation";
const Geo = () => {
  const [loader, setLoader] = useState(false);
  const [cords, setCords] = useState({ lat: "", lon: "" });

  useEffect(() => {
    const getData = async () => {
      setLoader(true);
      await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${cords.lat}&lon=${cords.lon}&units=metric&appid=d845cfff1567042dea9b7be4920ae5e2`
      )
        .then((res) => res.json())
        .then((res) => {
          setLoader(false);
          console.log("Res: ", res);
          localStorage.setItem("weather", JSON.stringify(res));
        })
        .catch((err) => {
          setLoader(false);
          console.log("Err: ", err);
        });
    };
    if (cords.lat) getData();
  }, [cords.lat, cords.lon]);

  return (
    <Geolocation
      render={({
        fetchingPosition,
        position: { coords: { latitude, longitude } = {} } = {},
        error,
        getCurrentPosition,
      }) => (
        <div>
          {/* <button onClick={getCurrentPosition}>Get Position</button> */}
          {error && <div>{error.message}</div>}
          {loader ? "Loading" : null}
        </div>
      )}
      onSuccess={(p) => {
        // console.log("P: ", JSON.stringify(p));
        // console.log("P: ", p);
        setCords({
          lat: p.coords.latitude,
          lon: p.coords.longitude,
        });
      }}
    />
  );
};

export default Geo;
