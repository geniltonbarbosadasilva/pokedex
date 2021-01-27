import React, { Component } from "react";

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isMounted: false,
            pokemon: {
                id: this.props.id, 
                name: "", 
                types: []  
            }
        };
    }

    componentDidMount() {
        this.setState({
            isMounted: true
        });

        fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.pokemon.id}`)
        .then( (response) => response.json() )
        .then( (json) => { 
            if (this.state.isMounted) {
                this.setState({ pokemon: json })                    
            }            
        })
        .catch((error) => { console.error(error) });     
    }

    componentWillUnmount(){
        this.setState({
            isMounted: false
        });
    }

    imgSrc(id){
        return `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
    }

    render() {
        let { id, name, types } = this.state.pokemon;
        let typesInfos = types.map( ( typeInfo ) => typeInfo.type.name );
        let classCardImage = ( this.props.oneCard )? "one-card-image": "card-image";

        return(
            <li className={ `card ${ typesInfos[0] || "" }` } >
                <img className={ classCardImage } alt={ name } src={ this.imgSrc(id) } />
                <h2 className="card-title">{ `${id}. ${name}` }</h2>
                <p className="card-subtitle">{                     
                    typesInfos.join(", ")
                }</p>                
            </li>
        );
    }
}

export default Card;