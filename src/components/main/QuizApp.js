import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AuthenticatedRoute from './AuthenticatedRoute';
import LoginComponent from './LoginComponent';
import LogoutComponent from './LogoutComponent';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import MainComponent from './MainComponent';
import ErrorComponent from './ErrorComponent';
import QuizBaseComponent from './QuizBaseComponent';

class QuizApp extends Component{
    render(){
        return (
            <div className="QuizApp">
                <Router>
                    <>
                      <HeaderComponent></HeaderComponent>
                      <Switch>
                      <Route path="/" exact component={LoginComponent}/>
                      <Route path="/login" component={LoginComponent}/>
                      <AuthenticatedRoute path="/main/:name" component={MainComponent}/>
                      <AuthenticatedRoute path="/quizbase" component={QuizBaseComponent}/>
                      <AuthenticatedRoute path="/logout" component={LogoutComponent}/>

                      <Route component={ErrorComponent}/>
                      </Switch>
                      <FooterComponent></FooterComponent>
                    </>
                </Router>

             {/* <LoginComponent></LoginComponent> */}
            </div>
        )
    }
}

export default QuizApp;