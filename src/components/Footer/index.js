import React, { Component } from "react";
import { Facebook, Instagram, Twitter } from "./Icons"

class Footer extends Component {
    render() {
        const date = new Date();
        let day = date.getDate();
        let month = `0${date.getMonth()+1}`.slice(-2);
        let year = date.getFullYear();
        return (
            <footer>
                <p>The Pokemon Company</p>
                <ul>
                    <li>© { `${day}/${month}/${year}` } Pokedex, Inc. All rights reserved</li>
                    <li><Facebook/></li>
                    <li><Instagram/></li>
                    <li><Twitter/></li>
                </ul>
                <ul>
                    <li><a href="/">Início</a></li>
                    <li>|</li>
                    <li><a href="/about">Sobre o sistema</a></li>
                </ul>
            </footer>
        );
    }
}

export default Footer;