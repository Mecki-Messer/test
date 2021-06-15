import React, { useState } from 'react'
import Message from './Message'

export function MessageList({ messages }) {

    return (
        messages.map(message => {
            return <Message message={message}/>
        })
        
    )
}

export default function MessageBoard() {
    const [messages, setMessages] = useState(["dope", "lmao", "coco best kaichou"])

    return (
        <>
        <h2>Welcome to the Message Board</h2>
        <h3>Write New Message!</h3>
        <p>Display Name:</p>
        <input type="text" />
        <p>Your Message:</p>
        <textarea name="message" cols="40" rows="5"></textarea>
        <br></br>
        <button>Submit!</button>
        <br></br>
        <h3>Messages for Coco</h3>
        <br></br>
        <MessageList messages={messages}/>
        </>
    )
}
