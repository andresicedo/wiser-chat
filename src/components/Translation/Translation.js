import React from 'react'

export default function Translation({ message: { user, translated }}) {
    return (
        <div>
            <div>
                <h5>Recent message by: {user}</h5>
                <p>{translated}</p>
            </div>
        </div>
    )
}
