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
    const { data } = this.state;

    return (
      <ul>
        {data.map(data =>
          <li key={data.id}>
            <div>{data.name}</div>
            <img src={data.imageUrl} />
          </li>
        )}
      </ul>
    );
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
