# Mod3Project

## Japanese Quiz to help with JLPT

### Problem Statement 

You dont commonly see any way to prcatice for the JLPT in an App. Usually this is done in books and CDs
the idea in the end is to make an quiz app that can prepare one for the JLPT.

# Java Side Quiz-web-service 

## src/main/java Packages

### com.quiz.rest.basic.auth  

### SpringSecurityConfigurationBasicAuth

The purpose is to create login securty via basic and is an extension of the WebSecurityConfigurerAdapter

this calls the functions below in the class for the security 

.csrf().disable()	
		.authorizeRequests()
		.antMatchers(HttpMethod.OPTIONS,"/**").permitAll()
		.anyRequest().authenticated()
		.and()		
		.httpBasic(); 

note basic isn't used but JWT is as this was originally used for testing the connection and strings.

### com.quiz.rest.webservices.quizwebservice

### BcryptEncoder

this main application takes a string inside the encoder space and when run returns encoded
string of the word in the space up to 10 different times. This is mainly used for encoding the 
password.

### QuizWebServiceApplication

This runs the main spring application 

### com.quiz.rest.webservices.quizwebservice.jwt 

### JwtInMemoryUserDetailsService

2 functions are used here and pertains to user details and login and has the user information stored such as 
login and password in the first function inMemoryUserList
The Second function loadUserByUsername searches among the first function for what was taken in such as username 
and password and compares to make sure its a match as well as through the password encryption.

### JwtTokenAuthorizationOncePerRequestFilter

building up and using the information from JwtInMemoryUserDetailsService the functio doFilterInternal
generates a user token to be used for the session. 

### JwtTokenUtil

Various functions are declareded here to be used with the token that was generated in JwtTokenAuthorizationOncePerRequestFilter
which do shares calls amongst themselves for token functionality and security such as for expiration, refreshing, validation and 
such as well as the user details stored within the token.

### JwtUnAuthorizedResponseAuthenticationEntryPoint

The function commence mainly will throw and exception and block entry if the token being used is invalid

### JwtUserDetails

the user details and password to be used is declared here as well as the getters and setters

### JWTWebSecurityConfig

holds various functions that are called from maven that configures the websecurity and also takes setting
from application properties for the JSON Web Token

### com.quiz.rest.webservices.quizwebservice.jwt.resource 

### AuthenticationException

has the authenticaion exception function with the message and cause

### JwtAuthenticationRestController

The controller which stores all the controllers and declarations for the authientication tokens and 
responses with functions such as authenticate, handleAuthenticationException, 
refreshAndGetAuthenticationToken, createAuthenticationToken, 

### JwtTokenRequest

class declarations with setters and getters for the token request with username and password

### JWTWebSecurityConfig

class declaration for the token response with only string

### com.quiz.rest.webservices.quizwebservice.quiz

### Quiz

declaration for the contents of the quiz class which is also converted into the H2 database
along with the setters and getters

### QuizHardcodedService

this contains hardcoded values meant to used as testing and was used with Basic. In the current form of the 
application this is not used.

### QuizJpaRepository

calls an interface which extends the Jpa repository ands sets the function findByUsername with list value

### QuizResource

this contains all functions that will take the mapping strings from the react application and returns the information 
requested. This case is only for Basic and as such this is not used as it was used for testing.

### QuizJpaResource

Essientially identical to QuizResource but this is more tuned to work with JPA or java persistance API and for this 
application it is used/

# React Side

## Components and API 

### Component AuthenticatedRoute

This component is encased in the main QuizApp component. what this does is that theres check in state
if the user is logged in the components encased in this component will become available and not accessable 
outside if not logged in.

### Component AuthenticationService

this component uses axios to comunicate and various functions such executeBasicAuthenticationService,
executeJwtAuthenticationService, createBasicAuthToken, registerSuccessfulLoginForJwt, createJWTToken,registerSuccessfulLogin
,logout, isUserLoggedIn, getLoggedInUserName, setupAxiosInterceptors as to communicate with the backend/java app to 
retriece token data and login data. This is also used to confirm the login data and add the information and token 
data to the session storage as well as remove if necessary

### Component ErrorComponent

this component will only pop up if there address is taken to is invalid

### Component FooterComponent

this component is made to set the footer for the site

### Component HeaderComponent

this sets the header and has all the links to the other components at first the components will not show as one 
is not logged in but once your logged in the other components will become available.

### Component LogoutComponent

this component just when sent you are told youve been logged out reachable by the logout button

### Component LoginComponent

This component handles the login to the application. What is done is that the application takes the username and 
password input and then sends it to the backend via executeJwtAuthenticationService and if successful a successful 
login is registered in state and the state for being logged in is changes and set 

### Component MainComponent

This component is the center component that is first seen once one logs in a main center page basically.

### Component QuizApp

This page registers the placements and locations of all the components in the application and has the switch and
router that handles the movement inside the application

### Component MainQuizComponent

This is where the main quiz is run. The application calls the questions from the current database which is based on the admin who 
is allowed to add or remove the questions from the database. The questions along with the answers are rendered and once an answer is clicked
it will move on to the next on. when an answer is clicked the answer clicked is compared to the answer registered to check if 
correct else its incorrect. This is done via various functions such as correctAnswer,wrongAnswer,endGame
once all the questions have been cleared You will be moved to the QuizResults component. 


### Component QuizBaseComponent

This component retrieves data from the database and renders the information. What is rendered is the information in the
database along with the update and delete buttons which both take the id in respect to the row and apply the function
call to QuizDataService to either update or delete in the case of updating you would be taken to QuizBaseIdComponent 
while delete would remove it. There is also an add button which will take you to QuizBaseIdComponent and would automatically
append the new result to the database.

### Component QuizBaseIdComponent

A form based in formik is rendered here to to take in the information to be added into the database in the case of update 
the information is already there and would take any changes. Once the form is submit the information that was submit would be
reflected in the database in the case of a new entry its own id is assigned while for an current entry it uses the id from the 
existing entry.

### Component QuizResults

this page takes the result information from the last page in the MainQuizComponent as it was run and takes the 
final results such as score,number Of Questions,number Of Answered Questions,correct Answers,wrong Answers, and 
renders and displays those results on screen with feedback.

### API QuizDataService

This calls functions Such as retrieveAllQuizs,retrieveQuiz,deleteQuiz,updateQuiz,createQuiz
which runs axios to retrieve,update,create or delete data in the database

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:4200](http://localhost:4200) to view it in the browser.

This connects to the java portion is run which is run in [http://localhost:8081](http://localhost:8081)
with the H2 database.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
