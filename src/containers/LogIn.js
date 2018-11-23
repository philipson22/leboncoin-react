import React, { Component } from "react";
import axios from "axios";

class LogIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({ [name]: value });
  };

  onSubmit = event => {
    axios
      .post("https://leboncoin-api.herokuapp.com/api/user/log_in", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        console.log(response.data);
        // {
        //   account: {
        //     username: "farid";
        //   }
        //   token: "WKOCjBUoSZRfbicPLNVlCzrZPGKNA2YkcKBB9vwb8r9ysZJgoGCjJu0bhXJZgOZ8";
        //   _id: "5bf3c652d3e6e00014dd74bf";
        // }

        if (response.data && response.data.token) {
          this.props.logIn({
            token: response.data.token,
            username: response.data.account.username,
            _id: response.data._id
          });

          this.props.history.push("/");
        }
      })
      .catch(err => {
        console.log(err);
      });
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div
          style={{
            width: "612px",
            display: "flex",
            flexDirection: "column",
            marginTop: "20px"
          }}
        >
          {" "}
          <h3
            style={{
              borderBottom: "solid 3px red",
              textAlign: "center",
              paddingBottom: "20px"
            }}
          >
            Connexion
          </h3>
          <label style={{ marginTop: "20px" }} htmlFor="email">
            Adresse email
          </label>
          <input
            style={{ marginTop: "20px" }}
            id="email"
            name="email"
            type="text"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label style={{ marginTop: "20px" }} htmlFor="password">
            password
          </label>
          <input
            style={{ marginTop: "20px" }}
            id="password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button
            style={{
              marginTop: "20px",
              backgroundColor: "lightblue",
              borderBottom: "solid 1px grey",
              height: "40px"
            }}
            type="submit"
          >
            Valider
          </button>
          <label
            style={{ marginTop: "20px", textAlign: "center" }}
            htmlFor="password"
          >
            Vous n'avez pas de compte ?
          </label>
          <button
            style={{
              marginTop: "20px",
              backgroundColor: "lightyellow",
              borderBottom: "solid 1px grey",
              height: "40px",
              width: "300px",
              marginLeft: "150px"
            }}
            type="submit"
          >
            Créer votre compte
          </button>
        </div>
      </form>
    );
  }
}

export default LogIn;
