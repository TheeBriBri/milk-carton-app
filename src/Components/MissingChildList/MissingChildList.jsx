import React, {Fragment} from 'react';
import MissingChildFullDetails from '../MissingChildFullDetails/MissingChildFullDetails';
import MissingChildMinDetails from '../MissingChildMinDetails/MissingChildMinDetails'

import './MissingChildList.css'

function MissingChildList({kids, sortedKids}) {
  

  return (
    <div className='missingChildListContainer' id='scroll'>
      <div className='missingChildFullDetailsContainer'>
        {kids.map((singleKid, position) => (

            position === 0 || position === 1 ?
              <MissingChildFullDetails 
              singleKid={singleKid} 
              key={singleKid.ncmec_number} 
              first_name={singleKid.first_name}
              photo={singleKid.photo}
              date={singleKid.date}
              found={singleKid.found}
              city={singleKid.city}
              state={singleKid.state}
              ></MissingChildFullDetails>
              : null

        ))}
      </div>
      <div className='missingChildMinDetailsContainer'>
        {kids.map((singleKid, position) => (
          position > 1 ?
            <MissingChildMinDetails 
            singleKid={singleKid} 
            key={singleKid.ncmec_number} 
            first_name={singleKid.first_name}
            photo={singleKid.photo}
            date={singleKid.date}
            found={singleKid.found}
            ></MissingChildMinDetails>
            : null
        ))}
      </div>
    </div>

  )
}

export default MissingChildList

