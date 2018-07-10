import React from 'react';
class ChatBar extends React.Component{
    constructor(props){
        super(props);
    }
    render () { return (
        <footer className="chatbar">
          <input className="chatbar-username" placeholder="Your Name (Optional)" value ={this.props.currentUser.name} />
          <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
        </footer>
      )}

}
export {ChatBar}