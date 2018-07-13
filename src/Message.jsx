// This is the message component that renders the message either with or without notification
import React from 'react';
class Message extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let renderedComponent;
        if (this.props.Notification) {
            renderedComponent = (<div>
                <div className="message">
                    <span className="message-username" style={{ color: this.props.color }} >{this.props.username}</span>
                    <span className="message-content" >{this.props.content}</span>
                </div>
                <div className="message system">
                    {this.props.Notification}
                </div>
            </div>)
        } else {
            renderedComponent = (<div >
                <div className="message">
                    <span className="message-username" >{this.props.username}</span>
                    <span className="message-content">{this.props.content}</span>
                </div>
            </div>)
        }
        return (
            <div>
                {renderedComponent}
            </div>
        )
    }
}
export { Message }
