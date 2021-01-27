import React, { Component } from "react";

class Erro extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    componentDidUpdate() {
        window.scrollTo(0, 0);
    }

    render() {
        return(
            <div className="container">
                <h1>
                    Oops! Page not found 404
                </h1>
            </div>
        );
    }
}

export default Erro;