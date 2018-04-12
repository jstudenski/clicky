import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper';
import Card from './components/Card';
import Scoreboard from './components/Scoreboard';
import children from './friends.json';


const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);

class App extends Component {
  state = {
    children,
    guessed: [],
    score: 0,
    topScore: 0,
  };
  // const friends = this.state.friends.filter(friend => friend.id !== id);
  // const guessed = this.state.guessed += 1
  // // this.state.friends.guessed = true
  // this.setState({ friends, guessed });

  handleClick = (id) => {
    this.setState({ score: this.state.score + 1 });
    this.setState({ topScore: this.state.topScore + 2 });
    shuffleArray(this.state.children);
    // console.log(id);
    // console.log()
  }

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   // const friends = this.state.friends.filter(friend => friend.id !== id);

  //   // // Set this.state.friends equal to the new friends array
  //   // this.setState({ friends });
  // };

  render() {
    return (
      <Wrapper>
        <Scoreboard
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <p>Click Count: {this.state.score}</p>
        {this.state.children.map(friend => (
          <Card
            handleClick={this.handleClick}
            id={friend.id}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
