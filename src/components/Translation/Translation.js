import React from 'react'

export default function Translation({ message }) {
    console.log(message.text.translated)
    return (
        <div>
            {message.text.translated}
        </div>
    )
}
