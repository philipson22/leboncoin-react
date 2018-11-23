import React from "react";
import axios from "axios";

import "./styles.css";
import SignUpAccountItem from "../SignUpAccountItem";

class SignUpInformationAccount extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    passwordConfirmed: ""
  };

  changeValue = (field, value) => {
    this.setState({
      [field]: value
    });
  };

  submitForm = event => {
    if (this.state.password !== this.state.passwordConfirmed) {
      return console.log("MINCE LA REQUETTE n'a pas abouti...");
    } //else{}

    const requestBody = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    };

    axios
      .post("https://leboncoin-api.herokuapp.com/api/user/sign_up", requestBody)
      .then(response => {
        console.log(response.data);
        console.log("this.props", this.props);
        if (response.data && response.data.token) {
          this.props.logIn({
            token: response.data.token,
            username: response.data.account.username,
            _id: response.data._id
          });
          this.props.history.push("/");
        }
      })
      .catch(error => {
        console.log(error);
      });
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <h2>Créez un compte</h2>
          <SignUpAccountItem
            label="Pseudo"
            field="username"
            changeValue={this.changeValue}
          />
          <SignUpAccountItem
            label="Adresse email"
            field="email"
            changeValue={this.changeValue}
          />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <SignUpAccountItem
              label="Mot de passe"
              field="password"
              type="password"
              changeValue={this.changeValue}
            />
            <SignUpAccountItem
              label="Confirmer le mot de passe"
              field="passwordConfirmed"
              type="password"
              changeValue={this.changeValue}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <input type="checkbox" />
            </div>
            <div>
              <p>
                Je souhaite recevoir des offres des partenaires du site
                leboncoin susceptibles de m'intéresser
              </p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <input type="checkbox" required />
            </div>
            <div>
              <p>
                "J'accepte les <strong>Conditions Générales de Vente</strong>"
              </p>
            </div>
          </div>
          <button type="submit">
            <h3>Créer mon Compte personnel</h3>
          </button>
        </form>
      </div>
    );
  }
}
export default SignUpInformationAccount;
