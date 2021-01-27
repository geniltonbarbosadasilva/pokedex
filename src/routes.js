import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import OnePokemon from "./pages/OnePokemon";
import Erro from "./pages/Erro";
import Footer from "./components/Footer";

const Routes = () => {
    return (
        <BrowserRouter>
            <Route path="/" component={ Header }/>                   
                <Switch>
                    <Route exact path="/" component={ Home }/>
                    <Route exact path="/home/:search" component={ Home }/>
                    <Route exact path="/one-result/:id" component={ OnePokemon }/>
                    <Route path="*" component={ Erro }/>
                </Switch>
            <Route path="/" component={ Footer }/>            
        </BrowserRouter>
    );
}

export default Routes;