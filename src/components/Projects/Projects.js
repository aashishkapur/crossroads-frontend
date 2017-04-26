import React, {Component} from "react";
import Nav from "../Nav";
import "./projects.css";
import RaisedButton from "material-ui/RaisedButton";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import axios from 'axios';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

export default class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'projData':[],
        };

    };

    componentDidMount(){
        const self = this;
        axios.get("http://crossroads.web.engr.illinois.edu/api/projects/")
        .then(function (response) {
          console.log(response.data[0]['Project_name']);
          for (var i = 0; i < 100/*response.data.length*/; i++){
                self.setState((state) => ({ 
                        projData: state.projData.concat({
                            'name':response.data[i]['name'], 
                            'language':response.data[i]['language'], 
                            'description':response.data[i]['description'], 
                            'id': response.data[i]['id']

                        })
                }));
          }
          console.log(self.state.projData);
        });
    };

    showProjects = () => {
        // console.log(this.state.projData);
        // return (<div>{this.state.projData.length}<br/>{this.state.projData[0].id.toString()}</div>);
        return this.state.projData.map((c) => {
            return (
                <TableRow key={c.Project_id}>
                    <TableRowColumn>{c.id}</TableRowColumn>
                    <TableRowColumn>{c.name}</TableRowColumn>
                    <TableRowColumn>{c.language}</TableRowColumn>
                    <TableRowColumn>{c.description}</TableRowColumn>
                </TableRow>
            );
            // return (<div key={c.Project_id}>{c.Project_id}: {c.Project_name}</div>);
        });
       

    }



    render() {
        return (
            <div>
                <Nav/>
                <div className="content-projects">
                    <h2>projects</h2>
                    <div className="projects-list">
                        <Table>
                            <TableHeader adjustForCheckbox={false}>
                                <TableRow>
                                    <TableHeaderColumn>Project ID</TableHeaderColumn>
                                    <TableHeaderColumn>Project Name</TableHeaderColumn>
                                    <TableHeaderColumn>Project language</TableHeaderColumn>
                                    <TableHeaderColumn>Project Description</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody             displayRowCheckbox={false}>
                                                    {this.showProjects()}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        );
    }
}

                        // <Card>
                        //     <CardHeader title="Python Project!"/>
                        //     <CardText className="project-desc">
                        //         <img className="project-image" alt="proj-img" style={{height:'200px','maxWidth':'300px'}} src="https://dummyimage.com/300x200/000/fff.png"/>
                        //         <div className="project-info line-left">
                        //             <p>hello</p>
                        //         </div>
                        //     </CardText>

                        // </Card>

