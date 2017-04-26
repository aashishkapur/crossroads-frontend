import React, {Component} from "react";
import Nav from "../Nav";
import {Card, CardHeader, CardText} from 'material-ui/Card';
// import {FlatButton} from 'material-ui/FlatButton';
import RaisedButton from "material-ui/RaisedButton";
// import DatePicker from 'material-ui/DatePicker';

import TextField from "material-ui/TextField";
import Toggle from 'material-ui/Toggle';

// import {Link} from "react-router-dom";
import axios from 'axios';

export default class MakeProject extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            repositoryURL: '', 
            creationDate: ' ', 
            OS: '', 
            description: '', 
            sponsorOrg: '', 
            license: '', 
            name: '', 
            userID: '14'
        };
        this.submitProject = this.submitProject.bind(this);
    };
    
    handleChange(name, e) {
      var change = {};
      change[name] = e.target.value;
      this.setState(change);
    };
    
    submitProject(e){
        console.log("email: " + this.state.email + "\t password: " + this.state.password);
        e.preventDefault();
        axios.put('http://crossroads.web.engr.illinois.edu/api/project/', 
          {
            repositoryURL:this.state.repositoryURL,
            creationDate:this.state.creationDate,
            OS:this.state.OS,
            description:this.state.description,
            sponsorOrg:this.state.sponsorOrg,
            license:this.state.license,
            name:this.state.name,
            userId:this.state.userID
          })
          .then(function (response) {
            console.log(response.data.id);
            window.location.href = "/projects?p=" + response.data.id;
          })
          .catch(function (error) {
            console.log(error);
          });
    };

    render() {
        return (
            <div>
                <Nav/>
                <div className="content content-login">
                    <Card style={{margin:'2em auto'}}>
                        <CardHeader title="Login!" style={{'paddingBottom':'0px'}}/>
                        <CardText style={{'paddingTop':'1px'}}>
                            <TextField
                              id="text-field-default"
                              floatingLabelText="Repository Name"
                              onChange={this.handleChange.bind(this, 'name')}
                            />
                            <br/>
                            <TextField
                              id="text-field-default"
                              floatingLabelText="Repository Url"
                              onChange={this.handleChange.bind(this, 'repositoryURL')}
                            />
                            <br />
                            <TextField
                              id="text-field-default"
                              floatingLabelText="Repository Description"
                              onChange={this.handleChange.bind(this, 'description')}
                            />
                            <br />
                            <TextField
                              id="text-field-default"
                              floatingLabelText="Sponsoring Organization"
                              onChange={this.handleChange.bind(this, 'sponsorOrg')}
                            />
                            <br />

                            <TextField
                              id="text-field-default"
                              floatingLabelText="Repository License"
                              onChange={this.handleChange.bind(this, 'license')}
                            />
                            <br />
                            <br />
                            
                            <Toggle
                                label="Open Source"
                                style={{margin: '8 0 8'}}
                                onChange={this.handleChange.bind(this, 'OS')}
                            />
                            <br/>

                            <TextField
                              id="text-field-default"
                              floatingLabelText="Creation Date"
                              onChange={this.handleChange.bind(this, 'creationDate')}
                            />
                            <br />

                            <RaisedButton label="Submit!" primary={true} onClick={this.submitProject} style={{width:'100%'}}/>
                        </CardText>
                    </Card>
                    <p>This is login</p>

                </div>
            </div>
        );
    }
}


                            // <DatePicker 
                                // hintText="Creation Date"
                            //     onChange={this.handleChange.bind(this, 'creationDate')}
                            // />


