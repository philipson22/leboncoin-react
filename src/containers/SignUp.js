import React from "react";

import SignUpInformation from "../components/SignUpInformation";
import SignUpInformationAccount from "../components/SignUpInformationAccount";

class SignUp extends React.Component {
  render() {
    return (
      <div className="element-form">
        <div className="left-element">
          <SignUpInformation />
        </div>
        <div />

        <div className="right-element" />
        <SignUpInformationAccount
          logIn={this.props.logIn}
          history={this.props.history}
        />
      </div>
    );
  }
}

export default SignUp;
