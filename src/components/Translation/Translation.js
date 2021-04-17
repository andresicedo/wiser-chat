import React from 'react'
import moment from 'moment';

export default function Translation({ message: { user, text, translation }}) {
    return (
        <div>
            <div>
                <h4>Most recent message: {user} {moment().fromNow()}</h4>
                <h5>{translation}</h5>
                <h5>(<i>{text}</i>)</h5>
            </div>
        </div>
    )
}
