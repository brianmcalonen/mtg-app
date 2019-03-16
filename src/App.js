import React, { Component } from 'react';
import './App.css';
import DeckList from './components/DeckList';
import SearchCard from './components/SearchCard';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      inputValue: "",
      cardList: []
    };

    // This binding is necessary to make `this` work in the callback
    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
    this.addCard = this.addCard.bind(this);
  }

  ////////////////////////////////////////////////////////////////////////////////////////
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  ////////////////////////////////////////////////////////////////////////////////////////
  search(event) {
    event.preventDefault();

    this.setState({
      inputValue: ""
    });

    console.log(this.state.inputValue);

    fetch(`https://api.magicthegathering.io/v1/cards?name="${this.state.inputValue}"`)
      .then(response => response.json())
      .then(data => this.setState({ data: data.cards }));

  }

  ////////////////////////////////////////////////////////////////////////////////////////
  addCard(event) {

    event.preventDefault();

    console.log("card added")
    console.log(this.state.data[0].name);
    console.log(this.state.data[0].imageUrl);

    const card = {
      name: this.state.data[0].name,
      imageUrl: this.state.data[0].imageUrl,
    }
    
    this.setState({
      cardList: [...this.state.cardList, card]
    })

    console.log(this.state.cardList)
  }

  ////////////////////////////////////////////////////////////////////////////////////////
  render() {
    const { data } = this.state;

    return (
      <div>
        <SearchCard
          input={this.state.inputValue}
          handleChange={this.handleChange}
          search={this.search}
        ></SearchCard>

        <div>
          {data.map(data =>
            <div key={data.id}>
              <h1>{data.name}</h1>
              <img src={data.imageUrl} alt={data.name} />
              <button onClick={this.addCard}>Add Card</button>
            </div>
          )}
          <DeckList cardList={this.state.cardList}/>
        </div>

      </div>
    );
  }
}

export default App;
