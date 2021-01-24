import React, { Component } from "react";
import Card from "../components/Cards/Card";

class OnePokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: ''
        }        
    }    

    componentDidMount() {
        const { id } = this.props.match.params;
        this.setState({ id: id });          
    }

    render() {
        return(
            <div className="container">
                <Card id={ this.state.id } key={ this.state.id } oneCard="true"/>
            </div>
        );
    }
}

export default OnePokemon;