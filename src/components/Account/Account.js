import React, {Component} from "react";
import Nav from "../Nav";
// import "./projects.css";
import RaisedButton from "material-ui/RaisedButton";
// import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import axios from 'axios';

export default class Account extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'user':[],
            'userID':'14'
        };

    };

    // store.subscribe(){
    //     this.state.userID = store.getState();
    // };


    componentDidMount(){
        const self = this;
        axios.get("http://crossroads.web.engr.illinois.edu/api/user/" + this.state.userID + "/")
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

    toProj = (rowNumber, columnNumber, evt) =>{
        window.location.href = "/projects?p=" + (rowNumber + 1);
    };
    redirectMake = (e) => {
        e.preventDefault();
        window.location.href = "/submitProject";
    };

    showUser = () => {
        // console.log(this.state.projData);
        // return (<div>{this.state.projData.length}<br/>{this.state.projData[0].id.toString()}</div>);
            return (<div style={{'display':'flex', 'justifyContent':'center'}}>
                <div style={{'width':"60%", }}>
                        <Table onCellClick={this.toProj}>
                            <TableHeader 
                                displayRowCheckbox={false}
                                displaySelectAll={false}
                                adjustForCheckbox={false}>
                                <TableRow>
                                    <TableHeaderColumn>Project ID</TableHeaderColumn>
                                    <TableHeaderColumn>Project Name</TableHeaderColumn>
                                    <TableHeaderColumn>Project language</TableHeaderColumn>
                                    <TableHeaderColumn>Project Description</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody displayRowCheckbox={false}>
                                <RaisedButton 
                                    label="Submit A Project!"
                                    primary={true}
                                    fullWidth={true}
                                    onClick={this.redirectMake}/>
                            </TableBody>
                        </Table>
                </div>

                </div>
            );
            // return (<div key={c.Project_id}>{c.Project_id}: {c.Project_name}</div>);
    }

    render() {
        return (
            <div>
                <Nav/>
                <div className="content-account">
                    <h2 style={{textAlign: 'center'}}>Your Account!</h2>
                    <div className="acct">
                                    <div key={"hello"} style={{'textAlign':'right', 'marginRight':'5em'}}>
                    <p>Hello, {this.state.user.user_name}!<br/>
                    Email: {this.state.user.email}<br/>
                    Employer: {this.state.user.employer}</p>
                </div>

                        {this.showUser()}
                    </div>
                </div>
            </div>
        );
    }
}

