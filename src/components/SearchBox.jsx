import { navigate } from "@reach/router";
import React, { useState } from "react";
import Geocode from "react-geocode";

const SearchBox = ({ setLoc, aqiStations, setFilteredStations }) => {
  const [address, setAddress] = useState("");
  const [dropOption, setDropOption] = useState("0");
  Geocode.setApiKey(process.env.REACT_APP_API_KEY);

  function handleSubmit (event) {
    event.preventDefault();
    Geocode.fromAddress(address).then(
        res => {
            setLoc(res.results[0].geometry.location);
            setFilteredStations(aqiStations);
            navigate(`/stations/${res.results[0].geometry.location.lat}/${res.results[0].geometry.location.lng}`);
        },
        err => {
          console.error(err);
        }
      );
    setAddress("");
  };

  function handleFilter (event) {
    event.preventDefault();
    const copiedStations = [...aqiStations];

    const usStations= copiedStations.filter((station) => {
      return(station.station.name.slice(station.station.name.length-6) !== "Mexico"
      && station.station.name.slice(station.station.name.length-6) !== "Canada"
      && station.station.name.slice(station.station.name.length-8) !== "Saguenay" && station.aqi != "-");
    })

    const filteredStations = usStations.filter((station) => {
      if (dropOption == "0") {
        return true;
      }
      else if (dropOption == "1") {
        return(station.aqi > 0 && station.aqi <= 50);
      }
      else if (dropOption == "2") {
        return(station.aqi > 50 && station.aqi <= 100);
      }
      else if (dropOption == "3") {
        return(station.aqi > 100 && station.aqi <= 150);
      }
      else if (dropOption == "4") {
        return(station.aqi > 150 && station.aqi <= 200);
      }
      else if (dropOption == "5") {
        return(station.aqi > 200 && station.aqi <= 300);
      }
      else if (dropOption == "6") {
        return(station.aqi > 300);
      }
    });

    setFilteredStations(filteredStations);
    navigate("/stations/filter");
  };
 

  return (
    <div>
      <form onSubmit={(event) => {
          handleSubmit(event);
        }}>
          <label className="my-2">Address:</label>
          <input type="text" 
              className = "mx-2 my-2"
              value = {address}
              onChange={(event) => {
              setAddress(event.target.value);
          }}/>
          <button className="btn btn-sm btn-info shadow mb-2" >Show</button>
      </form>

      <form onSubmit={handleFilter}>
          <label>Filter by AQI:</label>
          <select className="mx-2" onChange={e => setDropOption(e.target.value)}>
            <option value="0">Show All</option>
            <option value="1">0~50</option>
            <option value="2">51~100</option>
            <option value="3">101~150</option>
            <option value="4">151~200</option>
            <option value="5">201~300</option>
            <option value="6">301+</option>
          </select>
          <input className="btn btn-sm btn-info shadow mb-2"  type="submit" value="Filter" />
      </form>
    </div>
  );
};

export default SearchBox;