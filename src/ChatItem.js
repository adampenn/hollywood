import React, { Component } from 'react';
import moment from 'moment'

class ChatItem extends Component {

  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.timestamp}: "{item.text}"</li>
        ))}
      </ul>
    );
  }

}

export default ChatItem;
