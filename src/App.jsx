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
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      const newMessage = { id: 3, username: "Michelle", content: "Hello there!" };
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({ messages: messages })
    }, 3000);
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
