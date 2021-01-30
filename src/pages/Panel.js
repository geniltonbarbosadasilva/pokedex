import React, { Component } from "react";

class Panel extends Component {

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
                    Aqui deveria ter um painel, e so pra constar voce esta logado.
                </h1>
            </div>
        );
    }
}

export default Panel;