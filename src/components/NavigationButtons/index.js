import React, { Component } from 'react';

class NavigationButtons extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    
    render() {        
        let { limit, offset } = this.props;
        let newOffsetPlus = Number(offset) + Number(limit);
        let newOffsetMinus = Number(offset) - Number(limit);
        
        newOffsetMinus = (newOffsetMinus < 0)? 0 : newOffsetMinus;

        return (
            <div className="navigation-buttons">
                <a href = {`/home/limit=${limit}&offset=${newOffsetMinus}`}>
                    <button>-</button>
                </a>
                <p> { offset/limit + 1 } </p>     
                <a href = {`/home/limit=${limit}&offset=${newOffsetPlus}`}>
                    <button>+</button>
                </a>
            </div>
        );
    }
}

export default NavigationButtons;
