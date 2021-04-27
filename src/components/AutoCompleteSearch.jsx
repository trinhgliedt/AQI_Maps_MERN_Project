import { navigate } from "@reach/router";
import React, { useState, useEffect, useRef } from "react";
import Geocode from "react-geocode";

let autoComplete;

const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function() {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

function handleScriptLoad(updateQuery, autoCompleteRef) {
  autoComplete = new window.google.maps.places.Autocomplete(
    autoCompleteRef.current
    // autoCompleteRef.current,
    // { types: ["(cities)"], componentRestrictions: { country: "us" } }

  );
  autoComplete.setFields(
    ['address_components', 'geometry', 'name']);
  autoComplete.addListener("place_changed", () =>
    handlePlaceSelect(updateQuery)
  );
}

async function handlePlaceSelect(updateQuery, setLoc ) {
  const addressObject = autoComplete.getPlace();
  const query = addressObject.formatted_address;
  Geocode.setApiKey(process.env.REACT_APP_API_KEY);

  updateQuery(query);
  // Geocode.fromAddress(addressObject.formatted_address).then(
  //   res => {
  //     console.log("res.data.results.geometry.address: ",res.results[0].geometry.address);
  //     setLoc(res.results[0].geometry.location);
  //     navigate(`/info/${res.results[0].geometry.location.lat}/${res.results[0].geometry.location.lng}`);
  //   },
  //   err => {
  //     console.error(err);
  //   }
  // );
  console.log(addressObject);
}

function SearchLocationInput() {
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );
  }, []);

  return (
    <div className="search-location-input">
      <input
        ref={autoCompleteRef}
        onChange={event => setQuery(event.target.value)}
        placeholder="Enter an address"
        value={query}
      />
    </div>
  );
}

export default SearchLocationInput;