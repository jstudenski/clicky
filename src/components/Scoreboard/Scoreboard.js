import React from "react";
import "./Scoreboard.css";

class Scoreboard extends React.Component {
    state = {
        score: 0
    };

    handleIncrement = () => {
        // We always use the setState method to update a component's state
        this.setState({ score: this.state.score + 1 });
      };

    render() {
        return (
          <div className="panel panel-primary">
            <div className="panel-heading">Click Counter Component</div>
            <div className="panel-body text-center">
              <p>Click Count -- {this.state.score}</p>
              <button className="btn btn-primary" onClick={this.handleIncrement}>
                Increment
              </button>
            </div>
          </div>
        );
      }

}

  
export default Scoreboard;