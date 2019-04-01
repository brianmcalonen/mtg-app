import React from "react"

class SideList extends React.Component {
    render() {
        let sideStyle = {
            padding: "2rem"
        }

        let itemStyle = {
            display: "flex",
            justifyContent: "space-between"
        }

        let counterStyle = {
            display: "flex",

        }
        return (
        <div style={sideStyle}>
            <h1>Side List</h1>
            <ul className="list-group">
                {this.props.sideList.map(item => {
                    return (
                        <li className="list-group-item">
                            <div style={itemStyle}>
                                <div>{item.name}</div>
                                <div style={counterStyle}>
                                    <button>-</button>
                                    <div>{item.number}</div>
                                    <button onClick={this.props.incrementCard}>+</button>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
        );
    }
}

export default SideList