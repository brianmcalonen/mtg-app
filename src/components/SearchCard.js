import React from "react"

class SearchCard extends React.Component {
    render() {
        return (
        <div>
            <h3>Search Card:</h3>
            <input
                type="text"
                value={this.props.inputValue}
                onChange={this.props.handleChange} />
            <button onClick={this.props.search}>
            Enter
            </button>
            <br />
        </div>
        );
    }
}

export default SearchCard
