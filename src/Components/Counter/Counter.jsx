import React from 'react';
import { render } from 'react-dom';
import CountUp from 'react-countup';
import { Button } from 'semantic-ui-react';

function Counter() {
  return (
    <Button size="massive"  color='red'>
      <h2>Children Missing to Date:</h2>
      <CountUp start={399420} end={460000} duration={4147200} />
    </Button>
);
}

export default Counter