const express = require('express');
const ws      = require('ws');
const uuidv1 = require('uuid/v1');
// Set the port to 3000
const PORT = 3001;
let usersOnline = 0 ;
// Create a new express server
const app = express()
 // Make the express server serve static assets (html, javascript, css) from the /public folder
 .use(express.static('public'))
 .listen(
   PORT, '0.0.0.0', 'localhost',
   () => console.log(`Listening on ${PORT}`)
 );

// App logic below
const randomColorArray = ['#4286f4' , '#f44153' , '#4cf441' , '#f4f427','#f48942']
function randomColor(){
  var randomColor = randomColorArray[Math.floor(Math.random() * randomColorArray.length)];
  return randomColor
}
console.log('random color is ' , randomColor())

// Temporary store for the current state of the document
let contents = '';

// wss = web socket server
const wss = new ws.Server({ server: app });

function broadcastMessage(message) {
 for (let client of wss.clients) {
   if (client.readyState === ws.OPEN) {
     client.send(message , usersOnline);
   }
 }
}

function handleMessage(message) {

 var an_id = uuidv1();
 //console.log('id is ', an_id);
 var obj = JSON.parse(message);
 obj['id'] = an_id;
switch(obj['type']) {
   case "postMessage":
     obj['type'] = 'incomingMessage';

     console.log('incomingMessage');
     break;
   case "postNotification":
    obj['type'] = 'incomingNotification';
    console.log('incomingNotification')
    obj['message'] = obj.username + ' has changed their name to ' + obj.newUser;
    obj['username'] = obj.newUser ;
    obj['color'] = randomColor();
     // handle incoming notification
     break;
   default:
      //console.log('obj type ', obj['type'])
     // show an error in the console if the message type is unknown
     console.log('default value here')
 }
 contents = JSON.stringify(obj);
 broadcastMessage(contents);
}

function handleConnection(client) {

 console.log('New Connection!');
 client.on('message', handleMessage);
 usersOnline = wss.clients.size



 broadcastMessage(JSON.stringify({usersOnline, type: "usersOnline"}));
 console.log('there are this many users online ' , usersOnline)
}

wss.on('connection', handleConnection)


 wss.on('connection', socket => {
  socket.once('close', () => {
    usersOnline = wss.clients.size
    broadcastMessage(JSON.stringify({usersOnline, type: "usersOnline"}));
    console.log('Closed the Connection')
  })
})





