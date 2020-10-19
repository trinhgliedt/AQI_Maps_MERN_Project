import React from "react";
import { navigate } from "@reach/router";

const FilteredTable = ({ setLoc, filteredStations }) => {
  const tableStyle = {
    border: "1px solid black",
    padding: "5px",
  };

  const handleClick = (lat, lng) => {
    setLoc({ lat, lng });
    navigate(`/stations/${lat}/${lng}`);
  };

  return (
    <div style={{ height: "500px", overflow: "auto" }}>
      <table 
      className="table table-fixed col-9 border table-scroll table-wrap" style={{ margin: "0 auto" }}>
        <thead style={{position: "sticky"}}>
          <tr  >
            <th scope="col" style={tableStyle}>Station ID</th>
            <th scope="col" style={tableStyle}>Station</th>
            <th scope="col" style={tableStyle}>AQI</th>
            <th scope="col" style={tableStyle}>Action</th>
          </tr>
        </thead>
        <tbody style={{ height: "500px", overflow: "auto" }}>
          {filteredStations
            .filter((station) => {
              return(station.station.name.slice(station.station.name.length-6)!== "Mexico"
              && station.station.name.slice(station.station.name.length-6) !== "Canada"
              && station.station.name.slice(station.station.name.length-8) !== "Saguenay"
              && station.aqi !== "-")
            })
            .sort((a, b) => (parseInt(a.aqi) > parseInt(b.aqi) ? 1 : -1))
            .map((station, i) => {
                let aqiStyle = "";
                if (station.aqi > 150) aqiStyle="bg-danger"
                else if (station.aqi > 50) aqiStyle="bg-warning"
                else aqiStyle="bg-success";
                return (
                  <tr 
                  key={i}>
                    <td style={tableStyle}>{station.uid}</td>
                    <td className="text-left" style={tableStyle}>{station.station.name}</td>
                    <td style={tableStyle} className={aqiStyle}>{station.aqi}</td>
                    <td style={tableStyle}>
                      <button
                      className="btn btn-sm btn-info shadow mb-2"
                        onClick={(e) => handleClick(station.lat, station.lon)}
                      >
                        Go to station
                      </button>
                    </td>
                  </tr>
                );
            // }
            })}
        </tbody>
      </table>
    </div>
  );
};

export default FilteredTable;
