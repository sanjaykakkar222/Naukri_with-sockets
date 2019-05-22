

import React from 'react';
import io from 'socket.io-client';
// import config from '../config';

import Messages from './Messages';
import ChatInput from './ChatInput';
import  './ChatApp.css'
import './Login.css'
import './app1.css'
// require('../styles/ChatApp.css');
 
var currentUser
class ChatApp extends React.Component {
  socket = {};
  constructor(props) {

    super(props);

    currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.state = { messages: [],reciever:{} };
    this.sendHandler = this.sendHandler.bind(this);
    this.state.reciever = this.props.location.state.reciever;
    
    this.socket = io('http://localhost:5001', { query:{"username": currentUser.name  ,"userID": currentUser._id}  }).connect();
    console.log(this.state.reciever )
    // Listen for messages from the server
    this.socket.on('server:message', message => {

      this.addMessage(message);
    });
  }

  sendHandler(message) {
    const messageObject = {
      username: currentUser.name,
      sendTo: this.state.reciever.name,
      sendToID: this.state.reciever._id,
      message
    };

   
    this.socket.emit('client:message', messageObject);

    messageObject.fromMe = true;
    this.addMessage(messageObject);
  }

  addMessage(message) {
   
    const messages = this.state.messages;
    messages.push(message);
    this.setState({ messages });
  }

  render() {
    return (
      <div className="container">
        <h3>React Chat App</h3>
        <Messages messages={this.state.messages} />
        <ChatInput onSend={this.sendHandler} />
      </div>
    );
  }

}
ChatApp.defaultProps = {
  username: 'Anonymous'
};

export default ChatApp;