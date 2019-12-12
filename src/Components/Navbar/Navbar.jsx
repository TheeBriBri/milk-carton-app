import React from 'react';
import './Navbar.css';

function NavBar() {
  return (
    <div className="landing-page-wrapper">
      <div className="landing-page">
          <h6 ><i>"Because one missing child is too many"</i></h6>
          <div className="titleBar">
            <h1 className= "navbarTitle">THE MILK</h1>
            <h1 className= "navbarTitle">CARTON</h1>
            <h1 className= "navbarTitle">KIDS</h1>
          </div>

          <img src={require('../../Images/og-carton.png')} alt='OG Carton'></img>

          <div class="ui inverted large three item menu footer-bar">
            <a  class="yellow item" href="/missing-children"><i class="big users icon"></i>
</a>
            <a  class="yellow item" href="/map"><i class="big map outline icon"></i></a>
            <a  class="yellow item" href="/form">Report a Child Missing</a>
          </div>
      </div>
    </div>
  )
}

export default NavBar
