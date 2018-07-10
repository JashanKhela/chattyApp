import React, { Component } from 'react';
import { MessageList } from './MessageList.jsx';
import { ChatBar } from './ChatBar.jsx';
import { Navbar } from './navbar.jsx';
// import { Message } from './Message.jsx';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { currentUser: {name : ''} ,
    messages : [{username : 'Bob' ,
    content: 'test'}]

    }
  }
  render() {
    return (
      <div>

        <Navbar />
        <MessageList messages={this.state.messages} />
        <ChatBar currentUser={this.state.currentUser} />
      </div>

    );
  }
}
export default App;
