import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
//import AboutPage from "./Pages/AboutPage";



class App extends React.Component {

  constructor(props){
    super(props);

    this.state = { 
      username: '',
      password: ''        
    };
                
    //this.submitForm = this.submitForm.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    // Will capture the input value on the <input> tag and save into state 
    // Once the form is submitted, the setstate on the function will reset the value to an empty string

    this.setState({[event.target.name]: event.target.value})
   
  }

  render(){

  return (
    <div className="App">
      <BrowserRouter>            
                 
          <Switch>          
          
            
          </Switch>
      </BrowserRouter>

        <div className="base-container">        
          <div className="header">Login</div>
            <form className="form" onSubmit={this.submitForm} >
              <label htmlFor="username">Username: </label>
              <input type="text" id="username" name="username"  
              onChange={this.onChange} value={this.state.username} placeholder="username"/>
              <label htmlFor="password">Password: </label>
              <input type="password" name="password" id="password" 
              onChange={this.onChange} value={this.state.password} placeholder="password"/>
              <button type ="submit" className="submitbtn" >Login</button>
           </form>
        </div>
    </div>
  );
}}

export default App;
