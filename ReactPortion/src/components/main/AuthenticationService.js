import axios from "axios";
import { API_URL }  from '../../Constants';

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

class AuthenticationService{
    //executes retrieval based on basic api //hardcoded java code
    executeBasicAuthenticationService(username, password){
        return axios.get(`${API_URL}/basicauth`, 
            {headers: {authorization: this.createBasicAuthToken(username, password)}})
    }
    //executes data retrieval based on jpa // from database
    executeJwtAuthenticationService(username, password){
        return axios.post(`${API_URL}/authenticate`, {
            username,
            password
        })
            
    }
    //creates login token for basic
    createBasicAuthToken(username,password){
        return 'Basic ' + window.btoa(username + ":" + password)
    }
    //confirms successful login with jpa 
    registerSuccessfulLoginForJwt(username, token){
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
        this.setupAxiosInterceptors(this.createJWTToken(token))
    }
    //creates login token for JPA
    createJWTToken(token) {
        return 'Bearer ' + token
    }
    //confirms successful login with basic 
    registerSuccessfulLogin(username, password){
        
        let basicAuthHeader = 'Basic ' +  window.btoa(username + ":" + password)
        
        console.log('registerSuccessfulLogin')
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
        this.setupAxiosInterceptors(basicAuthHeader)
    }
    //handles logout
    logout() {
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    }
    //handles login in there is a session item in storage 
    isUserLoggedIn(){
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if(user===null){
            return false;
        }
        else{
            return true;
        } 
        
    }
    //retrieves logged in username
    getLoggedInUserName(){
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if(user===null){
            return '';
        }
        else{
            return user;
        } 
        
    }

    setupAxiosInterceptors(basicAuthHeader){
        axios.interceptors.request.use(
            (config) =>{
                if(this.isUserLoggedIn()) {
                    config.headers.authorization = basicAuthHeader
                }
                return config
            }
        )
    }
}

export default new AuthenticationService()