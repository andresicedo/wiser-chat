import React, { useEffect, useState } from 'react'
import translate from 'google-translate-api';

export default function Translation({ message }) {
    const [translation, setTranslation] = useState('');

    useEffect(() => {
        translate(translation, { to: 'es' })
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
