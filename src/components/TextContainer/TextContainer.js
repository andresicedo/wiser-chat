import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import Translation from '../Translation/Translation';

import './TextContainer.css';

const TextContainer = ({ users, messages, name }) => (
  <div className="textContainer">
    <div>
      <Translation messages={messages} name={name}/>
    </div>
    {
      users
        ? (
          <div>
            <h1>People currently chatting:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({user}) => (
                  <div key={user} className="activeItem">
                    {user}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
  // <div>
  //   {
  //     users
  //       ? (
  //         <div>
  //           <h1>People currently chatting:</h1>
  //           <div className="activeContainer">
  //             <h2>
  //               {users.map(({name}) => (
  //                 <div key={name} className="activeItem">
  //                   {name}
  //                   <img alt="Online Icon" src={onlineIcon}/>
  //                 </div>
  //               ))}
  //             </h2>
  //           </div>
  //         </div>
  //       )
  //       : null
  //   }
  // </div>
);

export default TextContainer;