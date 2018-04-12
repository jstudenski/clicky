import React from 'react';
import './Card.css';

const Card = props => (
  <div
    onClick={() => props.handleClick(props.id)} // props.id
    className="card"
    role="presentation"
  >
    <div className="content">
      <strong>ID:</strong> {props.id}
    </div>
  </div>
);

export default Card;

// class Card extends React.Component {
//   state = {
//     guessed: false,
//   }

//   handleClick = () => {
//     console.log(this.state);
//     // this.setState({ score: this.state.score + 1 });
//   };

//   render() {
//     return ([
//       <div
//         onClick={() => this.handleClick()}
//         className="card"
//         role="presentation"
//       >
//         <div className="content">
//           <ul>
//             <li>
//               <strong>ID:</strong> {this.state}
//             </li>
//           </ul>
//         </div>
//       </div>,
//     ]);
//   }
// }


//   state = {
//     guessed: false,
//   }

//   render() {
//     return (
//       <div
//         onClick={() => this.handleClick(this.id)}
//         className="card"
//         role="presentation"
//       >
//         <div className="content">
//           <ul>
//             <li>
//               <strong>ID:</strong> {this.id}
//             </li>
//           </ul>
//         </div>
//         {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
//           𝘅
//         </span> */}
//       </div>
//     )

//     // ... The render stuff from before
//   }
// }
