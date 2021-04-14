import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux';


export default function Translation({ message }) {
    const [ translation, setTranslation ] = useState('');
    // const message = useSelector((state) => {
    //     return state.message;
    // })

    useEffect(() => {
        fetch(`https://api.funtranslations.com/translate/yoda.json?text=${message}`)
            .then((res) => res.json())
            .then((data) => {
                setTranslation(data.contents);
            });
    }, [message]);

    return (
        <div>
            {translation}
        </div>
    )
}
