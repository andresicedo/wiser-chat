import React, { useEffect, useState } from 'react'
const translate = require('google-translate-api');

export default function Translation({ message }) {
    const [translation, setTranslation] = useState('');

    useEffect(() => {
        translate(message, { to: 'es' })
        .then(res => {
            setTranslation(res.text);
        }).catch(err => {
            alert(err);
        });
    });
    
    return (
        <div>
            {translation}
        </div>
    )
}
