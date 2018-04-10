import React from "react";
import "./Scoreboard.css";

// const Card = props => (
  
class Scoreboard extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = { players: tom_and_jerry }
  // }

  state = {
    score: 0,
    topScore: 0
  };

  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score + 1 });
  };

  render() {
    return (
      <div>
        <p>Click Count -- {this.state.score}</p>
        <button onClick={this.handleIncrement}>
          Increment
        </button>
      </div>
     // <div>{props.score}</div>
      
    );
  }

}

  
export default Scoreboard;