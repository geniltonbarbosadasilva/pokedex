import React, { Component } from "react";
import { Link } from "react-router-dom";
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
                    this.cards.map( ( _, index) => {
                        let id = index + 1;
                        return(
                            <Link to={ `/one-result/${id}` } key={ id }>
                                <Card id={ id } key={ id }/>
                            </Link>
                        );
                    })
                }                
            </ul>
        );
    }
}

export default Cards;