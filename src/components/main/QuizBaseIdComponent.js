import React, {Component} from 'react';
import moment from 'moment';
import {Formik, Form, Field, ErrorMessage } from 'formik';
import QuizDataService from '../../api/quiz/QuizDataService.js'
import AuthenticationService from './AuthenticationService';

//component screen where you can modify the questions
//or create the questions by inputting the information
class QuizBaseIdComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            id : this.props.match.params.id,
            question : '',
            answer1 : '',
            answer2 : '',
            answer3 : '',
            answer4 : '',
            answerC : ''           
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }
    //handles the mounting of data into state from database
    componentDidMount(){

        if (this.state.id === -1) {
            
        }
        else{
        console.log('mounting questions')
        let username = AuthenticationService.getLoggedInUserName()
        console.log('mounting questions')
        QuizDataService.retrieveQuiz(username, this.state.id)
            .then(response => this.setState({
                question: response.data.question,
                answer1: response.data.answer1,
                answer2: response.data.answer2,
                answer3: response.data.answer3,
                answer4: response.data.answer4,
                answerC: response.data.answerC,
            }
          
            ))
        }
            
    }
    //validates values for the question entries
    validate(values){
        let errors = {}
        // if(!values.Question){
        //     errors.Question = 'Enter a Question'
        // } else if(values.Question.length<10){
        //     errors.Question = 'should have at least 10 characters'
        // }

        // if(!values.Answer1){
        //     errors.Answer1 = 'Enter Answer1'
        // } else if(values.Answer1.length<10){
        //     errors.Answer1 = 'should have at least 10 characters'
        // }
        
        // if(!values.Answer2){
        //     errors.Answer2 = 'Enter Answer2'
        // } else if(values.Answer2.length<10){
        //     errors.Answer2 = 'should have at least 10 characters'
        // }
        
        // if(!values.Answer3){
        //     errors.Answer3 = 'Enter Answer3'
        // } else if(values.Answer3.length<10){
        //     errors.Answer3 = 'should have at least 10 characters'
        // }

        // if(!values.Answer4){
        //     errors.Answer4 = 'Enter Answer4'
        // } else if(values.Answer4.length<10){
        //     errors.Answer4 = 'should have at least 10 characters'
        // }

        // if(!values.AnswerC){
        //     errors.AnswerC = 'Enter the Correct Answer'
        // } else if(values.AnswerC.length<10){
        //     errors.AnswerC = 'should have at least 10 characters'
        // }

        console.log(values);
        return errors;
    }
    //final submission into databases pushes the final result
    onSubmit(values){
        let username = AuthenticationService.getLoggedInUserName()

        let quiz ={
            id: this.state.id,
            question: values.question,
            answer1: values.answer1,
            answer2: values.answer2,
            answer3: values.answer3,
            answer4: values.answer4,
            answerC: values.answerC,
        }

        if(this.state.id === -1){
            QuizDataService.updateQuiz(username, quiz)
            .then(() =>  this.props.history.push('/quizs'))
        
        }else{
            QuizDataService.updateQuiz(username, this.state.id, quiz)
            .then(() =>  this.props.history.push('/quizs'))
        }

       

        console.log(values);
    }

    render(){
        let {question,answer1,answer2,answer3,answer4,answerC} = this.state
        

        return (
                <div>
                    <h1>Question Contents</h1>
                    <div className="container">
                        <Formik
                            initialValues={{ 
                                question,
                                answer1,
                                answer2,
                                answer3,
                                answer4,
                                answerC,
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
                                        {/* <ErrorMessage name="Question" component="div" 
                                            className="alert alert-warning"/>
                                        <ErrorMessage name="Answer1" component="div" 
                                            className="alert alert-warning"/>
                                        <ErrorMessage name="Answer2" component="div" 
                                            className="alert alert-warning"/>
                                        <ErrorMessage name="Answer3" component="div" 
                                            className="alert alert-warning"/>
                                        <ErrorMessage name="Answer4" component="div" 
                                            className="alert alert-warning"/>
                                        <ErrorMessage name="AnswerC" component="div" 
                                            className="alert alert-warning"/>                 */}
                                       <fieldset className="form-group">
                                            <label>question</label>
                                            <Field className="form-control" type="text" name="question"/>   
                                        </fieldset> 
                                        <fieldset className="form-group">
                                            <label>answer1 </label>
                                            <Field className="form-control" type="text" name="answer1"/>   
                                        </fieldset>
                                        <fieldset className="form-group">
                                            <label>answer2 </label>
                                            <Field className="form-control" type="text" name="answer2"/>   
                                        </fieldset> 
                                        <fieldset className="form-group">
                                            <label>answer3 </label>
                                            <Field className="form-control" type="text" name="answer3"/>   
                                        </fieldset> 
                                        <fieldset className="form-group">
                                            <label>answer4 </label>
                                            <Field className="form-control" type="text" name="answer4"/>   
                                        </fieldset> 
                                        <fieldset className="form-group">
                                            <label>answerC </label>
                                            <Field className="form-control" type="text" name="answerC"/>   
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