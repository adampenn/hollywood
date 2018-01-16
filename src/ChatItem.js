import React, { Component } from 'react';
import moment from 'moment';
import { Row, Col, Alert } from 'reactstrap';
import './ChatItem.css'
import ChatItemDetails from './ChatItemDetails'

class ChatItem extends Component {

  constructor(props) {
    super(props);
    this.state = {items: props.items};
  }

  setTimeSinceCreated() {
    this.props.items.forEach((item, index) => {
      item.timestamp = moment(item.id).fromNow();
      return this.props.items[index] = item;
    })

    this.setState((prevState) => ({
      items: this.props.items
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setTimeSinceCreated(), 1 * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        {this.state.items.map(item => (
          <Row>
            <Col>
              <Alert color="dark w-100" key={item.id}>
                <Row className="pl-2">
                  <Col className="bg-white rounded message">{item.text}</Col>
                  <ChatItemDetails item={item} />
                </Row>
              </Alert>
            </Col>
          </Row>
        ))}
      </div>
    );
  }

}

export default ChatItem;
