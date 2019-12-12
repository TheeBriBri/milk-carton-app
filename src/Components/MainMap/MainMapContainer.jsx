import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import {  Modal, Menu, Sidebar, Segment, Button, Icon, Image } from "semantic-ui-react"
import './MainMap.css'

import childData from "./data/children.json";

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 34.0522,
    longitude: -118.243683,
    width: "100vw",
    height: "100vh",
    zoom: 8
  });
  const [selectedChild, setSelectedChild] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedChild(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken='pk.eyJ1IjoidGhlZWJyaWJyaSIsImEiOiJjazJ2djdkOGIwOGh5M2lueHZleG84YjA0In0.n-xUsiC4CrFXSFaoa0YM3w'
        mapStyle="mapbox://styles/theebribri/ck2vv7ods0fmr1cnza9ofeqyi"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        {childData.MainObject.map(child => (
          <Marker
            key={child._id}
            latitude={child.location[0]}
            longitude={child.location[1]}
          >
            <button
              className="markerButton"
              onClick={e => {
                e.preventDefault();
                setSelectedChild(child);
              }}
            >
              
              <img src={child.photo} alt="OG Child" />
            </button>
          </Marker>
        ))}
        {selectedChild ? (
          <Popup
            latitude={selectedChild.location[0]}
            longitude={selectedChild.location[1]}
            onClose={() => {
              setSelectedChild(null);
            }}
          >
            <div className="mainPopups">
              <img src={selectedChild.photo} alt="OG Child"></img>
              <img src={selectedChild.aged_photo} alt="OG Child"></img>
              <h2>{selectedChild.first_name}</h2>
              <p>{selectedChild.circumstance}</p>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}
