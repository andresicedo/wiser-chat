import React from 'react'

export default function Translation({ message: { user, translated }}) {
    return (
        <div>
            <div>
                <h5>Recent message by: {user[-1]}</h5>
                {console.log(translated)}
                <p>{translated}</p>
            </div>
        </div>
    )
}
