import React, {Component} from 'react';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import AuthenticationService from './AuthenticationService';

class LogoutComponent extends Component{
    render(){
        return(
            <div>
                 <h1>logged out</h1>
                 <div className="container">
                     You Have been Logged Out
                 </div>
            </div>
        )
    }
}

export default LogoutComponent