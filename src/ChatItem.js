import React, { Component } from 'react';
import moment from 'moment';

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
          <li key={item.id}>{item.timestamp}: "{item.text}"</li>
        ))}
      </ul>
    );
  }

}

export default ChatItem;
