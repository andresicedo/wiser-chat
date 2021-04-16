import React from 'react'

export default function Translation({ message: { user, text, translation }}) {
    return (
        <div>
            <div>
                <h4>Recent message by: {user}</h4>
                <p>{translation}</p>
                <h5>(<i>{text}</i>)</h5>
            </div>
        </div>
    )
}
