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
        this.editProject = this.editProject.bind(this);
    };
    
    handleChange(name, e) {
      var change = {};
      change[name] = e.target.value;
      this.setState(change);
    };
    componentDidMount(){
        const self = this;
        // console.log("----------------------------");
        console.dir(this.props.location);

        console.dir(this.props.location.search.substr(3));
        if(this.props.location.search.substr(3) === "")
        {

        }
        else
        {
            axios.get("http://crossroads.web.engr.illinois.edu/api/project/" + this.props.location.search.substr(3) + "/")
            .then(function (response) {
                    console.dir(response.data.name);
                    // console.dir(response.data.tags);

                    self.setState((state) => ({
                                'name':response.data.name, 
                                'language':response.data['language'], 
                                'description':response.data['description'], 
                                'id': response.data['id'],
                                'repositoryURL': response.data['repositoryURL'],
                                'license': response.data['license'],
                    }));
                    // alert(self.state.name);
                  });
              }
    };
    
    editProject(e){
        console.log("email: " + this.state.email + "\t password: " + this.state.password);
        e.preventDefault();
        const self = this;
        axios.post('http://crossroads.web.engr.illinois.edu/api/project/'+ this.props.location.search.substr(3) + "/", 
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
            window.location.href = "/projects?p=" + self.state.id;
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
                        <CardHeader title="Edit Project!" style={{'paddingBottom':'0px'}}/>
                        <CardText style={{'paddingTop':'1px'}}>
                            <TextField
                              id="text-field-default"
                              floatingLabelText="Repository Name"
                              value={this.state.name}
                              onChange={this.handleChange.bind(this, 'name')}
                            />
                            <br/>
                            <TextField
                              id="text-field-default"
                              floatingLabelText="Repository Url"
                              value={this.state.repositoryURL}

                              onChange={this.handleChange.bind(this, 'repositoryURL')}
                            />
                            <br />
                            <TextField
                              id="text-field-default"
                              floatingLabelText="Repository Description"
                              value={this.state.description}

                              onChange={this.handleChange.bind(this, 'description')}
                            />
                            <br />
                            <TextField
                              id="text-field-default"
                              floatingLabelText="Sponsoring Organization"
                              value={this.state.sponsorOrg}

                              onChange={this.handleChange.bind(this, 'sponsorOrg')}
                            />
                            <br />

                            <TextField
                              id="text-field-default"
                              floatingLabelText="Repository License"
                              value={this.state.license}

                              onChange={this.handleChange.bind(this, 'license')}
                            />
                            <br />
                            <br />

                            <RaisedButton label="Submit change!" primary={true} onClick={this.editProject} style={{width:'100%'}}/>
                        </CardText>
                    </Card>
                </div>
            </div>
        );
    }
}


                            // <DatePicker 
                                // hintText="Creation Date"
                            //     onChange={this.handleChange.bind(this, 'creationDate')}
                            // />


