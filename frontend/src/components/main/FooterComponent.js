import React, {Component} from 'react';

//this component pops up on the bottom of all pages
class FooterComponent extends Component{
    render(){
        return(
            <footer className="footer">
                <span className="text-muted">all rights reserved </span>
            </footer>
        )
    }
}

export default FooterComponent;