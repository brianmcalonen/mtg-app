import React from "react"

class SearchCard extends React.Component {
    render() {
        return (
        <div>
            <h2>Search Card:</h2>
            <input
                type="text"
                value={this.props.inputValue}
                onChange={this.props.handleChange} />
            <button 
                onClick={this.props.search}
                className="btn btn-primary">
            Enter
            </button>
            <br />
        </div>
        );
    }
}

export default SearchCard
