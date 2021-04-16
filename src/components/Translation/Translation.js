import React from 'react'

export default function Translation({ message }) {
    console.log(message.translated)
    return (
        <div>
            {message.translated}
        </div>
    )
}
