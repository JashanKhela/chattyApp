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
      users: 0,
      userColor: ''
    }
    this.newPost = this.newPost.bind(this);
    this.changeUsername = this.changeUsername.bind(this);

  }
  newPost(username, content, messagetype) {
    if (this.state.currentUser !== username) {

      let obj = {
        username: this.state.currentUser,
        newUser: username,
        content: content,
        type: 'postNotification'
      }
      this.setState({
        currentUser: username
      })
      this.socket.send(JSON.stringify(obj));
    } else {
      //if(this.state.currentUser)
      this.message['username'] = username;
      this.message.content = content;
      this.message.type = messagetype
      this.socket.send(JSON.stringify(this.message));
    }


  }
  changeUsername(username) {

    this.setState({ currentUser: username })
  }

  componentDidMount() {
    this.socket.onmessage = (event) => {
      var obj = JSON.parse(event.data);
      if (obj.type === 'usersOnline') {
        this.setState({ users: obj.usersOnline })


      }
      if (obj.type === 'incomingMessage') {
        this.setState({
          messages: [...this.state.messages, {
            username: obj['username'],
            content: obj['content'], id: obj['id']
          }]
        })
      } else {
        this.setState({
          userColor: obj['color'],
          messages: [...this.state.messages, {
            Notification: obj['message'],
            username: obj['username'],
            content: obj['content'],
            id: obj['id'],
          }]
        })
      }

    }
  }
  render() {

    return (
      <div>
        <Navbar usersOnline={this.state.users} />
        <MessageList messages={this.state.messages} currentuser={this.state.currentUser} color={this.state.userColor} />
        <ChatBar currentUser={this.state.currentUser} newPost={this.newPost} changeUsername={this.changeUsername} />
      </div>
    );
  }
}
export default App;
