import React, { Component } from 'react';
import './App.css';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch('https://api.magicthegathering.io/v1/cards')
      .then(response => response.json())
      .then(data => this.setState({ data: data.cards }));
  }

  render() {
    console.log(this.state.data[0]);

    return (
      <div>{this.state.data[0]}</div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Card />
      </div>
    );
  }
}

export default App;
