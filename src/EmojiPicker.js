import React, { Component } from 'react';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import "./ChatWindow.css";
import $ from 'jquery';

class EmojiPickerInput extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.appendEmoji = this.appendEmoji.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      text: "",
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

  render() {
    return (
      <div>
        <div>
          <input type="text" onChange={this.handleChange} value={this.state.text} />
          <span id="EmojiPickerPopover" onClick={this.toggle} className="emojiButton">&#x1F642;</span>
        </div>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="EmojiPickerPopover" toggle={this.toggle}>
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>
            <span onClick={this.appendEmoji}>&#x1F600;</span>
            <span onClick={this.appendEmoji}>&#x1F601;</span>
            <span onClick={this.appendEmoji}>&#x1F602;</span>
            <span onClick={this.appendEmoji}>&#x1F923;</span>
            <span onClick={this.appendEmoji}>&#x1F603;</span>
            <span onClick={this.appendEmoji}>&#x1F604;</span>
            <span onClick={this.appendEmoji}>&#x1F605;</span>
            <span onClick={this.appendEmoji}>&#x1F606;</span>
            <span onClick={this.appendEmoji}>&#x1F609;</span>
            <span onClick={this.appendEmoji}>&#x1F60A;</span>
            <span onClick={this.appendEmoji}>&#x1F60B;</span>
            <span onClick={this.appendEmoji}>&#x1F60E;</span>
            <span onClick={this.appendEmoji}>&#x1F60D;</span>
            <span onClick={this.appendEmoji}>&#x1F618;</span>
            <span onClick={this.appendEmoji}>&#x1F617;</span>
            <span onClick={this.appendEmoji}>&#x1F619;</span>
            <span onClick={this.appendEmoji}>&#x1F61A;</span>
            <span onClick={this.appendEmoji}>&#x263A;</span>
            <span onClick={this.appendEmoji}>&#x1F642;</span>
            <span onClick={this.appendEmoji}>&#x1F917;</span>
            <span onClick={this.appendEmoji}>&#x1F929;</span>
            <span onClick={this.appendEmoji}>&#x1F914;</span>
            <span onClick={this.appendEmoji}>&#x1F928;</span>
            <span onClick={this.appendEmoji}>&#x1F610;</span>
            <span onClick={this.appendEmoji}>&#x1F611;</span>
            <span onClick={this.appendEmoji}>&#x1F636;</span>
            <span onClick={this.appendEmoji}>&#x1F644;</span>
            <span onClick={this.appendEmoji}>&#x1F60F;</span>
            <span onClick={this.appendEmoji}>&#x1F623;</span>
            <span onClick={this.appendEmoji}>&#x1F625;</span>
            <span onClick={this.appendEmoji}>&#x1F62E;</span>
            <span onClick={this.appendEmoji}>&#x1F910;</span>
            <span onClick={this.appendEmoji}>&#x1F62F;</span>
            <span onClick={this.appendEmoji}>&#x1F62A;</span>
            <span onClick={this.appendEmoji}>&#x1F62B;</span>
            <span onClick={this.appendEmoji}>&#x1F634;</span>
            <span onClick={this.appendEmoji}>&#x1F60C;</span>
            <span onClick={this.appendEmoji}>&#x1F61B;</span>
            <span onClick={this.appendEmoji}>&#x1F61C;</span>
            <span onClick={this.appendEmoji}>&#x1F61D;</span>
            <span onClick={this.appendEmoji}>&#x1F924;</span>
            <span onClick={this.appendEmoji}>&#x1F612;</span>
            <span onClick={this.appendEmoji}>&#x1F613;</span>
            <span onClick={this.appendEmoji}>&#x1F614;</span>
            <span onClick={this.appendEmoji}>&#x1F615;</span>
            <span onClick={this.appendEmoji}>&#x1F643;</span>
            <span onClick={this.appendEmoji}>&#x1F911;</span>
            <span onClick={this.appendEmoji}>&#x1F632;</span>
            <span onClick={this.appendEmoji}>&#x2639;</span>
            <span onClick={this.appendEmoji}>&#x1F641;</span>
            <span onClick={this.appendEmoji}>&#x1F616;</span>
            <span onClick={this.appendEmoji}>&#x1F61E;</span>
            <span onClick={this.appendEmoji}>&#x1F61F;</span>
            <span onClick={this.appendEmoji}>&#x1F624;</span>
            <span onClick={this.appendEmoji}>&#x1F622;</span>
            <span onClick={this.appendEmoji}>&#x1F62D;</span>
            <span onClick={this.appendEmoji}>&#x1F626;</span>
            <span onClick={this.appendEmoji}>&#x1F627;</span>
            <span onClick={this.appendEmoji}>&#x1F628;</span>
            <span onClick={this.appendEmoji}>&#x1F629;</span>
            <span onClick={this.appendEmoji}>&#x1F92F;</span>
            <span onClick={this.appendEmoji}>&#x1F62C;</span>
            <span onClick={this.appendEmoji}>&#x1F630;</span>
            <span onClick={this.appendEmoji}>&#x1F631;</span>
            <span onClick={this.appendEmoji}>&#x1F633;</span>
            <span onClick={this.appendEmoji}>&#x1F92A;</span>
            <span onClick={this.appendEmoji}>&#x1F635;</span>
            <span onClick={this.appendEmoji}>&#x1F621;</span>
            <span onClick={this.appendEmoji}>&#x1F620;</span>
            <span onClick={this.appendEmoji}>&#x1F92C;</span>
            <span onClick={this.appendEmoji}>&#x1F637;</span>
            <span onClick={this.appendEmoji}>&#x1F912;</span>
            <span onClick={this.appendEmoji}>&#x1F915;</span>
            <span onClick={this.appendEmoji}>&#x1F922;</span>
            <span onClick={this.appendEmoji}>&#x1F92E;</span>
            <span onClick={this.appendEmoji}>&#x1F927;</span>
            <span onClick={this.appendEmoji}>&#x1F607;</span>
            <span onClick={this.appendEmoji}>&#x1F920;</span>
            <span onClick={this.appendEmoji}>&#x1F921;</span>
            <span onClick={this.appendEmoji}>&#x1F925;</span>
            <span onClick={this.appendEmoji}>&#x1F92B;</span>
            <span onClick={this.appendEmoji}>&#x1F92D;</span>
            <span onClick={this.appendEmoji}>&#x1F9D0;</span>
            <span onClick={this.appendEmoji}>&#x1F913;</span>
            <span onClick={this.appendEmoji}>&#x1F608;</span>
            <span onClick={this.appendEmoji}>&#x1F47F;</span>
            <span onClick={this.appendEmoji}>&#x1F479;</span>
            <span onClick={this.appendEmoji}>&#x1F47A;</span>
            <span onClick={this.appendEmoji}>&#x1F480;</span>
            <span onClick={this.appendEmoji}>&#x2620;</span>
            <span onClick={this.appendEmoji}>&#x1F47B;</span>
            <span onClick={this.appendEmoji}>&#x1F47D;</span>
            <span onClick={this.appendEmoji}>&#x1F47E;</span>
            <span onClick={this.appendEmoji}>&#x1F916;</span>
            <span onClick={this.appendEmoji}>&#x1F4A9;</span>
          </PopoverBody>
        </Popover>
      </div>
    );
  }

}

export default EmojiPickerInput;
