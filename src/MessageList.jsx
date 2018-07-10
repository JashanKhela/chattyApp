import React  from 'react';
import {Message} from './Message.jsx'
class MessageList extends React.Component {
    constructor(props) {
        super(props);  
        // console.log(props.messages[0].content);
    }
    
//     createMessages(props){
//         const messages = props.messages ;
//         const messageItems = messages.map((message) =>
//         < Message messages={this.messages} />
//   );


    // }
    render() {
        const messages = this.props.messages;
        const renderedMessages = messages.map((message, index) => <Message key={index} username={message.username} content={message.content}/>);
    
        return (
        <div>
            <main className="messages">
            {renderedMessages}
            </main>
        </div>
        )
    }
}
export {MessageList}