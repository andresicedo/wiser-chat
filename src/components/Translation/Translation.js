import React from 'react'

export default function Translation({ message: { text, user }}) {
    return (
        <div>
            <div>
                <h5>Recent message by: {user}</h5>
                <p>{text.translated}</p>
            </div>
        </div>
    )
}
