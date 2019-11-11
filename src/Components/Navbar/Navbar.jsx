import React from 'react';
import { Menu } from "semantic-ui-react";
import {Link} from 'react-router-dom'
import './Navbar.css';

function NavBar() {
  return (
    <div class= "headerContainer">
      <h6 ><i>"Because one missing child is too many"</i></h6>
      <h1 className= "navbarTitle">THE MILK</h1>
      <h1 className= "navbarTitle">CARTON</h1>
      <h1 className= "navbarTitle">KIDS</h1>

      <img src={require('../../Images/og-carton.png')} alt='OG Carton'></img>

      <Menu class="ui three vertically fitted item menu">
        <Menu.Item className="item" id="newButton" as={Link} to="/missing-children">Missing Children</Menu.Item>
        <Menu.Item className="item" id="newButton" >Statistics</Menu.Item>
        <Menu.Item className="item" id="newButton" as={Link} to="/form">Report a Child Missing</Menu.Item>

      </Menu>
    </div>
  )
}

export default NavBar
