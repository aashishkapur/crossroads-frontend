import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/Home"
import Login from "./components/Login"
import MakeProject from "./components/MakeProject"
import Projects from "./components/Projects"



export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/projects" component={Projects}/>
                </div>
            </Router>
        );
    }
}