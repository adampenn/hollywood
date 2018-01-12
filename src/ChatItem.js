import React, { Component } from 'react';
import moment from 'moment';

class ChatItem extends Component {

  constructor(props) {
    super(props);
    this.state = {items: props.items};
  }

  setTimeSinceCreated() {
    this.props.items.forEach((item, index) => {
      var hours,
          minutes,
          seconds = moment().diff(moment(item.id), "seconds");
      if (seconds < 60) {
        item.timestamp = seconds === 1 ? 1 + " second ago" : seconds + " seconds ago";
      } else if (seconds < 3600) {
        minutes = Math.floor(seconds/60)
        item.timestamp = minutes === 1 ? 1 + " minute ago" : minutes + " minutes ago";
      } else if (seconds > 3599) {
        hours = Math.floor(seconds/3600)
        item.timestamp = hours === 1 ? 1 + " hour ago" : hours + " hours ago";
      }
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
