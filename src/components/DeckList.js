import React from "react"

class DeckList extends React.Component {
    render() {
        let sideStyle = {
            padding: ".5rem"
        }

        let myStyle = {
            display: "flex",
            borderRadius: "20px",
            listStyleType: "none",
            backgroundColor: "lightGrey",
            border: "1px solid grey",
            boxShadow: "inset 0 0 10px #000000",
            marginBottom: ".4rem",
            height: "2.5rem",
            alignItems: "center",
        }

        let itemStyle = {
            display: "flex",
            height: "100%",
        }

        let btnStyle = {
            display: "flex",
            height: "100%",
            margin: "0",
            borderRadius: "20px",
            width: "4rem",
            textAlign: "center",
            color: "black",
            fontWeight: "bold",
            justifyContent: "center",
            border: "2.5px solid grey"
        }

        let nameStyle = {
            height: "100%",
            width: "100%",
            marginLeft: "1rem",
            color: "black",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",

        }

        return (
        <div style={sideStyle}>
            <h2>Deck List</h2>
            <ul className="list-group">
                {this.props.sideList ? this.props.sideList.map((item, index) => {
                    return (
                        <li style={myStyle}>
                            <div style={itemStyle}>
                                    <button style={btnStyle} onClick={() => this.props.incrementCard(item, index)}>{item.number}</button>
                                <div style={nameStyle}onClick={() => this.props.decrementCard(item, index)}>{item.name}</div>

                            </div>
                        </li>
                    )
                }) : <div></div>}
            </ul>
        </div>
        );
    }
}

export default DeckList