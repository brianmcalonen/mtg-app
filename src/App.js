import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList';
import SearchCard from './components/SearchCard';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      inputValue: "",
      currentCard: null,
      cardList: [],
      addedCard: null
    };

    // This binding is necessary to make `this` work in the callback
    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
    this.addCard = this.addCard.bind(this);
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  search(event) {
    event.preventDefault();

    fetch(`https://api.magicthegathering.io/v1/cards?name="${this.state.inputValue}"`)
      .then(response => response.json())
      .then(data => this.setState({ data: data.cards }));

      this.setState({
        inputValue: "",
      });
  }

  addCard(data, index) {
    console.log(index)
    this.setState({
      currentCard: data[index]
    })
    console.log(this.state.cardList)
    console.log(this.state.currentCard)

  }

  render() {
    const { data } = this.state;
    // const cards = this.state.cardList.map(i => <li>{i}</li>)

    return (
      <div>
        <SearchCard
          input={this.state.inputValue}
          handleChange={this.handleChange}
          search={this.search}
        ></SearchCard>

        <div>
          {data.map((data, index) =>
            <div key={data.id}  onClick={() => this.addCard(data, index)}>
              <h1>{data.name}</h1>
              <img src={data.imageUrl} alt={data.name} />
            </div>
          )}
          {/* <CardList cardList={this.state.cardList}/> */}
          <h3>My Deck</h3>
          <ul>{this.state.cardList.map(i => <li>{i}</li>)}</ul>
        </div>

      </div>
    );
  }
}

export default App;
