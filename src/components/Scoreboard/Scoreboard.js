import React from 'react';
import './Scoreboard.css';

// const Card = props => (

class Scoreboard extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = { players: tom_and_jerry }
  // }
  state = {
    topScore: 0,
  };

  // handleIncrement = () => {
  //   this.setState({ score: this.state.score + 1 });
  // };

  render() {
    const { score } = this.props;

    return (
      <div>
        <p>Click Count | {score}</p>
      </div>
      // <div>{props.score}</div>

    );
  }
}

export default Scoreboard;
