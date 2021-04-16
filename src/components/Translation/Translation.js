import React from 'react'

export default function Translation({ message: { user, text, translated }}) {
    return (
        <div>
            <div>
                <h4>Recent message by: {user}</h4>
                {console.log(translated)}
                <p>{translated}</p>
                <h5><i>({text})</i></h5>
            </div>
        </div>
    )
}
