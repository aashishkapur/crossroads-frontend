import React, {Component} from "react";
import "./login.css";
import {Card, CardTitle, CardText} from 'material-ui/Card';
// import {FlatButton} from 'material-ui/FlatButton';
import RaisedButton from "material-ui/RaisedButton";

import TextField from "material-ui/TextField";

// import {Link} from "react-router-dom";
import axios from 'axios';
// import { browserHistory } from 'react-router'
// import addID from "../../actions";

class Signin extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          emailSignup:'',
          passwordSignup:'',
          nameSignup:'',
          employerSignup:'',
      };
        this.signUp = this.signUp.bind(this);

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
        // const self = this;

        axios.post('http://crossroads.web.engr.illinois.edu/api/login/', 
          {
            "email":this.state.email,
            "password":this.state.password
          })
          .then(function (response) {
            console.log(response.data.userId);
            // store.dispatch(addID(response.data.userId));
            window.location.href = "/account";
            // window.location.replace("http://stackoverflow.com");
          })
          .catch(function (error) {
            console.log(error);
          });
    };

    signUp(e){
        e.preventDefault();
        axios.put('http://crossroads.web.engr.illinois.edu/api/user/', 
          {
            "email":this.state.emailSignup,
            "password":this.state.passwordSignup,
            "name":this.state.nameSignup,
            "employer":this.state.employerSignup
          })
          .then(function (response) {
            console.log(response.data.userId);
            // store.dispatch(addID(response.data.userId));
            window.location.href = "/account";
            // window.location.replace("http://stackoverflow.com");
          })
          .catch(function (error) {
            console.log(error);
          });
    };


    render() {
        return (
            <div>
                <h2 style={{'textAlign':'center'}}>Login or Sign Up!</h2>
                <div className="content-login">
                    <Card style={{margin:'2em auto'}}>
                        <CardTitle title="Login!" style={{'paddingBottom':'0px'}}/>
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
                    
                    <Card style={{margin:'2em auto'}}>
                        <CardTitle title="Sign up for an Account!" style={{'paddingBottom':'0px'}}/>
                        <CardText style={{'paddingTop':'1px'}}>

                            <TextField 
                              id="text-field-default"
                              floatingLabelText="Name"
                              onChange={this.handleChange.bind(this, 'nameSignup')}
                            />
                            <br/>

                            <TextField 
                              id="text-field-default"
                              floatingLabelText="Email"
                              onChange={this.handleChange.bind(this, 'emailSignup')}
                            />
                            <br/>
                            <TextField
                              id="text-field-default"
                              floatingLabelText="Password"
                              onChange={this.handleChange.bind(this, 'passwordSignup')}
                            />
                            <br />

                            <TextField 
                              id="text-field-default"
                              floatingLabelText="Employer"
                              onChange={this.handleChange.bind(this, 'employerSignup')}
                            />
                            <br/>
                            <RaisedButton label="Sign Up" primary={true} onClick={this.signUp} style={{width:'100%'}}/>
                        </CardText>
                    </Card>

                </div>
            </div>
        );
    }
}


Signin.props = {
    loginRequest: React.PropTypes.func.isRequired
};



export default Signin;













