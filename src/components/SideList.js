import React from "react"

class SideList extends React.Component {
    render() {
        let sideStyle = {
            padding: "2rem"
        }
        return (
        <div style={sideStyle}>
            <h1>Side List</h1>
            <ul>
                {this.props.sideList.map(item => {
                    return (
                        <li>{item.name} {item.number}</li>
                    )
                })}
            </ul>
        </div>
        );
    }
}

export default SideList