import React from 'react';

function Navbar(props){
    console.log('props insdide the nav bar',props)
    return(
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
          <div>{props.usersOnline} Users online</div>
        </nav>
    )
}
export {Navbar};