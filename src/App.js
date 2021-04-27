import React, { useState, useEffect } from 'react';
// import ReactDOM from "react-dom";
import './App.css';
import axios from 'axios';
import { navigate, Router, Redirect } from '@reach/router';

import {Map} from './components/maps';
import EachStation from './components/EachStation';
import MarkerClusterer from '@googlemaps/markerclustererplus';
import SearchBox from "./components/SearchBox"
import FilteredTable from './components/FilteredTable';

import SearchLocationInput from "./components/AutoCompleteSearch";

function App({ mapProps }) {

  // successCallBack function in finding user location
  const successCallBack= position => {
    const { latitude, longitude } = position.coords;
    setCenteredPos({lat: latitude, lng: longitude});
    return {lat: latitude, lng: longitude};

  }
  // codes to user location
  function getUserLocation(){
    window.navigator.geolocation
    .getCurrentPosition(successCallBack, console.log);
  }
  const [centeredPos, setCenteredPos] = useState({lat: 40.730610, lng: -73.935242});
  const [AQIStations, setAQIStations] = useState([]);
  const [filteredStations, setFilteredStations] = useState([]);

  useEffect(() => {
    getUserLocation();
    axios.get("https://api.waqi.info/map/bounds/?token=d2583b4394214a830ffdade2d10b103620d66ee7&latlng=24.846565,-65.960261,48.987427,-124.732715")
    .then(response => {
      setAQIStations(response.data.data);
      setFilteredStations(response.data.data);
    })
    .catch((error) => console.log(error));
  },[])

  const addAQIStyle = (aqi) => {
    const hValue = 120 - Math.floor(aqi * 0.8);
    const sValue = "100%";
    const lValue = "50%";

    return `hsl(${hValue},${sValue},${lValue})`
  }

  const addMarkers = links => map => {
    const markerList = [];
    var iconColor="";
    var infoWindow;

    links.forEach((link, index) => {
      
      if (link.station.name.slice(link.station.name.length-6) !== "Mexico" && link.station.name.slice(link.station.name.length-6) !== "Canada"&& link.station.name.slice(link.station.name.length-8) !== "Saguenay" && link.aqi !== "-") {
        if (link.aqi > 200){iconColor ="purple";}
        else if (link.aqi > 150){iconColor ="red";}
        else if (link.aqi > 100){iconColor ="orange";}
        else if (link.aqi > 50){iconColor ="yellow";}
        else if (link.aqi <= 50){iconColor ="green";}
        var position = new window.google.maps.LatLng(link.lat, link.lon);
        const marker = new window.google.maps.Marker({
          map,
          position: position,
          title: link.station.name,
          id: index + 1,
          icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/"+iconColor+"-dot.png"
          }
        });

        markerList.push(marker);

        let infoStyle = `background-color:${addAQIStyle(link.aqi)}`;
        if (parseInt(link.aqi) > 200) {
          infoStyle = `background-color:purple`;
        }
        if (parseInt(link.aqi) > 100) {
          infoStyle += `;color:white`;
        }

        infoWindow = new window.google.maps.InfoWindow({});
        marker.addListener(`click`, () => {
          infoWindow.setContent(
            `<div style="${infoStyle}">
              <h4 style="${infoStyle}">${link.station.name}</h4>
              <p>Air Quality Index: <b>${link.aqi}</b></p>
              <p>Last Updated: ${link.station.time}</p>
            </div>`
          );
          infoWindow.open(map, marker);
          navigate(`/stations/${link.lat}/${link.lon}`);
        });
        map.addListener('click', function() {
          if (infoWindow) infoWindow.close();
      });
        
      }
    });

    new MarkerClusterer(map, markerList,
      {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
  };

  mapProps = {
    options: { center: centeredPos, zoom: 12 },
    onMount: addMarkers(filteredStations)
  };

  return (
    <div className='App'>
      <SearchBox setLoc={longLat => setCenteredPos(longLat)} aqiStations={AQIStations} setFilteredStations={setFilteredStations}/>
      {/* <SearchLocationInput setLoc={longLat => setCenteredPos(longLat)} /> */}
      <Map {...mapProps}/>
      <Router primary={false}>
        <FilteredTable path="/stations/filter" setLoc={longLat => setCenteredPos(longLat)} filteredStations={filteredStations}/>
        <EachStation style={{visibility: "visible"}} path="/stations/:locLat/:locLng" />
      </Router>
      <Redirect from="/" to="/stations/filter" noThrow="true" />
    </div>
  );
}

export default App;
