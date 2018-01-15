import React, { Component } from 'react';
import stukentLogo from './stukentLogo.png';
import './App.css';
import ChatWindow from './ChatWindow';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Container fluid={true} className="App">
        <Row className="App-header">
          <Col>
            <img src={stukentLogo} className="App-logo" alt="logo" />
          </Col>
        </Row>
        <ChatWindow />
      </Container>
    );
  }
}

export default App;
