import React, { Component } from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import "./style.css"

// https://pokeapi.co/api/v2/pokemon/${id}

class App extends Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="container">                    
                    <Cards/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;