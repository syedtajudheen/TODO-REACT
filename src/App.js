import React, { Component } from 'react';
import './App.css';
import Todo from './Todo.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="bg"></div>
        <header >
          <h1>TODO-LIST</h1>
        </header>
        <Todo />
      </div>
    );
  }
}

export default App;
