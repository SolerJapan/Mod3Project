import React, {Component} from 'react';
import {  Link } from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js';
import { withRouter } from 'react-router';

//this component pops up on top and displays the links based on if your logged in
class HeaderComponent extends Component{
    render(){

        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        //console.log(isUserLoggedIn);

        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://web.archive.org/web/20050209055847/http://babu.com/~dk-second/emp2/">Testing</a></div>
                    <ul className="navbar-nav">
                       {isUserLoggedIn && <li><Link className="nav-link" to="/main/admin">Home</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/quizs">Quiz Database</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn &&<li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>

                </nav>
            </header>
            
        )
    }
}

export default withRouter(HeaderComponent);