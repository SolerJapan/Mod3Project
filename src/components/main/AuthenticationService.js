class AuthenticationService{

    registerSuccessfulLogin(username,password){
        console.log('registerSuccessfulLogin')
        sessionStorage.setItem('authenicatedUser', username);
    }

    logout() {
        sessionStorage.removeItem('authenicatedUser');
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenicatedUser')
        if(user===null){
            return false;
        }
        else{
            return true;
        } 
        
    }

    getLoggedInUserName(){
        let user = sessionStorage.getItem('authenicatedUser')
        if(user===null){
            return '';
        }
        else{
            return user;
        } 
        
    }
}

export default new AuthenticationService()