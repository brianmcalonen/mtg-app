import React from "react"

class Navbar extends React.Component {
    render() {
        let navStyle = {
            fontFamily: "Beleren",
            fontSize: "2.3rem"
        }

        let linkStyle = {
            margin: "0 .2rem"
        }
        return (
            <nav className="navbar navbar-dark bg-dark justify-content-between">
                <h1 style={navStyle}className="navbar-brand">Magic The Gathering - Deck Builder</h1>
                <form className="form-inline">
                <button style={linkStyle} className="btn btn-primary my-2 my-sm-0" type="submit">Sign Up</button>
                <button style={linkStyle} className="btn btn-primary my-2 my-sm-0" type="submit">Login</button>
                </form>
            </nav>
        );
    }
}

export default Navbar