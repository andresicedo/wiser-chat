import React, { useState } from 'react'
// import { useSelector } from 'react-redux';
const translate = require('google-translate-api');

export default function Translation({ message }) {
    const [translation, setTranslation] = useState('');
    // const message = useSelector((state) => {
    //     return state.message;
    // })
    // useEffect(() => {
    //     translate(message, {to: 'es'})
    //     .then((res) => setTranslation(res.text))
    // });
    translate(message, { to: 'en' })
        .then(res => {
            setTranslation(res.text);
            //=> I speak English
        }).catch(err => {
            alert(err);
        });

    return (
        <div>
            {translation}
        </div>
    )
}
