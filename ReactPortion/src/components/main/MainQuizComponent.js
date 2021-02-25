import React, {Component} from 'react';
import axios from "axios";
import { API_URL }  from '../../Constants';
import QuizDataService from '../../api/quiz/QuizDataService'
import AuthenticationService from './AuthenticationService'

const isEmpty = (value) => value === undefined || value == null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0);

//main inside component that one is sent to once logged in.
class MainQuizComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            quizs: [],
            currentQuestion: {},
            nextQuestion: {},
            answer: '',
            numberOfQuestions: 0,
            numberOfAnsweredQuestions: 0,
            currentQuestionIndex: 0,
            score: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            nextButtonDisabled: false
        }
    }
    
    componentDidMount(){
        console.log('componentDidMount')
        this.refreshQuizs();
        
        console.log("refresh")
        
    }
    
    refreshQuizs(){
        let username = "admin"
        
        QuizDataService.retrieveAllQuizs(username)
        .then(
            response => {
                console.log(response)
                this.setState({quizs : response.data},() => {
                    const { quizs, currentQuestion, nextQuestion } = this.state;
                    this.displayQuizs(quizs, currentQuestion, nextQuestion);
                })
            }
        
        );
   }
    
    displayQuizs = (quizs, currentQuestion, nextQuestion) => {
    let { currentQuestionIndex } = this.state;   
    console.log(currentQuestionIndex)
    if (this.state.quizs.length>0) {
        console.log("inside")
        console.log(currentQuestion)
        currentQuestion = quizs[currentQuestionIndex];
        console.log(currentQuestion)
        nextQuestion = quizs[currentQuestionIndex + 1];
        const answer = currentQuestion.answerC;
        console.log(answer);
        this.setState({
            currentQuestion,
            nextQuestion,
            numberOfQuestions: quizs.length,
            answer            
        }, () => {
           // this.showOptions();
           // this.handleDisableButton();
        });
    }     
    };

    //only to tell on console if data was unmounted
    componentWillUnmount(){
        console.log('componentunMounted')
    }

    correctAnswer = () => {
        this.setState(prevState => ({
            score: prevState.score + 1,
            correctAnswers: prevState.correctAnswers + 1,
            currentQuestionIndex: prevState.currentQuestionIndex + 1,
            numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1
        }), () => {            
            if (this.state.nextQuestion === undefined) {
                this.endGame();
            } else {
                this.displayQuestions(this.state.quizs, this.state.currentQuestion, this.state.nextQuestion);
            }
        });
    }

    wrongAnswer = () => {
        this.setState(prevState => ({
            wrongAnswers: prevState.wrongAnswers + 1,
            currentQuestionIndex: prevState.currentQuestionIndex + 1,
            numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1
        }), () => {
            if (this.state.nextQuestion === undefined) {
                this.endGame();
            } else {
                this.displayQuestions(this.state.quizs, this.state.currentQuestion, this.state.nextQuestion);
            }
        });
    }

    handleButtonClick = (e) => {
        switch (e.target.id) {
            case 'next-button':
                this.handleNextButtonClick();
                break;

            case 'previous-button':
                this.handlePreviousButtonClick();
                break;

            case 'quit-button':
                this.handleQuitButtonClick();
                break;

            default:
                break;
        }
        
    };

    handleDisableButton = () => {
              
        if (this.state.nextQuestion === undefined || this.state.currentQuestionIndex + 1 === this.state.numberOfQuestions) {
            this.setState({
                nextButtonDisabled: true
            });
        } else {
            this.setState({
                nextButtonDisabled: false
            });
        }
    }

    endGame = () => {
        alert('Quiz has eneded!');
        const { state } = this;
        const playerStats = {
            score: state.score,
            numberOfQuestions: state.numberOfQuestions,
            numberOfAnsweredQuestions: state.correctAnswers + state.wrongAnswers,
            correctAnswers: state.correctAnswers,
            wrongAnswers: state.wrongAnswers,
            fiftyFiftyUsed: 2 - state.fiftyFifty,
            hintsUsed: 5 - state.hints
        };
        setTimeout(() => {
            this.props.history.push('/play/quizSummary', playerStats);
        }, 1000);
    }

    render(){

        const { currentQuestion, currentQuestionIndex, 
            numberOfQuestions} = this.state;

        return (
            <>
                <h1>Quiz Start</h1>
                <div className="MainQuiz">
                    <div className="QTitle">{currentQuestion.question}.</div>
                    <div className="answers-container">
                        <p className="answer">{currentQuestion.answer1}</p> 
                        <p className="answer">{currentQuestion.answer2}</p>                   
                    </div>
                    <div className="answers-container">
                        <p className="answer">{currentQuestion.answer3}</p>
                        <p className="answer">{currentQuestion.answer4}</p>
                    </div>

                    <div className="button-container">
                        
                        <button> 
                        Next
                        </button>
                        
                    </div>

                </div>
            </>    
        )
    }

}



export default MainQuizComponent