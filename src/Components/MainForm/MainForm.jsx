import React from 'react';
import { Form } from 'semantic-ui-react';
import { useState } from 'react';

import {  Modal, Menu, Sidebar, Segment, Button, Icon, Image } from "semantic-ui-react"
import { Link } from "react-router-dom"



function MainForm() {
  let [state, setState] = useState([]);

  const handleShowClick = () => setState({ visible: true })
  const handleSidebarHide = () => setState({ visible: false })
  return (
    
          <div className="formContainer">
      <h1>Anonymous Reporting Form</h1>
        <Form>
          <h3>Information on the Incident Reported</h3>
          <Form.Group>
            <Form.Input label='Details of the Incident' placeholder='Please try to be as descriptive as possible' width={6} />
          </Form.Group>
          <h3>Information on the Offender</h3>

          <Form.Group>
            <Form.Input label='Name of Offender' placeholder='Name' width={2} />
            <Form.Input label='Any additional Information' placeholder='Additional Information' width={2} />
          </Form.Group>
          <h3>Information on the Victim</h3>

          <Form.Group>
            <Form.Input label='Name of Victim' placeholder='Name' width={8} />
            <Form.Input label='Any additional Information' placeholder='Additional Information' width={6} />
          </Form.Group>
        </Form>
        <Button animated fluid >
        <Button.Content visible>Submit</Button.Content>
      <Button.Content hidden>
        <Icon name='paper plane' />
      </Button.Content>
          </Button>
        <Button fluid as={Link} to="/">Home</Button>
      
    </div>
         
    
  )
}

export default MainForm
