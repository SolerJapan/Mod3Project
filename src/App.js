import React, {Component} from 'react';
import './App.css';
import './bootstrap.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import QuizApp from './components/main/QuizApp';
//import AboutPage from "./Pages/AboutPage";



class App extends React.Component {

  render(){

  return (
    <div className="App">
      <QuizApp></QuizApp>
    </div>
  );
}}

export default App;
