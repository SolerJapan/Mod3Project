import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AuthenticatedRoute from './AuthenticatedRoute';
import LoginComponent from './LoginComponent';
import LogoutComponent from './LogoutComponent';
import MainQuizComponent from './MainQuizComponent';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import MainComponent from './MainComponent';
import ErrorComponent from './ErrorComponent';
import QuizBaseComponent from './QuizBaseComponent';
import QuizBaseIdComponent from './QuizBaseIdComponent';
import QuizResults from './QuizResults';

//main component which sets all the links and routes
//as well as sets all the components
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
                      <AuthenticatedRoute path="/quizresults" exact component={QuizResults} />
                      <AuthenticatedRoute path="/main/" component={MainComponent}/>
                      <AuthenticatedRoute path="/quizs/:id" component={QuizBaseIdComponent}/>
                      <AuthenticatedRoute path="/quizs" component={QuizBaseComponent}/> 
                      <AuthenticatedRoute path="/quizmain" component={MainQuizComponent}/>                    
                      <AuthenticatedRoute path="/logout" component={LogoutComponent}/>

                      <Route component={ErrorComponent}/>
                      </Switch>
                     
                    </>
                </Router>
                <FooterComponent></FooterComponent>
             {/* <LoginComponent></LoginComponent> */}
            </div>
        )
    }
}

export default QuizApp;