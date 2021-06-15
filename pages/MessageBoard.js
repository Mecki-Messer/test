import React, { useState } from 'react'

export default function MessageBoard() {
    return (
        <>
        <h2>Welcome to the Message Board</h2>
        <br></br>
        <h3>Write New Message!</h3>
        <p>Display Name:</p>
        <input type="text" />
        <p>Your Message:</p>
        <textarea name="message" cols="40" rows="5"></textarea>
        <br></br>
        <button>Submit!</button>
        </>
    )
}
