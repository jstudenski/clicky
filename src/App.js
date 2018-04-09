import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import Scoreboard from "./components/Scoreboard";
import children from "./friends.json";


class App extends Component {

  state = {
    children,
    // guessed: [],
    score: 0
    // topScore: 0
  };

  handleClick = id => {

    // const friends = this.state.friends.filter(friend => friend.id !== id);
    // const guessed = this.state.guessed += 1
    
    // // this.state.friends.guessed = true
    // this.setState({ friends, guessed });

   this.setState({ score: this.state.score + 1 });
   // console.log( this.setState);
  }

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   // const friends = this.state.friends.filter(friend => friend.id !== id);

  //   // // Set this.state.friends equal to the new friends array
  //   // this.setState({ friends });
  // };

  render() {
    return (
      
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
      
      <Wrapper>
        <Scoreboard
          score={7}
        ></Scoreboard>
       <p>Click Count: {this.state.score}</p>

        {this.state.children.map(friend => (
          <Card
            // removeFriend={this.removeFriend}
            handleClick={this.handleClick}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}

      </Wrapper>

    );
  }
}

export default App;
