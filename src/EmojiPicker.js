import React, { Component } from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import "./EmojiPicker.css";
import $ from 'jquery';

class EmojiPickerInput extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.appendEmoji = this.appendEmoji.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      text: "",
      emojis: ['😀','😁','😂','🤣','😃','😄','😅','😆','😉','😊',
               '😋','😎','😍','😘','😗','😙','😚','🙂','🤩','🤔',
               '🤨','😐','😑','😶','🙄','😏','😣','😥','😮','🤐',
               '😯','😪','😫','😴','😌','😛','😜','😝','🤤','😒',
               '😓','😔','😕','🙃','🤑','😲','🙁','😖','😞','🤓',
               '😟','😤','😢','😭','😦','😧','😨','😩','🤯','😬',
               '😰','😱','😳','🤪','😵','😡','😠','🤬','😷','🤒',
               '🤕','🤢','🤮','🤧','😇','🤠','🤡','🤥','🤫','🤭',
               '🧐','😈','👿','💀'
              ],
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  appendEmoji(e) {
    e.persist();
    this.setState((prevState) => ({
      text: prevState.text + $(e.target).text()
    }));
  }

  handleChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var newItem = {
      text: this.state.text,
      id: Date.now(),
      timestamp: "0 seconds ago",
      userName: this.props.data.userName
    };
    this.setState({
      text: ""
    });
    this.props.data.setItems(newItem);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="emojiInputContainer">
          <div>
            <input type="text" onChange={this.handleChange} value={this.state.text}  className="h-100 emojiInput"/>
            <span id="EmojiPickerPopover" onClick={this.toggle} className="emojiButton">&#x1F642;</span>
          </div>
          <Button className="ml-2">{'Send'}</Button>
        </form>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="EmojiPickerPopover" toggle={this.toggle}>
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>
            {this.state.emojis.map(emoji => (
              <span key={emoji} onClick={this.appendEmoji}>{emoji}</span>
            ))}
          </PopoverBody>
        </Popover>
      </div>
    );
  }

}

export default EmojiPickerInput;
