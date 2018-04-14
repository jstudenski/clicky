import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper';
import Card from './components/Card';
import Scoreboard from './components/Scoreboard';
import cards from './cards.json';


const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);

class App extends Component {
  state = {
    cards,
    guessed: [],
    score: 0,
    topScore: 0,
  };

  handleClick = (id) => {
    if (this.state.guessed.indexOf(id) === -1) {
      this.state.guessed.push(id);
      this.setState({ score: this.state.score + 1 });
    } else {
      if (this.state.score > this.state.topScore) {
        this.setState({
          topScore: this.state.score,
        });
      }
      this.setState({
        score: 0,
        guessed: [],
      });
    }
    shuffleArray(this.state.cards);
  };

  render() {
    return (
      <div>
        <header>
          <p>
            Clicky Game!
            Click on an image to earn points, but don&apos;t click on any more than once!
          </p>
          <Scoreboard
            key={this.state.score}
            score={this.state.score}
            topScore={this.state.topScore}
          />
        </header>
        <Wrapper>
          {this.state.cards.map(friend => (
            <Card
              handleClick={this.handleClick}
              key={friend.id}
              id={friend.id}
            />
        ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
