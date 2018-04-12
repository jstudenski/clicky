import React from 'react';
import './Scoreboard.css';


class Scoreboard extends React.Component {
  render() {
    return [(
      <div>
        <p>Score | {this.props.score}</p>
        <p>Top Score | {this.props.topScore}</p>
      </div>
    )];
  }
}

export default Scoreboard;
