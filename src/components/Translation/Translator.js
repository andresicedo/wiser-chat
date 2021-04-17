import React from 'react'
import Translation from './Translation';

const Translator = ({ messages, translation }) => (
    <div>
        {messages.map((message, i) => 
            <div key={i}>
                <div><Translation translation={translation} message={message}/></div>
                </div>)}
    </div>
)

export default Translator;
