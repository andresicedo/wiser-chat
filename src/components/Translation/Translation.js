import React from 'react'
import moment from 'moment';
import './Translation.css'

export default function Translation({ message: { user, text, translation }}) {
    return (
        <div>
            <div className="translateContainer">
                <div className="recentMessage">Most recent message: 
                    <div className="recentUser">{user}</div> {moment().calendar()}</div>
                <div className="translatedMessage">{translation}</div>
                <div>(<i>{text}</i>)</div>
            </div>
        </div>
    )
}
