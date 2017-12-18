import React, { Component } from 'react';
import fire from './fire';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { message: [] }; // <- set up react state
  }

  componentWillMount(){
    /* create reference to message in firebase database */
    let messageRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    messageRef.on('child_added', snapshot => {
      /* update react state when maessage is added at firebase database */
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState(prevState => ({
        messages: [message].concat(prevState.messages),
      }));
    })
  }

  addMessage(e){
    e.preventDefault(); // <- prevent form submit from reloading page
    /* send the message to firebase */
    fire.database().ref('messages').push( this.inputEl.value );
    this.inputEl.value = ''; // <- clear the input
  }

  render(){
    return (
      <div>
        <form onSubmit={this.addMessage.bind(this)}>
          <input type="text" ref={ el => this.inputEl = el } />
          <input type="submit" />
          <ul>
            { /* render list of messages */
              this.state.messages.map( message => <li key={message.id}>{message.text}</li> )
            }
          </ul>
        </form>
      </div>
    );
  }

} // <- end of class extends

export default App;
