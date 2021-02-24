import React, {Component} from 'react';
import QuizDataService from '../../api/quiz/QuizDataService'
import AuthenticationService from './AuthenticationService'
//import moment from 'moment';

//this links to the quiz database where questions 
//can be added or removed.
class QuizBaseComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            quizs :[],
            message : null
        }
        this.updateQuizClicked = this.updateQuizClicked.bind(this)
        this.deleteQuizClicked = this.deleteQuizClicked.bind(this)
        this.refreshQuizs = this.refreshQuizs.bind(this)
        this.addQuizClicked = this.addQuizClicked.bind(this)
    }
    //only to tell on console if data was unmounted
    componentWillUnmount(){
        console.log('componentunMounted')
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate')
        console.log(nextProps)
        console.log(nextState)
        return true
    }
    //only to tell on console if data was mounted and refreshes data
    componentDidMount(){
         console.log('componentDidMount')
         this.refreshQuizs();
         console.log(this.state)
    }
    //refreshes and retieves all quizes from database based on username
    refreshQuizs(){
         let username = AuthenticationService.getLoggedInUserName()
         QuizDataService.retrieveAllQuizs(username)
         .then(
             response => {
                 console.log(response)
                 this.setState({quizs : response.data})
             }
         )
    }
    //deletes selected quiz from database based on username and id
    deleteQuizClicked(id){
        let username = AuthenticationService.getLoggedInUserName()
        //console.log(id + " " + username); 
        QuizDataService.deleteQuiz(username, id)
            .then (
            response => {
                    this.setState({message : `Delete of todo ${id} successful`})
                    this.refreshQuizs();
                }
            )
    }
    //adds new quiz into database
    addQuizClicked(){
        //console.log('update' + id)
        this.props.history.push(`/quizs/-1`)
    }

    //updates selected quiz based on id
    updateQuizClicked(id){
        
        console.log("update " + id); 
        this.props.history.push(`/quizs/${id}`)
    }


    render(){
        return <div>
             <h1>List Quiz</h1>
             {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
            <div className ="container">
                <table className = "table">
                    <thead>
                        <tr>
                            <th>Question</th>                  
                            <th>Answer1</th>
                            <th>Answer2</th>
                            <th>Answer3</th>
                            <th>Answer4</th>
                            <th>AnswerC</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.quizs.map(
                            quiz =>  
                            <tr key={quiz.id}>                               
                                <td>{quiz.question}</td>
                                <td>{quiz.answer1}</td>
                                <td>{quiz.answer2}</td>
                                <td>{quiz.answer3}</td>
                                <td>{quiz.answer4}</td>
                                <td>{quiz.answerC}</td>
                                <td><button className="btn btn-success" onClick={
                                    () => this.updateQuizClicked(quiz.id)}>Update</button></td>
                                <td><button className="btn btn-warning" onClick={
                                    () => this.deleteQuizClicked(quiz.id)}>Delete</button></td>
                            </tr>
                            )
                        }                       
                    </tbody>
                </table>  
                <div className="row">
                    <button className="btn btn-success" onClick={this.addQuizClicked}>Add</button>
                </div>
            </div>          
        </div> 
    }
}

export default QuizBaseComponent;