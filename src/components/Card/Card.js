import React from 'react';
import './Card.css';

const Card = props => (

  // guessed state.guessed

  <div
    onClick={() => props.handleClick(props.id)}
    className="card"
    role="presentation"
  >
    <div className="content">
      <ul>
        <li>
          <strong>ID:</strong> {props.id}
        </li>
      </ul>
    </div>
    {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
      𝘅
    </span> */}
  </div>
);

export default Card;
