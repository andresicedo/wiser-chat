import React from 'react'

const Translation = ({ messages, name }) => (
    <div>
        {messages.map((message, i) => 
            <div key={i}>
                <div>{message.translated}</div>
                <div>{name}</div>
                </div>)}
    </div>
)

export default Translation;
