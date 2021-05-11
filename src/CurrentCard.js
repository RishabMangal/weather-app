import React from "react";
import WeatherCard from "./WeatherCard";
import temp from "./assests/temp.png";
import humid from "./assests/humidity.png";
import pres from "./assests/pres.png";
import wind from "./assests/wind.png";
import visi from "./assests/visi.png";
import clou from "./assests/clou.png";
import wdeg from "./assests/wdeg.png";
import uv from "./assests/uv.png";
import feel from "./assests/feel.png";
import dew from "./assests/dew.png";
import sunr from "./assests/sunr.png";
import suns from "./assests/suns.png";
import morn from "./assests/morn.png";
import day from "./assests/day.png";
import eve from "./assests/eve.png";
import night from "./assests/night.png";
import min from "./assests/min.png";
import max from "./assests/max.png";
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
      hours.substr(-2) + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
    return <span>{formattedTime}</span>;
  };

  const dict2 = {
    morn: { title: "Morning", icon: morn },
    day: { title: "Day", icon: day },
    eve: { title: "Evening", icon: eve },
    night: { title: "Night", icon: night },
  };
  const dict3 = {
    morn: { title: "Morning", icon: morn },
    day: { title: "Day", icon: day },
    eve: { title: "Evening", icon: eve },
    night: { title: "Night", icon: night },
    min: { title: "Highest", icon: max },
    max: { title: "Lowest", icon: min },
  };

  return (
    <div className="mx-0 main-card-wrapper">
      <div className="dummy"></div>
      <div className={`icon ${props.weather[0].description.replace(" ", "_")}`}>
        {props?.weather?.map((we, i) => (
          <WeatherCard key={we.id} {...we}></WeatherCard>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 2rem",
        }}
      >
        {props?.sunrise && (
          <div className="at">
            <div className="date">{sunrise.toDateString()}</div>
            <div className="time">@ {getTime(reqT)}</div>
          </div>
        )}
        {props?.sunrise && (
          <div className="inline sunrise" title="Sunrise">
            <div className="property">Sunrise Time</div>
            <div className="ico">
              <img src={sunr} alt="sunrise" style={{ width: "100%" }}></img>
            </div>
            <div className="line"></div>
            <div className="value time">{getTime(sunrise)}</div>
          </div>
        )}
        {props?.sunset && (
          <div className="inline sunset" title="Sunset">
            <div className="property">Sunset Time</div>

            <div className="ico">
              <img src={suns} alt="sunset" style={{ width: "100%" }}></img>
            </div>
            <div className="line"></div>
            <div className="value time">{getTime(sunset)}</div>
          </div>
        )}
        {props?.dt && (
          <div className="inline sunset" title="Last Update Time">
            <div className="property">At Time</div>

            <div className="ico">
              <img src={sunr} alt="sunset" style={{ width: "100%" }}></img>
            </div>
            <div className="line"></div>
            <div className="value time">{getTime(reqT)}</div>
          </div>
        )}
        {typeof props.temp !== "number" ? (
          <div className="unline">
            <div className="inline" style={{ justifyContent: "center" }}>
              <div className="ico">
                <img src={temp} alt="feel" style={{ width: "100%" }}></img>
              </div>
              <div className="property">Tempreature</div>
            </div>
            <div>
              {Object.keys(props.temp)
                .sort((a, b) => {
                  if (a > b) return 1;
                  return -1;
                })
                .map((k, i) => (
                  <div className="inline feels_like">
                    <div className="property">{dict3[k].title}</div>
                    <div className="ico">
                      <img
                        src={dict3[k].icon}
                        alt={k}
                        style={{ width: "100%" }}
                      ></img>
                    </div>
                    <div className="line"></div>
                    <div className="value">{props.temp[k]}°C</div>
                  </div>
                ))}
            </div>
          </div>
        ) : (
          <div className="inline temp" title="Tempreature">
            <div className="property">Tempreature</div>
            <div className="ico">
              <img src={temp} alt="temp" style={{ width: "100%" }}></img>
            </div>
            <div className="line"></div>
            <div className="value">{props.temp}°C</div>
          </div>
        )}
        {typeof props.feels_like !== "number" ? (
          <div className="unline">
            <div className="inline" style={{ justifyContent: "center" }}>
              <div className="ico">
                <img src={feel} alt="feel" style={{ width: "100%" }}></img>
              </div>
              <div className="property">Feels Like</div>
            </div>
            <div>
              {Object.keys(props.feels_like)
                .sort((a, b) => {
                  if (a > b) return 1;
                  return -1;
                })
                .map((k, i) => (
                  <div className="inline feels_like">
                    <div className="property">{dict2[k].title}</div>
                    <div className="ico">
                      <img
                        src={dict2[k].icon}
                        alt="feel"
                        style={{ width: "100%" }}
                      ></img>
                    </div>
                    <div className="line"></div>
                    <div className="value">{props.feels_like[k]}°C</div>
                  </div>
                ))}
            </div>
          </div>
        ) : (
          <div className="inline feels_like">
            <div className="property">Feels Like</div>
            <div className="ico">
              <img src={feel} alt="feel" style={{ width: "100%" }}></img>
            </div>
            <div className="line"></div>
            <div className="value">{props.feels_like}°C</div>
          </div>
        )}

        <div className="inline pressure">
          <div className="property">Pressure</div>

          <div className="ico">
            <img src={pres} alt="pres" style={{ width: "100%" }}></img>
          </div>
          <div className="line"></div>
          <div className="value"> {props.pressure} hPa</div>
        </div>

        <div className="inline humidity">
          <div className="property">Humidity</div>

          <div className="ico">
            <img src={humid} alt="humid" style={{ width: "100%" }}></img>
          </div>
          <div className="line"></div>
          <div className="value">{props.humidity}%</div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 2rem ",
        }}
      >
        <div className="inline dew_point">
          <div className="property">Dew Point</div>

          <div className="ico">
            <img src={dew} alt="dew-p" style={{ width: "100%" }}></img>
          </div>
          <div className="line"></div>
          <div className="value"> {props.dew_point}°C</div>
        </div>
        <div className="inline uvi">
          <div className="property">UV Index</div>

          <div className="ico">
            <img src={uv} alt="uv-i" style={{ width: "100%" }}></img>
          </div>
          <div className="line"></div>
          <div className="value"> {props.uvi}</div>
        </div>

        <div className="inline cloudiness">
          <div className="property">Cloudiness</div>

          <div className="ico">
            <img src={clou} alt="clou" style={{ width: "100%" }}></img>
          </div>
          <div className="line"></div>
          <div className="value"> {props.clouds}%</div>
        </div>

        <div className="inline visibility">
          <div className="property">Visibility</div>

          <div className="ico">
            <img src={visi} alt="visi" style={{ width: "100%" }}></img>
          </div>
          <div className="line"></div>
          <div className="value"> {props.visibility} m</div>
        </div>

        <div className="inline wind">
          <div className="property">Wind Speed</div>

          <div className="ico">
            <img src={wind} alt="wind" style={{ width: "100%" }}></img>
          </div>
          <div className="line"></div>
          <div className="value"> {props.wind_speed} m/s</div>
        </div>
        <div className="inline wind_deg">
          <div className="property">Wind Degree</div>

          <div className="ico">
            <img src={wdeg} alt="wdeg" style={{ width: "100%" }}></img>
          </div>
          <div className="line"></div>
          <div className="value"> {props.wind_deg}°</div>
        </div>
        {/* <div>icon : {props.weather[0].icon} </div> */}
      </div>
    </div>
    // </div>
  );
};

export default CurrentCard;
