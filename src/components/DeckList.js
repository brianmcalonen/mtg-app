import React from "react"

class DeckList extends React.Component {
    render() {
        return (
        <div>
            <h3>Deck List</h3>
            {/* {this.state.cardList.map(card =>
            <div key={card.id}>
              <h1>{card.name}</h1>
              <img src={card.imageUrl} alt={card.name} />
              <button onClick={this.addCard}>Add Card</button>
            </div>
          )} */}

          {/* { 
              this.state.cardList !== null ? 
              this.state.cardList.map(card =>
                <div key={card.id}>
                  <h1>{card.name}</h1>
                  <img src={card.imageUrl} alt={card.name} />
                  <button onClick={this.addCard}>Add Card</button>
                </div>
              ) :
              <p>Add cards to list</p>
        } */}
        </div>
        );
    }
}

export default DeckList