
// DoctorsMap.js

import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import DoctorMarker from "./MainMapMarker";

const DoctorsMap = withScriptjs(withGoogleMap((children) =>{
  console.log(children)

  const markers = children.doctors.map( doctor => <DoctorMarker
                    key={doctor.uid}
                    doctor={doctor}
                    location={{lat: doctor.closestPractice.lat, lng: doctor.closestPractice.lon}}
                  />);
                  
  return (
      <GoogleMap
        defaultZoom={14}
        center={ { lat:  42.3601, lng: -71.0589 } }
        >
        {markers}
      </GoogleMap>
    );
  }
))

export default DoctorsMap;