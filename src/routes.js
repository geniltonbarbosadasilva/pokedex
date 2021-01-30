import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import OnePokemon from "./pages/OnePokemon";
import Panel from "./pages/Panel";
import Erro from "./pages/Erro";
import Footer from "./components/Footer";
import { isAuthenticated } from "./Auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={ props =>(
        isAuthenticated() ? (
            <Component/>
        ) : (
            <Redirect to={{ 
                pathname:"/",
                state: {
                    from: props.location
                }
            }}/>
        )
    ) } />
)

const Routes = () => {
    return (
        <BrowserRouter>
            <Header/>
                <Switch>
                    <Route exact path="/" component={ Home }/>
                    <Route exact path="/home/:search" component={ Home }/>
                    <Route exact path="/one-result/:id" component={ OnePokemon }/>                    
                    <PrivateRoute exact path="/panel" component={Panel}/>
                    <Route path="*" component={ Erro }/>
                </Switch>
            <Footer/>            
        </BrowserRouter>
    );
}

export default Routes;