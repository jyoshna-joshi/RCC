import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SaveTempleteContent from './SaveTempleteContent';
import { Login } from './Login';
import ViewAllContent from './ViewAllContent';
import Test2 from './Test2';



function Test() {
  return (
    <Tabs
    defaultActiveKey="profile"
    id="justify-tab"
    className="mb-3"
    justify
    >
      <Tab eventKey="home" title="Home">
        <Test2/>
      </Tab>
      <Tab eventKey="allContents" title="All contents">
       <ViewAllContent/>
      </Tab>
      <Tab eventKey="uploadfile" title="Upload file">
        <SaveTempleteContent/>
      </Tab>
      <Tab eventKey="adminLogin" title="Admin login">
        <Login/>
      </Tab>
    </Tabs>
  );
}

export default Test;