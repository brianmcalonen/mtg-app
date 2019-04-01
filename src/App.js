import React, { Component } from 'react';
import './App.css';
import SearchCard from './components/SearchCard';
import SideList from './components/SideList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      inputValue: "",
      currentCard: null,
      deckList: [],
      sideList: []
    };

    // This binding is necessary to make `this` work in the callback
    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
    this.addCard = this.addCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.incrementCard = this.incrementCard.bind(this);
    this.decrementCard = this.decrementCard.bind(this);
  }

  addCard(data, index) {
    this.setState({
      currentCard: this.state.data[index],
      deckList: [...this.state.deckList, data],
      sideList: [...this.state.sideList, {name: this.state.data[index].name, number: 1}],
      data: []
    })    
  }

  deleteCard(item, index) {
    let sideListCopy = [...this.state.sideList];

    delete sideListCopy[index];

    this.setState({
      sideList: sideListCopy
    })
  }

  incrementCard(item, index) {
    let newNumber = item.number++;

    let deckListCopy = JSON.parse(JSON.stringify(this.state.deckList));

    deckListCopy[index].number = newNumber;

    this.setState({
      deckList: deckListCopy
    })
  }

  decrementCard(item, index) {
    let newNumber = item.number--;

    let deckListCopy = JSON.parse(JSON.stringify(this.state.deckList));

    deckListCopy[index].number = newNumber;

    if(newNumber <= 1) {
      this.deleteCard(item, index);
    }
    this.setState({
      deckList: deckListCopy
    })
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
      margin: "1rem",
      float: "left",
      width:  "223px",
      height: "310px",
      backgroundPosition: "50% 50%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }

    let main = {
      display: "flex",
      height: "100vh",
      alignItems: "stretch",
      flexWrap: "wrap"
    }

    let left = {
      width: "30%",
      backgroundColor: "cyan"
    }

    let right = {
      width: "70%",
      padding: "2rem",

    }

    return (
      <div style={main}>
        <div style={left}>
          <SideList 
            sideList={this.state.sideList}
            incrementCard={this.incrementCard}
            decrementCard={this.decrementCard}
            deleteCard={this.deleteCard}/>
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
              data.imageUrl ? (<div 
                key={data.id}  onClick={() => this.addCard(data, index)}>
                <img src={data.imageUrl} alt={data.name} style={imgStyles}/>
              </div>) : <div></div>
            )}
          </div>

          <h1>My Deck</h1>
            <ul style={styles}>
              {deckList.map((data, index) => 
                  <div key={data.id}>
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
