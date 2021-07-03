import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from "./screens/login/Login";
import Home from "./screens/home/Home";

class Controller extends Component {

    render() {
        return (
            <Router>
                <Route exact path='/' render={({history}, props) => <Login {...props} history={history}/>}/>
                <Route exact path='/home' render={({history}, props) => <Home {...props} history={history}/>}/>
            </Router>

        )
    }
}

export default Controller;