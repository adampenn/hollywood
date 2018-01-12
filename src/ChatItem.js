import React, { Component } from 'react';

class ChatItem extends Component {

  constructor(props) {
    super(props);
    this.state = {items: props.items};
  }

  setTimeSinceCreated() {
    this.props.items.forEach((item, index) => {
      var hours,
          minutes;
      item.timeSinceCreated += 1;
      if (item.timeSinceCreated < 60) {
        item.timeSinceCreatedText = item.timeSinceCreated === 1 ? 1 + " second ago" : item.timeSinceCreated + " seconds ago";
      } else if (item.timeSinceCreated < 3600) {
        minutes = Math.floor(item.timeSinceCreated/60)
        item.timeSinceCreatedText = minutes === 1 ? 1 + " minute ago" : minutes + " minutes ago";
      } else if (item.timeSinceCreated > 3599) {
        hours = Math.floor(item.timeSinceCreated/3600)
        item.timeSinceCreatedText = hours === 1 ? 1 + " hour ago" : hours + " hours ago";
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
          <li key={item.id}>{item.timeSinceCreatedText}: "{item.text}"</li>
        ))}
      </ul>
    );
  }

}

export default ChatItem;
