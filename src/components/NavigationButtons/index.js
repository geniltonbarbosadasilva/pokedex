import React, { Component } from 'react';

class NavigationButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {        }
    }
    
    render() {
        return (
            <div className="navigation-buttons">
                <button>-</button>
                <p>{ this.props.page }</p>
                <button>+</button>
            </div>
        );
    }
}

export default NavigationButtons;
