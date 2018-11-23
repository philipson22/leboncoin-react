import React from "react";
import "./styles.css";

class SignUpAccountItem extends React.Component {
  render() {
    return (
      <div style={{ marginRight: "20px" }}>
        <h4>{this.props.label}</h4>
        <input
          type={this.props.type}
          placeholder=""
          onChange={e =>
            this.props.changeValue(this.props.field, e.target.value)
          }
        />
      </div>
    );
  }
}

export default SignUpAccountItem;
