import React, { Component } from 'react';
import { Input, InputGroup, InputGroupAddon, Row, Col, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import $ from 'jquery';

class EmojiPickerInput extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.appendEmoji = this.appendEmoji.bind(this);
    this.toggleEmojiPicker = this.toggleEmojiPicker.bind(this);
    this.state = {
      text: "",
      userName: "",
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
      emojiPickerOpen: false
    };
  }

  toggleEmojiPicker() {
    this.setState({
      emojiPickerOpen: !this.state.emojiPickerOpen
    });
  }

  appendEmoji(e) {
    e.persist();
    this.setState((prevState) => ({
      text: prevState.text + $(e.target).text()
    }));
  }

  handleUserChange(e) {
    this.setState ({userName: e.target.value})
  }

  handleMessageChange(e) {
    this.setState({text: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    var newItem = {
      text: this.state.text,
      id: Date.now(),
      timestamp: "0 seconds ago",
      userName: this.state.userName
    };
    this.setState({
      text: ""
    });
    this.props.data.setItems(newItem);
  }

  render() {
    return (
      <Row>
        <Col>
          <InputGroup>
            <Input type="text" value={this.state.text} onChange={this.handleMessageChange}/>
            <InputGroupAddon className="p-0">
              <button className="btn" id="EmojiPickerPopover" onClick={this.toggleEmojiPicker}>&#x1F642;</button>
            </InputGroupAddon>
            <InputGroupAddon className="p-0">
              <button className="btn" onClick={this.handleSubmit}>{'Send'}</button>
            </InputGroupAddon>
          </InputGroup>
          <br/>
          <InputGroup>
            <InputGroupAddon className="py-0">User</InputGroupAddon>
            <Input value={this.state.userName} type="text" placeholder="Current Users Name" onChange={this.handleUserChange}/>
          </InputGroup>
          <br/>
        </Col>
        <Popover placement="bottom" isOpen={this.state.emojiPickerOpen} target="EmojiPickerPopover" toggle={this.toggleEmojiPicker}>
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>
            {this.state.emojis.map(emoji => (
              <span key={emoji} onClick={this.appendEmoji}>{emoji}</span>
            ))}
          </PopoverBody>
        </Popover>
      </Row>
    );
  }

}

export default EmojiPickerInput;
