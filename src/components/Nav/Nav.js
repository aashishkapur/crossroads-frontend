import React, {Component} from "react";


const style = {
    nav: {
        background: '#03a9f4',
        marginBottom: '0px',
        border: 'none',
        borderRadius: '0px'
    },
    navText: {
        color: 'black',
        // fontFamily: 'anton'
    }
};

export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-default home-navbar" style={style.nav}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/" style={style.navText}>Crossroads</a>
                </div>

            </nav>
        );
    }
}