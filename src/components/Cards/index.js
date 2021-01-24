import React, { Component } from "react";
import Card from "./Card";

class Cards extends Component {
    constructor(props) {
        super(props);
        this.cards = Array(20).fill();
    }

    render() {
        return(
            <ul className="pokedex">
                {
                    this.cards.map( ( _, index) => <Card id={ index + 1 } key={ index + 1 }/>)
                }                
            </ul>
        );
    }
}

export default Cards;