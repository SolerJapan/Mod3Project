import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class QuizResults extends Component {
    constructor (props) {
        super(props);
        this.state = {
            score: 0,
            numberOfQuestions: 0,
            numberOfAnsweredQuestions: 0,
            correctAnswers: 0,
            wrongAnswers: 0     
        };
    }

    componentDidMount () {
        const { state } = this.props.location;
        if (state) {
            this.setState({
                score: (state.score / state.numberOfQuestions) * 100,
                numberOfQuestions: state.numberOfQuestions,
                numberOfAnsweredQuestions: state.numberOfAnsweredQuestions,
                correctAnswers: state.correctAnswers,
                wrongAnswers: state.wrongAnswers,
              
            });
        }
    }

    render () {
        const { state } = this.props.location;
        let stats, remark;
        const userScore = this.state.score;

        if (userScore <= 30 ) {
            remark = 'You need more practice!';
        } else if (userScore > 30 && userScore <= 50) {
            remark = 'Better luck next time!';
        } else if (userScore <= 70 && userScore > 50) {
            remark = 'You can do better!';
        } else if (userScore >= 71 && userScore <= 84) {
            remark = 'Passable';
        } else {
            remark = 'Great Work';
        }

        if (state !== undefined) {
            stats = (
                <>
                    <div style={{ textAlign: 'center' }}>
                        <span className="mdi mdi-check-circle-outline success-icon"></span>
                    </div>
                    <h1>Your Results</h1>
                    <div className="container stats">
                        <h4>{remark}</h4>
                        <h2>Your Score: {this.state.score.toFixed(0)}&#37;</h2>
                        <span className="stat left">Total number of questions: </span>
                        <span className="right">{this.state.numberOfQuestions}</span><br />

                        <span className="stat left">Number of Correct Answers: </span>
                        <span className="right">{this.state.correctAnswers}</span> <br />

                        <span className="stat left">Number of Wrong Answers: </span>
                        <span className="right">{this.state.wrongAnswers}</span><br />

                    </div>
                    <section>                        
                                <Link to ="/main/">Back to Home</Link>                        
                    </section>
                </>
            );
        } else {
            stats = (
                <section>
                    <h1 className="no-stats">No Statistics Available</h1>
                </section>
            );
        }
        return (
            <>
                <title>Quiz App - Summary</title>
                <div className="quiz-summary">
                    {stats}
                </div>
            </>
        );
    }
}

export default QuizResults;