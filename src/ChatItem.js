import React, { Component } from 'react';
import moment from 'moment';
import { Alert } from 'reactstrap';

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
      <ul>
        {this.state.items.map(item => (
          <Alert color="dark" key={item.id}><span className="text-left">{item.timestamp}:</span> "{item.text}"</Alert>
        ))}
      </ul>
    );
  }

}

export default ChatItem;
