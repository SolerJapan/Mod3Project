import React, {Component} from 'react';
import { Link } from 'react-router-dom';

//main inside component that one is sent to once logged in.
class MainComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            //welcomeMessage : 'welcome'
        }
    }
    
    
    render(){
        return (
            <>
                <h1>Welcome</h1>
                <div className="container">
                </div>
            </>    
        )
    }

}



export default MainComponent