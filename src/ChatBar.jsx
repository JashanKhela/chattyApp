import React from 'react';
class ChatBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            username: this.props.currentUser

        }
        this.onContentChange = this.onContentChange.bind(this);
        this.onUserNameChange = this.onUserNameChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);

    }
    onContentChange(event) {
        this.setState({ content: event.target.value })
    }
    onUserNameChange(event) {

        // this.props.changeUsername(event.target.value)
        this.setState({ username: event.target.value })
    }
    handleKeyPress(event) {
        const messageType = 'postMessage'
        if (event.key === 'Enter') {
            this.props.newPost(this.state.username, this.state.content, messageType);
            this.setState({content : ''})
        }
    }
    render() {
        return (
            <footer className="chatbar">
                <input className="chatbar-username" onChange={this.onUserNameChange} placeholder='Enter a Name' defaultValue={this.state.username} />
                <input className="chatbar-message" id='chatbar'
                    onChange={this.onContentChange}
                    onKeyPress={this.handleKeyPress}
                    placeholder="Type a message and hit ENTER"
                    value={this.state.content} />
            </footer>
        )
    }

}
export { ChatBar }