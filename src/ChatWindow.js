import React, { Component } from 'react';
import ChatItem from './ChatItem';
import EmojiPickerInput from './EmojiPicker'

class ChatWindow extends Component {

  constructor(props) {
    super(props);
    this.setItems = this.setItems.bind(this);
    this.state = {items: []};
  }

  render() {
    return (
      <div>
        <h3>Stukent Chat App</h3>
        <ChatItem items={this.state.items}/>
        <EmojiPickerInput setItems={this.setItems} />
      </div>
    );
  }

  setItems(newItem) {
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem)
    }));
  }

}

export default ChatWindow;
