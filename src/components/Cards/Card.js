import React, { Component } from "react";

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pokemon: {
                id: 1, 
                name: "", 
                types: []  
            }
        };
    }

    componentDidMount() {
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.id}`)
        .then( (response) => response.json() )
        .then( (json) => { this.setState({ pokemon: json }) });
    }

    imgSrc(id){
        return `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
    }

    render() {
        let { id, name, types } = this.state.pokemon;
        let typesInfos = types.map( ( typeInfo ) => typeInfo.type.name );
        return(
            <li className={ `card ${ typesInfos[0] || "" }` }>
                <img className="card-image" alt={ name } src={ this.imgSrc(id) } />
                <h2 className="card-title">{ `${id}. ${name}` }</h2>
                <p className="card-subtitle">{                     
                    typesInfos.join(", ")
                }</p>                
            </li>
        );
    }
}

export default Card;