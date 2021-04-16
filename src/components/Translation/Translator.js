import React from 'react'
import Translation from './Translation';

const Translator = ({ messages }) => (
    <div>
        {messages.map((message, i) => 
            <div key={i}>
                <div><Translation message={message}/></div>
                </div>)}
        {console.log(messages)}
    </div>
)

export default Translator;
