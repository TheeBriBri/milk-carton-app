import React from 'react';
import moment from 'moment'
import { useState } from 'react';
import {  Modal, Menu, Sidebar, Segment, Button, Icon, Image } from "semantic-ui-react"

import { Link } from "react-router-dom"
import './MissingChildList.css'


function MissingChildList({kids, sortedKids, children}) {
  let [state, setState] = useState([]);

  const handleShowClick = () => setState({ visible: true })
  const handleSidebarHide = () => setState({ visible: false })

  return (
    <div className="missingChildListContainer">
      <div className="headerBar">
          <Button inverted icon disabled={state.visible} onClick={handleShowClick}>
            <Icon name='bars' inverted color='black' />
          </Button>
          <div className="headerBarTitle">The Milk Carton Kids</div>
      </div>

        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay '
            direction='left'
            icon='labeled'
            inverted
            onHide={handleSidebarHide}
            vertical
            visible={state.visible}
            width='thin'
          >
            <Menu.Item as={Link} to="/">
              <h2>Home</h2>
            </Menu.Item>
            <Menu.Item as={Link} to="/missing-children">
            <h1>Missing Children</h1>
            </Menu.Item>
            <Menu.Item as={Link} to="/statistics">
              <h4>Statistics</h4>
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <div className="missingChildList" >
              <div className= "recentSingleKidList">
              <div className= "missingChildListTitle">Missing Children</div>
                {kids.map((singleKid, position) => (
                  position === 1 || position%2 ?
                    <div className="recentSingleKid" >
                      <Modal trigger={<img src={singleKid.photo} alt='Original'/>}>
                        <Modal.Content image>
                          <Image wrapped size='medium' src={singleKid.aged_photo} />
                          <Modal.Description>
                            <h1>{singleKid.first_name} {singleKid.last_name}</h1>
                            <h3>{singleKid.circumstance}</h3>
                          </Modal.Description>
                        </Modal.Content>
                      </Modal>
                        <h2>{singleKid.first_name}</h2>
                        <h6>{moment(singleKid.date).format("MMM Do YYYY")}</h6>
                    </div> 
                    : 
                    <div className = {"recentSingleKid1"}>
                      <Modal trigger={<img src={singleKid.photo} alt='Original'/>}>
                        <Modal.Content image>
                          <Image wrapped  size='medium' src={singleKid.aged_photo} />
                          <Modal.Description>
                            <h1>{singleKid.first_name} {singleKid.last_name}</h1>
                            <h3>{singleKid.circumstance}</h3>
                          </Modal.Description>
                        </Modal.Content>
                      </Modal>
                          <h2>{singleKid.first_name}</h2>
                          <h6>{moment(singleKid.date).format("MMM Do YYYY")}</h6>
                    </div>
                ))}
              </div>
            </div>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
  )
}

export default MissingChildList

