import React from 'react';
import moment from 'moment';
import './MissingChildFullDetails.css'


function MissingChildFullDetails({first_name, date, photo, found, city, state}) {
  return (
    
    <div className='recentSingleChild'>
      <img 
        src= {photo} 
        alt="Original Missing Child" 
        onError={ event =>  event.target.parentNode.remove() } 
        ></img>               
      <h4>{first_name}</h4>
      <p>Missing:{moment(date).format("MMM Do YY")}</p>
      <p>From:{city}, {state}</p>

    </div>
  )
}

export default MissingChildFullDetails
