import React, {Component} from "react";
import Nav from "../Nav";
import "./login.css";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {FlatButton} from 'material-ui/FlatButton';
import RaisedButton from "material-ui/RaisedButton";

import TextField from "material-ui/TextField";

import {Link} from "react-router-dom";
import axios from 'axios';
import { browserHistory } from 'react-router'

class Signin extends Component {
    
    constructor(props) {
        super(props);
        this.state = {email: 'asdf', password: 'asdf'};

        this.logIn = this.logIn.bind(this);
    };
    
    handleChange(name, e) {
      var change = {};
      change[name] = e.target.value;
      this.setState(change);
    };
    
    logIn(e){
        console.log("email: " + this.state.email + "\t password: " + this.state.password);
        e.preventDefault();
        const self = this;

        axios.post('http://crossroads.web.engr.illinois.edu/api/login/', 
          {
            "email":this.state.email,
            "password":this.state.password
          })
          .then(function (response) {
            console.log(response.data.userId);
            window.location.href = "http://localhost:3000/projects";
            // window.location.replace("http://stackoverflow.com");
          })
          .catch(function (error) {
            console.log(error);
          });
    };

    render() {
        return (
            <div>
                <div className="content content-login">
                    <Card style={{margin:'2em auto'}}>
                        <CardHeader title="Login!" style={{'paddingBottom':'0px'}}/>
                        <CardText style={{'paddingTop':'1px'}}>
                            <TextField
                              id="text-field-default"
                              floatingLabelText="Email"
                              onChange={this.handleChange.bind(this, 'email')}
                            />
                            <br/>
                            <TextField
                              id="text-field-default"
                              floatingLabelText="Password"
                              onChange={this.handleChange.bind(this, 'password')}
                            />
                            <br />
                            <RaisedButton label="Login" primary={true} onClick={this.logIn} style={{width:'100%'}}/>
                        </CardText>
                    </Card>
                    <p>This is login</p>

                </div>
            </div>
        );
    }
}


Signin.props = {
    loginRequest: React.PropTypes.func.isRequired
};



export default Signin;













