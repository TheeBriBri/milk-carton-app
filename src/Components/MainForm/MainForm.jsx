import React from 'react';
import { Form } from 'semantic-ui-react';

function MainForm() {
  return (
    <div>
      <h1>Anonymous Reporting Form</h1>
        <Form>
          <h3>Information on the Incident Reported</h3>
          <Form.Group>
            <Form.Input label='First name' placeholder='First Name' width={6} />
            <Form.Input label='Middle Name' placeholder='Middle Name' width={4} />
            <Form.Input label='Last Name' placeholder='Last Name' width={6} />
          </Form.Group>
          <h3>Information on the Offender</h3>

          <Form.Group>
            <Form.Input placeholder='2 Wide' width={2} />
            <Form.Input placeholder='2 Wide' width={2} />
          </Form.Group>
          <h3>Information on the Victim</h3>

          <Form.Group>
            <Form.Input placeholder='8 Wide' width={8} />
            <Form.Input placeholder='6 Wide' width={6} />
            <Form.Input placeholder='2 Wide' width={2} />
          </Form.Group>
        </Form>
      
    </div>
  )
}

export default MainForm
