import React from 'react'
import Translation from './Translation';

const Translator = ({ messages }) => (
    <div>
        {messages.map((message, i) => 
            <div key={i}>
                <div><Translation message={message}/></div>
                </div>)}
    </div>
)

export default Translator;
