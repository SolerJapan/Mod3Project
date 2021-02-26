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

### JWTWebSecurityConfig

### JWTWebSecurityConfig

### JWTWebSecurityConfig

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
