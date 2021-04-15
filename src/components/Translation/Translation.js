import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux';


export default function Translation({ message }) {
    const [translation, setTranslation] = useState('');
    // const message = useSelector((state) => {
    //     return state.message;
    // })

    useEffect(() => {
        fetch("https://systran-systran-platform-for-language-processing-v1.p.rapidapi.com/translation/text/translate?source=auto&target=Spanish&input=Hello", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "30d05dba14mshcbd9ba2ffdd2fc7p1f0307jsn8b31de4705a3",
                "x-rapidapi-host": "systran-systran-platform-for-language-processing-v1.p.rapidapi.com"
            }
        })
            .then(response => {
                setTranslation(response);
            })
            .catch(err => {
                console.error(err);
            });
    }, [message]);

    return (
        <div>
            {translation}
        </div>
    )
}
