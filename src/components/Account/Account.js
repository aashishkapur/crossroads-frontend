import React, {Component} from "react";
import Nav from "../Nav";
// import "./projects.css";
import RaisedButton from "material-ui/RaisedButton";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import axios from 'axios';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

export default class Account extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'user':[],
        };

    };

    componentDidMount(){
        const self = this;
        axios.get("http://crossroads.web.engr.illinois.edu/api/user/14/")
        .then(function (response) {
            console.log(response.data);
            self.setState((state) => ({ 
                    user: {
                        'user_name':response.data['user_name'], 
                        'employer':response.data['employer'], 
                        'email':response.data['email'], 
                        'tags': response.data['tags']
                    } }));
            console.log(self.state.user);
        });
                    console.log(self.state.user);

    };

    showUser = () => {
        // console.log(this.state.projData);
        // return (<div>{this.state.projData.length}<br/>{this.state.projData[0].id.toString()}</div>);
            return (
                <div key={"hello"}>
                    <p>Hello, {this.state.user.user_name}!</p>
                    <p>Email: {this.state.user.email}</p>
                    <p>Employer: {this.state.user.employer}</p>
                </div>
            );
            // return (<div key={c.Project_id}>{c.Project_id}: {c.Project_name}</div>);
    }

    render() {
        return (
            <div>
                <Nav/>
                <div className="content-projects">
                    <h2>projects</h2>
                    <div className="acct">
                        {this.showUser()}
                    </div>
                </div>
            </div>
        );
    }
}

