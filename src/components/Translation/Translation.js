import React from 'react'

const Translation = ({ messages }) => (
    <div>
        {messages.map((message, i) => 
            <div key={i}>
                <div>{message.translated}</div>
                </div>)}
        {console.log(messages)}
    </div>
)

export default Translation;
