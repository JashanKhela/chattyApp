// This is a function that is responsible for my NavBar and displaying users
import React from 'react';
function Navbar(props) {
    return (
        <nav className="navbar">
            <a href="/" className="navbar-brand">Chatty</a>
            <div className="useronline" >{props.usersOnline} Users online</div>
        </nav>
    )
}
export { Navbar };