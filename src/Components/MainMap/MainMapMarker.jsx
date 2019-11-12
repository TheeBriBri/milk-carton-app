import React from "react";
import { Marker } from "react-google-maps";
import StethoscopeIcon from "../../Images/og-carton.png";

export default class DoctorMarker extends React.Component {

  render(){
    return(
        <Marker
          position={this.props.location}
          icon={StethoscopeIcon}
        >
        </Marker>
    );
  }
}