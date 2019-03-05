import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      inputValue: ""
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
      // searchValue: this.state.inputValue,
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

    // find the index of the card to be added

    // add index to each button

    console.log(this.state.data)
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
              <AddCard
                addCard={this.addCard}
              />
            </div>
          )}
          <DeckList />
        </div>

      </div>
    );
  }
}

////////////////////////////////////////////////////////////////////////////////////////
class SearchCard extends React.Component {
  render() {
    return (
      <div>
        <h3>Search Card:</h3>
        <input
          type="text"
          value={this.props.inputValue}
          onChange={this.props.handleChange} />
        <button onClick={this.props.search}>
          Enter
          </button><br />
      </div>
    );
  }
};

////////////////////////////////////////////////////////////////////////////////////////
class AddCard extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.addCard}
        >Add Card</button>
      </div>
    )
  }
}

////////////////////////////////////////////////////////////////////////////////////////
class DeckList extends React.Component {
  render() {
    return (
      <div>
        <h1>Deck List</h1>
      </div>
    )
  }
}

export default App;
