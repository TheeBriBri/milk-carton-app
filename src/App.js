import React from 'react';
import { useState, useEffect } from 'react';

import './App.css';
import {getAllKids, getFoundKids} from './ApiServices';
import MissingChildList from './Components/MissingChildList/MissingChildList'
import Footer from './Components/Footer/Footer'
import MissingChildMinDetails from './Components/MissingChildMinDetails/MissingChildMinDetails';
import MissingChildFullDetails from './Components/MissingChildFullDetails/MissingChildFullDetails';


function App() {
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
    <div className="appContainer">
      <MissingChildList kids={kids} sortedKids={sortedKids}></MissingChildList>
      {/* <MissingChildFullDetails kids={kids} sortedKids={sortedKids}></MissingChildFullDetails>
      <MissingChildMinDetails kids={kids} sortedKids={sortedKids}></MissingChildMinDetails> */}
      <Footer></Footer>
    </div>
  );
}

export default App;