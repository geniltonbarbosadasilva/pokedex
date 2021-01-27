import React, { Component } from "react";
import Cards from "../components/Cards";
import NavigationButtons from "../components/NavigationButtons";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            limit: this.getLimit(),
            offset: this.getOffset(),
            text: "Genilton"
        }
    }    

    getLimit() {
        let search = this.props.match.params.search;
        let limit

        if (search) {
            let params = new URLSearchParams("?" + search);
            limit = params.get("limit");            
        }

        return limit || 21;
    }

    getOffset() {
        let search = this.props.match.params.search;
        let offset

        if (search) {
            let params = new URLSearchParams("?" + search);
            offset = params.get("offset");            
        }

        return offset || 0;
    }

    render() {        
        return (
            <div className="container">
                <Cards limit={this.state.limit} offset={this.state.offset} />
                <NavigationButtons limit={this.state.limit} offset={this.state.offset} />
            </div>
        );
    }
}

export default Home;