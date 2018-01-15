import React, { Component } from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ChatItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deatilsModalOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      deatilsModalOpen: !this.state.deatilsModalOpen
    });
  }

  render() {
    return (
      <Col xs="4" sm="3" md="2">
        <Button color="dark" onClick={this.toggle} className="btn-sm">Message Details</Button>
        <Modal isOpen={this.state.deatilsModalOpen} toggle={this.toggle} className="modal-lg">
          <ModalHeader toggle={this.toggle}>Message Details</ModalHeader>
          <ModalBody>
            <Container>
              <Row>
                <Col>
                  <span className="font-weight-bold pr-2">
                    Time Posted
                  </span>
                  <span>
                    {this.props.item.timestamp}
                  </span>
                </Col>
                <Col>
                  <span className="font-weight-bold pr-2">
                    Posted By
                  </span>
                  <span>
                    {this.props.item.userName}
                  </span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span className="font-weight-bold pr-2">
                    Message
                  </span>
                  <div>
                    {this.props.item.text}
                  </div>
                </Col>
              </Row>
            </Container>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Close</Button>{' '}
          </ModalFooter>
        </Modal>
      </Col>
    );
  }
}

export default ChatItemDetails;
