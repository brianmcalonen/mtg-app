import React, { Component } from 'react';
import './App.css';
import SearchCard from './components/SearchCard';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      inputValue: "",
      currentCard: null,
      deckList: []
    };

    // This binding is necessary to make `this` work in the callback
    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
    this.addCard = this.addCard.bind(this);
  }

  addCard(data, index) {
    console.log(index)
    this.setState({
      currentCard: this.state.data[index],
      deckList: [...this.state.deckList, data]
    })
    console.log(this.state.data[index])

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

  render() {
    const { data, deckList } = this.state;

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
        </div>

        <h3>My Deck</h3>
          <ul>
            {deckList.map((data, index) => 
                <div key={data.id}>
                  <h1>{data.name}</h1>
                  <img src={data.imageUrl} alt={data.name} />
                </div>
              )}  
          </ul>

      </div>
    );
  }
}

export default App;
