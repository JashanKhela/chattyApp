import React from 'react';
function Message(props) {
    if(props.Notification){
        return (<div >
            <div className="message">
                <span className="message-username">{props.username}</span>
                <span className="message-content">{props.content}</span>
            </div>
            <div className="message system">
                {props.Notification}
      </div>
        </div>)
    } else {
        return (<div >
        
            <div className="message">
                <span className="message-username">{props.username}</span>
                <span className="message-content">{props.content}</span>
            </div>
        </div>)
    }
    
}

export { Message };
{/* <span className="message-username">{props}</span>
        <span className="message-content">{props}</span> */}