import React, {Component} from "react";


const style = {
    nav: {
        background: '#03a9f4',
        marginBottom: '0px',
        border: 'none',
        borderRadius: '0px',
        fontFamily:'sans-serif',
        padding: '2px',
        'lineHeight':'2em'
    },
    navText: {
        color: 'black',
        'textDecoration': 'none'

        // fontFamily: 'anton'
    },
    input:{
        float: 'right',
    }
};

export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-default home-navbar" style={style.nav}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/" style={style.navText}>Crossroads</a>
                    <input  style={style.input}/>
                </div>

            </nav>
        );
    }
}