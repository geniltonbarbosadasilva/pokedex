import React, { Component } from "react";
import Routes from "./routes";

import "./style.css"

// https://pokeapi.co/api/v2/pokemon/${id}

class App extends Component {
    render() {
        return(
            <div>
                <Routes/>
            </div>
        );
    }
}

export default App;