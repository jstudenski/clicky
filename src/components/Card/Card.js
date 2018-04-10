import React from "react";
import "./Card.css";

const Card = props => (


    // guessed state.guessed

    <div onClick={() => props.handleClick(props.id)} className="card">
      <div className="img-container">
        {/* <img alt={props.name} src={props.image} /> */}
      </div>
      <div className="content">
        <ul>
          {/* <li>
            <strong>Name:</strong> {props.name}
          </li> */}
          <li>
            <strong>ID:</strong> {props.id}
          </li>

          {/* <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li> */}
        </ul>
      </div>
      {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span> */}
    </div>
  );
  
export default Card;