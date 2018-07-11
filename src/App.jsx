import React, { Component } from 'react';
import { MessageList } from './MessageList.jsx';
import { ChatBar } from './ChatBar.jsx';
import { Navbar } from './navbar.jsx';
// import { Message } from './Message.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.socket = new WebSocket('ws:localhost:3001', 'protocolOne');
    this.message = {};
    this.state = {
      currentUser: 'Bob',
      messages: [],
    }
    this.newPost = this.newPost.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
  }
  newPost(username, content) {
    this.message['username'] = username;
    this.message.content = content;
  }
  changeUsername(username){
    this.setState({currentUser : username})
  }
  componentDidMount() {
    this.socket.onopen = (event) => {
      this.socket.send(JSON.stringify(this.message))
    };
    this.socket.onmessage = (event) => {
      var obj = JSON.parse(event.data);
      this.setState({
        messages: [...this.state.messages, {
          username: obj['username'],
          content: obj['content'], id: obj['id']
        }]
      })
    }
  }
  render() {
    return (
      <div>

        <Navbar />
        <MessageList messages={this.state.messages} currentuser={this.state.currentUser} />
        <ChatBar currentUser={this.state.currentUser} newPost={this.newPost} socket={this.socket} changeUsername={this.changeUsername} />
      </div>
    );
  }
}
export default App;
