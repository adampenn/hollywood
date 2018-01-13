import React, { Component } from 'react';
import ChatItem from './ChatItem';
import EmojiPickerInput from './EmojiPicker'

class ChatWindow extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {items: []};
  }

  render() {
    return (
      <div>
        <h3>Stukent Chat App</h3>
        <div> Emojies:
        </div>
        <ChatItem items={this.state.items}/>
        <form onSubmit={this.handleSubmit}>
          <EmojiPickerInput />
          <button>{'Send'}</button>
        </form>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    var newItem = {
      text: this.state.text,
      id: Date.now(),
      timestamp: "0 seconds ago"
    };
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }

}

export default ChatWindow;
