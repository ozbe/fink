import React, { Component } from 'react';
import { newMessage } from '../actions/messages';
import { WebSocketContext } from '../WSClient';

class Say extends Component {
    state = {
        text: ''
    }

    textInput = React.createRef();

    updateText = event => this.setState({ text: event.target.value })

    newMessage = () => {
        this.context.ws.send(newMessage(this.state.text));
        this.textInput.current.focus();
    }

    handleKeyPress = event => {
        if (event.key === 'Enter') this.newMessage();
    }

    render() {
        return (
            <div>
                <input
                    ref={this.input}
                    placeholder="Say" 
                    value={this.text} 
                    onChange={this.updateText} 
                    onKeyPress={this.handleKeyPress}
                />
                <button onClick={this.newMessage}>Send</button>
            </div>
        )
    }

    static contextType = WebSocketContext;
}

export default Say;