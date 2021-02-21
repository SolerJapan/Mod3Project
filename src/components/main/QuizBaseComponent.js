import React, {Component} from 'react';

import AuthenticationService from './AuthenticationService'
import moment from 'moment';

class QuizBaseComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            todos :[],
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
        // console.log('componentDidMount')
        // this.refreshQuiz();
        // console.log(this.state)
    }

    refreshQuiz(){
        // let username = AuthenticationService.getLoggedInUserName()
        // TodoDataService.retrieveAllTodos(username)
        // .then(
        //     response => {
        //         //console.log(response)
        //         this.setState({todos : response.data})
        //     }
        // )
    }

    deleteQuizClicked(id){
        // let username = AuthenticationService.getLoggedInUserName()
        // //console.log(id + " " + username); 
        // TodoDataService.deleteTodo(username, id)
        //  .then (
        //      response => {
        //          this.setState({message : `Delete of todo ${id} successful`})
        //          this.refreshTodos();
        //      }
        //  )
    }

    addQuizClicked(){
        //console.log('update' + id)
        //this.props.history.push(`/todos/-1`)
    }


    updateQuizClicked(id){
        
        //console.log("update " + id); 
        // this.props.history.push(`/todos/${id}`)
        // let username = AuthenticationService.getLoggedInUserName()
        // //console.log(id + " " + username); 
        // TodoDataService.deleteTodo(username, id)
        //  .then (
        //      response => {
        //          this.setState({message : `Delete of todo ${id} successful`})
        //          this.refreshTodos();
        //      }
        //  )
    }


    render(){
        return <div>
             <h1>List Quiz</h1>
           
            <div className ="container">
                {/* <table className = "table">
                    <thead>
                        <tr>
                            <th>description</th>                  
                            <th>Completed?</th>
                            <th>target date</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                            todo =>  
                            <tr key={todo.id}>                               
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                <td><button className="btn btn-success" onClick={
                                    () => this.updateTodoClicked(todo.id)}>Update</button></td>
                                <td><button className="btn btn-warning" onClick={
                                    () => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
                <div className="row">
                    <button className="btn btn-success" onClick={this.addTodoClicked}>Add</button>
                </div> */}
            </div>            
        </div> 
    }
}

export default QuizBaseComponent;