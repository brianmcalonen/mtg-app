import React from "react"

class CardList extends React.Component {
    render() {
      const cards = this.props.cardList.map(i => <li>{i}</li>)

        return (
        <div>
            <h3>Deck List</h3>
            <ul>{cards}</ul>
        </div>
        );
    }
}

export default CardList