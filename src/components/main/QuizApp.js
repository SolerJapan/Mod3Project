import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AuthenticatedRoute from './AuthenticatedRoute';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';

class QuizApp extends Component{
    render(){
        return (
            <div className="QuizApp">
                <Router>
                    <>
                      <HeaderComponent></HeaderComponent>
                      <Switch>
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