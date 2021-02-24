import React, {Component} from 'react';
import AuthenticationService from './AuthenticationService';
import {Route, Redirect} from 'react-router-dom'

//checks if user is logged in and if so the option encased in this component become 
//available 
class AuthenticatedRoute extends Component{
    render(){
        if(AuthenticationService.isUserLoggedIn()){
           return <Route {...this.props}/>
        }else{
           return <Redirect to="/login"/>
        }
    }
}

export default AuthenticatedRoute