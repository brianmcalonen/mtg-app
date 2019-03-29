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

    let styles = {
      display: "flex",
      flexWrap: "wrap"    
    }

    let imgStyles = {
      position: "relative",
      margin: "10px",
      float: "left",
      width:  "223px",
      height: "310px",
      backgroundPosition: "50% 50%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }

    let main = {
      display: "flex",
      alignItems: "flex-start",
      flexWrap: "wrap"
    }

    let left = {
      width: "33%",
      height: "100vh",
      backgroundColor: "cyan"
    }

    let right = {
      width: "67%",
      height: "100vh",
      padding: "2rem",
      backgroundColor: "grey"

    }

    return (
      <div style={main}>
        <div style={left}>

        </div>
        <div style={right}>
          <SearchCard
            input={this.state.inputValue}
            handleChange={this.handleChange}
            search={this.search}
          ></SearchCard>

          <p>Click card to add to Deck List</p>
          <div style={styles}>
            {data.map((data, index) =>
              <div 
                key={data.id}  onClick={() => this.addCard(data, index)}>
                <img src={data.imageUrl} alt={data.name} style={imgStyles}/>
              </div>
            )}
          </div>

          <h1>My Deck</h1>
            <ul style={styles}>
              {deckList.map((data, index) => 
                  <div key={data.id}>
                    {/* <h4>{data.name}</h4> */}
                    <img src={data.imageUrl} alt={data.name} style={imgStyles}/>
                  </div>
                )}  
            </ul>
          </div>
        </div>
    );
  }
}

export default App;
