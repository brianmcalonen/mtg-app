import React from "react"

class SearchCard extends React.Component {

    render() {
        let containerStyle = {
            display: "flex"
        }

        let searchBarStyle = {
            padding: "20px",
            height: "20px",
            width: "500px",
            border: "1px solid #eaeaea",
            outline: "none"
        }

        return (
        <div style={containerStyle}>
            <input
                style={searchBarStyle}
                type="text"
                placeholder="Search card by name (Mountain, Swamp, Plains, etc...)"
                value={this.props.inputValue}
                onChange={this.props.handleChange} />
            <button 
                onClick={this.props.search}
                className="btn btn-primary">
                Search
            </button>
            {/* <button 
                onClick={this.props.random}
                className="btn btn-primary">
            Random Card
            </button> */}
            <br />
        </div>
        );
    }
}

export default SearchCard
