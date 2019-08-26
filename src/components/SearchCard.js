import React from "react"

class SearchCard extends React.Component {
    render() {
        return (
        <div>
            <h2>Search Card:</h2>
            <input
                type="text"
                placeholder="Search card by name"
                value={this.props.inputValue}
                onChange={this.props.handleChange} />
            <button 
                onClick={this.props.search}
                className="btn btn-primary">
            Enter
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
