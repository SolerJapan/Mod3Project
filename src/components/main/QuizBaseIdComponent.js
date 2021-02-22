import React, {Component} from 'react';
import moment from 'moment';
import {Formik, Form, Field, ErrorMessage } from 'formik';
import QuizDataService from '../../api/quiz/QuizDataService.js'
import AuthenticationService from './AuthenticationService';


class QuizBaseIdComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            id : this.props.match.params.id,
            Question : '',
            Answer1 : '',
            Answer2 : '',
            Answer3 : '',
            Answer4 : '',
            AnswerC : '',
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }
    
    componentDidMount(){

        if (this.state.id === -1) {
            
        }

        let username = AuthenticationService.getLoggedInUserName()
        
        QuizDataService.retrieveTodo(username, this.state.id)
            .then(response => this.setState({
                description: response.data.description,
                targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
            }
            
            ))
    }

    validate(values){
        let errors = {}
        if(!values.Question){
            errors.Question = 'Enter a Question'
        } else if(values.Question.length<10){
            errors.Question = 'should have at least 10 characters'
        }

        if(!values.Answer1){
            errors.Answer1 = 'Enter Answer1'
        } else if(values.Answer1.length<10){
            errors.Answer1 = 'should have at least 10 characters'
        }
        
        if(!values.Answer2){
            errors.Answer2 = 'Enter Answer2'
        } else if(values.Answer2.length<10){
            errors.Answer2 = 'should have at least 10 characters'
        }
        
        if(!values.Answer3){
            errors.Answer3 = 'Enter Answer3'
        } else if(values.Answer3.length<10){
            errors.Answer3 = 'should have at least 10 characters'
        }

        if(!values.Answer4){
            errors.Answer4 = 'Enter Answer4'
        } else if(values.Answer4.length<10){
            errors.Answer4 = 'should have at least 10 characters'
        }

        if(!values.AnswerC){
            errors.AnswerC = 'Enter the Correct Answer'
        } else if(values.AnswerC.length<10){
            errors.AnswerC = 'should have at least 10 characters'
        }

        console.log(values);
        return errors;
    }

    onSubmit(values){
        let username = AuthenticationService.getLoggedInUserName()

        let quiz ={
            id: this.state.id,
            Question: values.Question,
            Answer1: values.Answer1,
            Answer2: values.Answer2,
            Answer3: values.Answer3,
            Answer4: values.Answer4,
            AnswerC: values.AnswerC,
        }

        if(this.state.id === -1){
            TodoDataService.updateTodo(question, quiz)
            .then(() =>  this.props.history.push('/quizs'))
        
        }else{
            TodoDataService.updateTodo(question, this.state.id, quiz)
            .then(() =>  this.props.history.push('/quizs'))
        }

       

        console.log(values);
    }

    render(){
        let {description,targetDate} = this.state
        

        return (
                <div>
                    <h1>Todo</h1>
                    <div className="container">
                        <Formik
                            initialValues={{ 
                                Question: values.Question,
                                Answer1: values.Answer1,
                                Answer2: values.Answer2,
                                Answer3: values.Answer3,
                                Answer4: values.Answer4,
                                AnswerC: values.AnswerC,
                            }}
                            onSubmit={this.onSubmit}
                            validateOnChange={false}
                            validateOnBlur={false}
                            validate={this.validate}
                            enableReinitialize={true}
                        >

                            {
                                (props) => (
                                    <Form>
                                        <ErrorMessage name="description" component="div" 
                                            className="alert alert-warning"/>
                                        <ErrorMessage name="targetDate" component="div" 
                                            className="alert alert-warning"/>
                                       <fieldset className="form-group">
                                            <label>Question</label>
                                            <Field className="form-control" type="text" name="Question"/>   
                                        </fieldset> 
                                        <fieldset className="form-group">
                                            <label>Answer1 </label>
                                            <Field className="form-control" type="date" name="Answer1"/>   
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label>Answer2 </label>
                                            <Field className="form-control" type="date" name="Answer2"/>   
                                        </fieldset> 
                                        <fieldset className="form-group">
                                            <label>Answer3 </label>
                                            <Field className="form-control" type="date" name="Answer3"/>   
                                        </fieldset> 
                                        <fieldset className="form-group">
                                            <label>Answer4 </label>
                                            <Field className="form-control" type="date" name="Answer4"/>   
                                        </fieldset> 
                                        <fieldset className="form-group">
                                            <label>AnswerC </label>
                                            <Field className="form-control" type="date" name="AnswerC"/>   
                                        </fieldset>  
                                        <button className="btn btn-success" type="submit">Save</button>
                                    </Form>
                                )
                            }
                        </Formik>
                    
                    
                    </div>
                </div>
        )
    }
}

export default QuizBaseIdComponent;