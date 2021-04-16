import React from 'react'
import moment from 'moment';
export default function Translation({ message: { user, text, translation }}) {
    return (
        <div>
            <div>
                <h4>Most recent message: {user} about {moment().startOf('hour').fromNow()}</h4>
                <p>{translation}</p>
                <h5>(<i>{text}</i>)</h5>
            </div>
        </div>
    )
}
