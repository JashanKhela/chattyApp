import React from 'react';
import { Message } from './Message.jsx'
class MessageList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const messages = this.props.messages;
        const renderedMessages = messages.map((message, index) => <Message key={index} username={message.username} content={message.content} Notification={message.Notification}/>);

        return (
            <div>
                <main className="messages">
                    {renderedMessages}
                </main>
            </div>
        )
    }
}
export { MessageList }