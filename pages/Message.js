import React from 'react'

export default function Message( {message} ) {
    return (
        <div>
            <h4>{message.name}</h4>
            <p>{message.msg}</p>
            <p>[DEBUG]MessageID: {message.id}</p>
        </div>
    )
}
