import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            limit: this.props.limit,
            offset: this.props.offset
        }
    }

    returnCards() {        
        let offset = Number(this.state.offset);
        let limit = Number(this.state.limit) + offset;
        let cards = [];        

        for (let index = offset + 1; index <= limit; index++) {            
            cards.push(
                <Link to={`/one-result/${ index }`} key={ index }>
                    <Card id={ index } key={ index } />
                </Link>
            );
        }

        return cards;
    }

    render() {
        return (
            <ul className="pokedex">
                {                    
                    this.returnCards().map( (card) => card )
                }
            </ul>
        );
    }
}

export default Cards;