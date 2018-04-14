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
    if (this.state.guessed.indexOf(id) === -1) {
      this.state.guessed.push(id);
      this.setState({ score: this.state.score + 1 });
    } else {
      this.setState({
        topScore: this.state.score,
        score: 0,

        // reset score and empty guessed array
      });
    }

    console.log(this.state.guessed);
    shuffleArray(this.state.children);

    // // push to array if it hasn't been guessed
    // this.state.guessed.indexOf(id) === -1 && (this.state.guessed.push(id)),
    // // push to array if it hasn't been guessed
    // this.state.guessed.indexOf(id) === -1 && (this.setState({ score: this.state.score + 1 })),

    // this.setState({ score: this.state.score + 1 }),
    // this.setState({ topScore: this.state.topScore + 2 }),

    // console.log(),
    // console.log(),
    // console.log(this.state.guessed);
  };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   // const friends = this.state.friends.filter(friend => friend.id !== id);

  //   // // Set this.state.friends equal to the new friends array
  //   // this.setState({ friends });
  // }
  render() {
    return (
      <Wrapper>
        <Scoreboard
          key={this.state.score}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        {this.state.children.map(friend => (
          <Card
            handleClick={this.handleClick}
            key={friend.id}
            id={friend.id}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
