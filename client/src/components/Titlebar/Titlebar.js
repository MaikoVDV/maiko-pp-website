import React, { Component } from 'react';
import './Titlebar.css';
import GoogleLoginComponent from '../Misc/G-SignIn';

class Titlebar extends Component {
    state = {
        titleContent: this.props.titleContent
    }
    render() {
        return(
            <div className="titlebar">
                <p>{this.state.titleContent}</p>
                <AddGSignIn show={this.props.containsSignInButton} />
            </div>
        )
    }
}
function AddGSignIn(props) {
    if(props.show) {
        return(
            <GoogleLoginComponent />
        )
    } else {
        return (null)
    }
}

export default Titlebar