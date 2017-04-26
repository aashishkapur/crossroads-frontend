import React, {Component} from "react";
import Nav from "../Nav";
import "./home.css";
import RaisedButton from "material-ui/RaisedButton";
import {Link} from "react-router-dom";

export default class Home extends Component {

    render() {
        return (
            <div>
                <Nav/>
                <div className="content content-home">
                    <p>This is crossroads</p>
                    <br/>
                    <Link to="/login">
                        <RaisedButton label="Login" primary={true}/>
                    </Link>
                    <Link to="/projects">
                        <RaisedButton label="Projects" primary={true}/>
                    </Link>

                </div>
            </div>
        );
    }
}
