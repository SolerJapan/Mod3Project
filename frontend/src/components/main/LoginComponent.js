import React, {Component} from 'react';
import AuthenticationService from './AuthenticationService';

//component to trigger the login and keep the state. there are various functions
//to login on base state, or with authentication takes the username and password.
class LoginComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: 'admin',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

         this.handleChange = this.handleChange.bind(this)
         this.loginClicked = this.loginClicked.bind(this) 
    }
    //handles event 
    handleChange(event){
        this.setState({[event.target.name]:event.target.value})
    }
    
    loginClicked(){
      
        //  //login via basic
        // 
        //  AuthenticationService
        //  .executeBasicAuthenticationService(this.state.username, this.state.password)
        //  .then(() => {
        //      AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password);
        //      this.props.history.push(`/main/${this.state.username}`)
        //  }

        //  ).catch( () =>{
        //      this.setState({showSuccessMessage:false})
        //      this.setState({hasLoginFailed:true})
        //  })

        //login via jpa
         AuthenticationService       
         .executeJwtAuthenticationService(this.state.username, this.state.password)
         .then((response) => {
             console.log(this.state.username, this.state.password, response.data.token)
             AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, response.data.token);
             this.props.history.push(`/main/${this.state.username}`)
         }

         ).catch( () =>{
             this.setState({showSuccessMessage:false})
             this.setState({hasLoginFailed:true})
         })

    }

    render(){
        return (
        
            <div>
                <h1>Login</h1>
                <div className="container">
                    {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/> */}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid User</div>}
                    {/* <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/> */}
                    {this.state.showSuccessMessage && <div>Success</div>}
                    UserName: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }
}

export default LoginComponent