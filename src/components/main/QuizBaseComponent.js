import React, {Component} from 'react';

import QuizDataService from '../../api/quiz/QuizDataService'
import AuthenticationService from './AuthenticationService'
import moment from 'moment';

class QuizBaseComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            quizs :[],
            message : null
        }
        this.updateQuizClicked = this.updateQuizClicked.bind(this)
        this.deleteQuizClicked = this.deleteQuizClicked.bind(this)
        this.refreshQuiz = this.refreshQuiz.bind(this)
        this.addQuizClicked = this.addQuizClicked.bind(this)
    }

    componentWillUnmount(){
        console.log('componentDidunMount')
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate')
        console.log(nextProps)
        console.log(nextState)
        return true
    }

    componentDidMount(){
         console.log('componentDidMount')
         this.refreshQuiz();
         console.log(this.state)
    }

    refreshQuiz(){
         let username = AuthenticationService.getLoggedInUserName()
         //QuizDataService.retrieveAllQuizs(username)
         //.then(
        //     response => {
         //        console.log(response)
         //        this.setState({Quizs : response.data})
         //    }
        // )
    }

    deleteQuizClicked(id){
        let username = AuthenticationService.getLoggedInUserName()
        console.log(id + " " + username); 
        QuizDataService.deleteQuiz(username, id)
            .then (
            response => {
                    this.setState({message : `Delete of todo ${id} successful`})
                    this.refreshTodos();
                }
            )
    }

    addQuizClicked(){
        //console.log('update' + id)
        this.props.history.push(`/Quizs/-1`)
    }


    updateQuizClicked(id){
        
        console.log("update " + id); 
        this.props.history.push(`/Quizs/${id}`)
        // let username = AuthenticationService.getLoggedInUserName()
        // //console.log(id + " " + username); 
        // QuizDataService.deleteQuiz(username, id)
        //  .then (
        //      response => {
        //          this.setState({message : `Delete of Quiz ${id} successful`})
        //          this.refreshQuizs();
        //      }
        //  )
    }


    render(){
        return <div>
             <h1>List Quiz</h1>
           
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
                   {/*      {
                            this.state.quizs.map(
                            quiz =>  
                            <tr key={quiz.id}>                               
                                <td>{quiz.Question}</td>
                                <td>{quiz.Answer1}</td>
                                <td>{quiz.Answer2}</td>
                                <td>{quiz.Answer3}</td>
                                <td>{quiz.Answer4}</td>
                                <td>{quiz.AnswerC}</td>
                                <td><button className="btn btn-success" onClick={
                                    () => this.updatequizClicked(quiz.id)}>Update</button></td>
                                <td><button className="btn btn-warning" onClick={
                                    () => this.deletequizClicked(quiz.id)}>Delete</button></td>
                            </tr>
                            )
                    </tbody>
                        }*/}
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