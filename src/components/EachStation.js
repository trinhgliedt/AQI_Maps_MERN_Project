import React, { useEffect, useState } from "react";
import axios from "axios";

const EachStation = (props) => {
  const { locLat, locLng } = props;

  const [locationData, setLocationData] = useState(null);
  const [didRetrieve, setDidRetrieve] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const [hoveredOver, setHoveredOver] = useState("");

  const iaqiKeys = ["co", "no2", "o3", "pm10", "pm25", "so2"];

  useEffect(() => {
    axios
      .get(
        `https://api.waqi.info/feed/geo:${locLat};${locLng}/?token=d2583b4394214a830ffdade2d10b103620d66ee7`
      )
      .then((res) => {
        if (res.data.status === "ok") {
          const copiedData = { ...res.data.data };
          for (let key of iaqiKeys) {
            if (!copiedData.iaqi.hasOwnProperty(key)) {
              copiedData.iaqi[key] = { v: "N/A" };
            }
          }
          setLocationData(copiedData);
        } else setDidRetrieve(false);
        setIsLoaded(true);
      })
      .catch((err) => console.error(err));
  }, [locLat, locLng]);

  const infoStyle = {
    position: "absolute",
    top: "-20px",
    right: "120px",
  };

  const tdStyle = {
    position: "relative",
    padding: "5px",
    border: "1px black solid",
  };

  if (!isLoaded || locationData === null) {
    return <div>Fetching station information...</div>;
  }
  if (!didRetrieve) {
    return <div>No information in this area...</div>;
  }
  return (
    <div>
      <table style={{ margin: "0 auto", marginBottom: "50px" }}>
        <tbody>
          <tr>
            <td
              style={{
                padding: "2px",
                border: "1px black solid",
                width: "100px",
              }}
            >
              Station
            </td>
            <td style={tdStyle}>
              <b>{locationData.city.name}</b>
            </td>
          </tr>
          <tr>
            <td style={tdStyle}>
              AQI
              <span
                onMouseOver={(e) => setHoveredOver("aqi")}
                onMouseLeave={(e) => setHoveredOver("")}
              >
                <span style={{ fontSize: "10px" }}>&#10068;</span>
                {hoveredOver === "aqi" && (
                  <div style={infoStyle}>Real-time air quality information</div>
                )}
              </span>
            </td>
            <td style={tdStyle}>{locationData.aqi}</td>
          </tr>
          <tr>
            <td style={tdStyle}>
              CO
              <span
                onMouseOver={(e) => setHoveredOver("co")}
                onMouseLeave={(e) => setHoveredOver("")}
              >
                <span style={{ fontSize: "10px" }}>&#10068;</span>
                {hoveredOver === "co" && (
                  <div style={infoStyle}>Carbon Monoxide level</div>
                )}
              </span>
            </td>
            <td style={tdStyle}>{locationData.iaqi.co.v}</td>
          </tr>
          <tr>
            <td style={tdStyle}>
              NO<sub>2</sub>
              <span
                onMouseOver={(e) => setHoveredOver("no2")}
                onMouseOut={(e) => setHoveredOver("")}
              >
                <span style={{ fontSize: "10px" }}>&#10068;</span>
                {hoveredOver === "no2" && (
                  <div style={infoStyle}>Nitrogen Dioxide level</div>
                )}
              </span>
            </td>
            <td style={tdStyle}>{locationData.iaqi.no2.v}</td>
          </tr>
          <tr>
            <td style={tdStyle}>
              O<sub>3</sub>
              <span
                onMouseOver={(e) => setHoveredOver("o3")}
                onMouseOut={(e) => setHoveredOver("")}
              >
                <span style={{ fontSize: "10px" }}>&#10068;</span>
                {hoveredOver === "o3" && (
                  <div style={infoStyle}>Ground-level ozone</div>
                )}
              </span>
            </td>
            <td style={tdStyle}>{locationData.iaqi.o3.v}</td>
          </tr>
          <tr>
            <td style={tdStyle}>
              PM<sub>10</sub>
              <span
                onMouseOver={(e) => setHoveredOver("pm10")}
                onMouseOut={(e) => setHoveredOver("")}
              >
                <span style={{ fontSize: "10px" }}>&#10068;</span>
                {hoveredOver === "pm10" && (
                  <div style={infoStyle}>
                    Particulate matter smaller than 10 micrometer
                  </div>
                )}
              </span>
            </td>
            <td style={tdStyle}>{locationData.iaqi.pm10.v}</td>
          </tr>
          <tr>
            <td style={tdStyle}>
              PM<sub>2.5</sub>
              <span
                onMouseOver={(e) => setHoveredOver("pm25")}
                onMouseOut={(e) => setHoveredOver("")}
              >
                <span style={{ fontSize: "10px" }}>&#10068;</span>
                {hoveredOver === "pm25" && (
                  <div style={infoStyle}>
                    Particulate matter smaller than 2.5 micrometer
                  </div>
                )}
              </span>
            </td>
            <td style={tdStyle}>{locationData.iaqi.pm25.v}</td>
          </tr>
          <tr>
            <td style={tdStyle}>
              SO<sub>2</sub>
              <span
                onMouseOver={(e) => setHoveredOver("so2")}
                onMouseOut={(e) => setHoveredOver("")}
              >
                <span style={{ fontSize: "10px" }}>&#10068;</span>
                {hoveredOver === "so2" && (
                  <div style={infoStyle}>Sulfur Dioxide level</div>
                )}
              </span>
            </td>
            <td style={tdStyle}>{locationData.iaqi.so2.v}</td>
          </tr>
          <tr>
            <td style={tdStyle}>Last Updated On</td>
            <td style={tdStyle}>{locationData.time.s}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EachStation;