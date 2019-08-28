import React, { Component } from 'react';
import './App.css';
import SearchCard from './components/SearchCard';
import DeckList from './components/DeckList';
import Navbar from './components/Navbar';
import Spinner from 'react-bootstrap/Spinner';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      inputValue: "",
      currentCard: null,
      deckList: [],
      sideList: [],
      loading: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
    this.addCard = this.addCard.bind(this);
    this.incrementCard = this.incrementCard.bind(this);
    this.decrementCard = this.decrementCard.bind(this);
  }

  addCard(data, index) {
    this.setState({
      currentCard: this.state.data[index],
      deckList: [...this.state.deckList, data],
      sideList: [...this.state.sideList, {name: this.state.data[index].name, number: 1}],
      data: [],
      inputValue: ""
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

    this.setState({
      deckList: deckListCopy
    })

    // Delete card if number is less than zero
    if(newNumber <= 1) {
      console.log(newNumber)

      let newNew = [...this.state.deckList]

      console.log(newNew)

      newNew.splice(index);

      console.log(newNew)

      this.setState({
        deckList: newNew,
        sideList: newNew
      })
    }
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  random(event) {
    event.preventDefault();

    let random = Math.floor(Math.random() * 4980);  

    console.log(random)
    
    fetch(`https://api.magicthegathering.io/v1/cards/${random}`)
      .then(response => response.json())
      .then(data => console.log(data));

  }

  search(event) {
    event.preventDefault();

    fetch(`https://api.magicthegathering.io/v1/cards?name="${this.state.inputValue}"`)
      .then(response => response.json())
      .then(data => this.setState({ 
        data: data.cards,
        loading: true   
      }))
      .then(() => this.setState({ loading: false }));

    this.state.loading ? 
      this.setState({ loading: false }) : 
      this.setState({ loading: true })

  }

  render() {
    const { data, deckList } = this.state;

    let styles = {
      display: "flex",
      flexWrap: "wrap",
      paddingLeft: "0"    
    }

    let imgStyles = {
      position: "relative",
      margin: ".5rem",
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
      flexWrap: "wrap",
      fontFamily: "Beleren",
    }

    let left = {
      width: "23%",
      backgroundColor: "#242124",
      color: "white",
      fontWeight: "900"

    }

    let right = {
      width: "77%",
      padding: ".5rem",
    }

    let spinnerStyle = {
      display: "flex",
      justifyContent: "center"
    }

    let spinStyle = {
      marginTop: "30px"
    }

    return (
      <div>
        <Navbar/>
        <div style={main}>
        <div style={left}>
          <DeckList 
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
            random={this.random}
          ></SearchCard>
          
          <div style={spinnerStyle}>
            {this.state.loading ? 
              <Spinner 
                animation="border"
                style={spinStyle}
                variant="primary" /> : 
              <div></div>}
          </div>

          <div style={styles}>

            {data.map((data, index) =>
              data.imageUrl ? (<div 
                key={data.id}  onClick={() => this.addCard(data, index)}>
                <img src={data.imageUrl} alt={data.name} style={imgStyles}/>
              </div>) : <div></div>
            )}
          </div>

          {deckList.length > 0 ? <h2>Deck List</h2> : ""}
            <ul style={styles}>
              {deckList.map((data, index) => 
                  <div key={data.id}>
                    <img src={data.imageUrl} alt={data.name} style={imgStyles}/>
                  </div>
                )}  
            </ul>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
