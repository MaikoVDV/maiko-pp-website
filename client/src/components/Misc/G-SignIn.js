import React, { Component } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { connect } from 'react-redux';

import { loginUser, addJwt } from '../../actions/userActions';

const CLIENT_ID = "284487736635-cn97glpichk24oo3qomruucndt3doan3.apps.googleusercontent.com";

class GoogleLoginComponent extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      userInfo: {
        name: "",
        emailId: "",
      },
    };
  }

  // Success Handler
  responseGoogleSuccess = (response) => {
    //console.log(response.tokenId)
    let userInfo = {
      name: response.profileObj.name,
      emailId: response.profileObj.email,
    };
    this.props.addJwt(response.tokenId)
    this.setState({ userInfo, isLoggedIn: true });
    this.props.loginUser(response.tokenId)
  };

  // Error Handler
  responseGoogleError = (response) => {
    console.log(response);
  };

  // Logout Session and Update State
  logout = (response) => {
    console.log(response);
    let userInfo = {
      name: "",
      emailId: "",
    };
    this.setState({ userInfo, isLoggedIn: false });
  };

  render() {
    return (
      <div className="row mt-5" style={{float: "right", lineHeight: "var(--titlebar-height)"}}>
        <div className="col-md-12">
          {this.state.isLoggedIn ? (
            <div>
              {/* <h1>Welcome, {this.state.userInfo.name}</h1> */}

              <GoogleLogout
                clientId={CLIENT_ID}
                buttonText={"Logout"}
                onLogoutSuccess={this.logout}
              ></GoogleLogout>
            </div>
          ) : (
            <GoogleLogin
              clientId={CLIENT_ID}
              buttonText="Sign In with Google"
              onSuccess={this.responseGoogleSuccess}
              onFailure={this.responseGoogleError}
              isSignedIn={true}
              cookiePolicy={"single_host_origin"}
            />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, { loginUser, addJwt })(GoogleLoginComponent);