import React from 'react'

const Translation = ({ messages }) => (
    <div>
        {messages.map((message, i) => 
            <div key={i}>
                <div>{message.translated.translated}</div>
                </div>)}
    </div>
)

export default Translation;
