import React from "react";
import "./styles.css";

class SignUpInformationItem extends React.Component {
  render() {
    return (
      <div className="first">
        <div className="first-icon">
          <i className={this.props.icon} />
        </div>
        <div style={{ width: "346px" }}>
          <h4>{this.props.title}</h4>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default SignUpInformationItem;
