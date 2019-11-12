import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// import { Container, Header, List, Image } from "semantic-ui-react"

// import './App.css';
import {getAllKids} from './ApiServices';
import MissingChildList from './Components/MissingChildList/MissingChildList'
import NavBar from './Components/Navbar/Navbar';
import MissingChildFullDetails from './Components/MissingChildFullDetails/MissingChildFullDetails';
import MainForm from './Components/MainForm/MainForm';
import MainMapContainer from './Components/MainMap/MainMapContainer'

function App({ children }) {
  const [kids, setKids] = useState([]);
  useEffect(() => {
    sortedKids()
  }, [])
  function sortedKids() {
    getAllKids()
      .then(kids => setKids(kids.sort(function (a, b) { 
        return new Date(b.date)- new Date(a.date);
      })))
  }
  // function getOneKid() {
  // }
  return (
    <Router>
      <div className="app">
          <Switch>
            <Route exact path="/" component={NavBar}></Route>
            <Route path="/missing-children" render={(props) => <MissingChildList {...props} kids={kids} sortedKids={sortedKids}/>}/>
            <Route path="/details/:id" component={MissingChildFullDetails}></Route>
            <Route path="/form" component={MainForm}></Route>
            <Route path="/statistics" component={MainMapContainer}></Route>


          </Switch>
      </div>
    </Router>
  );
}

export default App;