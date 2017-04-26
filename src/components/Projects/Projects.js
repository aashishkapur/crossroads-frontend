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
            'individual':false
        };

    };

    componentDidMount(){
        const self = this;
        console.log("----------------------------");
        console.log(this.props.location.search.substr(3));
        if(this.props.location.search.substr(3) == "")
        {
            axios.get("http://crossroads.web.engr.illinois.edu/api/projects/")
            .then(function (response) {
              // console.log(response.data);
              for (var i = 0; i < response.data.length; i++){
                    // console.log(response.data[i]);
                    self.setState((state) => ({ 
                            projData: state.projData.concat({
                                'name':response.data[i]['name'], 
                                'language':response.data[i]['language'], 
                                'description':response.data[i]['description'], 
                                'id': response.data[i]['id']
                            })
                    }));
              }
              console.log("done!");
              // console.log(self.state.projData);
            });
        }
        else
        {
            self.setState((state) => ({individual: true}));
            axios.get("http://crossroads.web.engr.illinois.edu/api/project/" + this.props.location.search.substr(3) + "/")
            .then(function (response) {
                    self.setState((state) => ({ 
                            projData: state.projData.concat({
                                'name':response.data['name'], 
                                'language':response.data['language'], 
                                'description':response.data['description'], 
                                'id': response.data['id'],
                                'repositoryURL': response.data['repositoryURL'],
                                'license': response.data['license'],
                            })
                    }));
              });
              // console.log(self.state.projData);

        }


    };

    showProjects = () => {
        // console.log(this.state.projData);
        // return (<div>{this.state.projData.length}<br/>{this.state.projData[0].id.toString()}</div>);
        return this.state.projData.map((c) => {
            return (
                <TableRow key={c.id}>
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
        // console.log(this.state.individual);
        let content =                         <Table>
                            <TableHeader displayRowCheckbox={false}>
                                <TableRow>
                                    <TableHeaderColumn>Project ID</TableHeaderColumn>
                                    <TableHeaderColumn>Project Name</TableHeaderColumn>
                                    <TableHeaderColumn>Project language</TableHeaderColumn>
                                    <TableHeaderColumn>Project Description</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody displayRowCheckbox={false}>
                                                    {this.showProjects()}
                            </TableBody>
                        </Table>;
        let title = <h2>Projects</h2>;
        if(this.state.individual)
        {
            console.dir(this.state.projData);
            content = <div className = "projectDetail">
                <Card>
                    <CardHeader
                      title={this.state.projData[0].name}
                      subtitle={this.state.projData[0].description}
                    />
                    <CardText>
                        Language: {this.state.projData[0].language}<br/>
                        License:{this.state.projData[0].license}
                    </CardText>

                </Card>
            </div>;
            title = <h2>Project Detail</h2>;
        }

        return (
            <div>
                <Nav/>
                <div className="content-projects">
                    {title}
                    <div className="projects-list">
                        {content}
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

