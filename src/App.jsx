import React, { Component } from 'react';
import { MessageList } from './MessageList.jsx';
import { ChatBar } from './ChatBar.jsx';
import { Navbar } from './navbar.jsx';
// import { Message } from './Message.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: { name: '' },
      messages: [{
        username: 'Bob',
        content: 'test'
      }]
    }
    this.newPost = this.newPost.bind(this);
  }
  newPost(username, content) {
    
    this.setState({
      messages : [...this.state.messages , {username: username, content: content}]
    })

  }
  componentDidMount() {
   
    setTimeout(() => {
      const newMessage = { id: 3, username: "Michelle", content: "Hello there!" };
      const messages = this.state.messages.concat(newMessage)
      this.setState({ messages: messages })
    }, 3000);
    this.socket = new WebSocket('ws:localhost:3001', 'protocolOne');
  
  }
  render() {
    return (
      <div>

        <Navbar />
        <MessageList messages={this.state.messages} />
        <ChatBar currentUser={this.state.currentUser} newPost={this.newPost} />
      </div>

    );
  }
}
export default App;
