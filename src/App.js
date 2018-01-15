import React, { Component } from 'react';
import stukentLogo from './stukentLogo.png';
import './App.css';
import ChatWindow from './ChatWindow';
import { Input } from 'reactstrap';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: ""
    };

    this.userNameChanged = this.userNameChanged.bind(this);
  }

  userNameChanged(e) {
    this.setState({userName: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={stukentLogo} className="App-logo" alt="logo" />
        </div>
        <ChatWindow userName={this.state.userName}/>
        <Input value={this.state.userName} type="text" onChange={this.userNameChanged} placeholder="Current Users Name" />
      </div>
    );
  }
}

export default App;
