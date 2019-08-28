import React from "react"

class SearchCard extends React.Component {

    render() {
        let containerStyle = {
            display: "flex"
        }

        let searchBarStyle = {
            width: "80%",
            borderRadius: "25px",
            border: "1px ridge grey",
            backgroundColor: "#DCDCDC",
            outline: "none",
            textAlign: "center"
        }

        return (
        <div style={containerStyle}>
            <input
                style={searchBarStyle}
                type="text"
                placeholder="Search card by name"
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
