import React from 'react'
import './MissingChildMinDetails.css'

function MissingChildMinDetails({kids, sortedKids,photo, first_name}) {
  return (
    <div className='missingChildMinDetailsContainer'>
        {/* {kids.map((singleKid, position) => (
          console.log(kids),
          position > 1 ?
            <MissingChildMinDetails 
            singleKid={singleKid} 
            key={singleKid.ncmec_number} 
            first_name={singleKid.first_name}
            photo={singleKid.photo}
            date={singleKid.date}
            found={singleKid.found}
            > */}
              <div className='singleChild'>
      <img 
        src={photo} 
        alt='Most recent missing child'
        onError={ event =>  event.target.parentNode.remove() }
        ></img>
        <h6>{first_name}</h6>
    </div>
            {/* </MissingChildMinDetails>
            : null
        ))} */}
      </div>
    
  )
}

export default MissingChildMinDetails;


