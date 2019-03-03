import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      searchValue: "",
      inputValue: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  search(event) {
    event.preventDefault();

    this.setState({
      // searchValue: this.state.inputValue,
      inputValue: ""
    })

    console.log(this.state.inputValue);
    console.log(this.state.searchValue);


    fetch(`https://api.magicthegathering.io/v1/cards?name="${this.state.inputValue}"`)
      .then(response => response.json())
      .then(data => this.setState({ data: data.cards }));

  }

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
              <img src={data.imageUrl} />
            </div>
          )}
        </div>

      </div>
    );
  }
}

class SearchCard extends React.Component {
  constructor(props) {
    super(props);
  }
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

export default App;
