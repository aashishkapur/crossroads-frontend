import React, {Component} from "react";
import Nav from "../Nav";
import Signin from "./Signin";
import "./login.css";
// import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
// import {FlatButton} from 'material-ui/FlatButton';
// import RaisedButton from "material-ui/RaisedButton";

// import TextField from "material-ui/TextField";

// import {Link} from "react-router-dom";

import  {connect} from 'react-redux';


class Login extends Component {
    constructor(props) {
        super(props);
        
    };


    render() {
        return (
            <div>
                <Nav/>
                <Signin/>
            </div>
        );
    }
}



export default Login;












