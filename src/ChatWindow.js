import React, { Component } from 'react';
import ChatItem from './ChatItem';

class ChatWindow extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {items: [], text: ''};
  }

  render() {
    return (
      <div>
        <h3>Stukent Chat App</h3>
        <ChatItem items={this.state.items}/>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.text} />
          <button>{'Send'}</button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var now = new Date();
    var hour = now.getHours();
    var ampm = hour < 12 ? " AM" : " PM";
    hour %= 12;
    hour = hour ? hour : 12;
    var newItem = {
      text: this.state.text,
      id: now.valueOf(),
      timestamp: ('0' + hour).slice(-2) + ':' +
                 ('0' + now.getMinutes()).slice(-2) + ':' +
                 ('0' + now.getSeconds()).slice(-2) + ampm
    };
    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }

}

export default ChatWindow;
