import React, { Component } from 'react';
import Logo from "./Logo";
import Option from "./Option";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shadow: "",
        }

        this.scrolling = this.scrolling.bind(this);
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.scrolling);
    }

    scrolling() {
        if ( document.documentElement.scrollTop > 100 ) {
            this.setState({ shadow: "shadow" });
        } else if (document.documentElement.scrollTop < 50) {
            this.setState({ shadow: "" });
        }
    }

    render() {
        return (
            <header className={ `menu ${ this.state.shadow }` }>
                {/* <img src={ logo } alt="" className="logo"/> */}
                <Logo/>
                <h1>Pokedex</h1>
                <ul>                
                    <Option link="/">Home</Option>
                    <Option link="/about">About Us</Option>
                    <Option link="/panel">Painel</Option>
                </ul>
            </header>
        );
    }
}

export default Header;
