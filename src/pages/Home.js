import React, { Component } from "react";
import Cards from "../components/Cards";
import NavigationButtons from "../components/NavigationButtons";

class Home extends Component {
    render() {
        return(
            <div className="container">
                <Cards/>
                <NavigationButtons/>
            </div>
        );
    }
}

export default Home;