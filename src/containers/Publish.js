import React, { Component } from "react";
import axios from "axios";

class Publish extends Component {
  state = {
    title: "",
    description: "",
    price: ""
  };
  changeValue = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  submitForm = event => {
    event.preventDefault();
    console.log("title", this.state.title);
    //console.log("token****", token);
    console.log("this.props.user.token***", this.props.user.token);
    const requestBody = {
      title: this.state.title,
      description: this.state.description,
      price: Number(this.state.price)
    };

    axios
      .post(
        "https://leboncoin-api.herokuapp.com/api/offer/publish",
        requestBody,
        {
          headers: {
            authorization: "Bearer " + this.props.user.token
          }
        }
      )
      .then(response => {
        console.log("response.data*****", response.data);
        alert("Votre annonce vient d'être publiée.");
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <form onSubmit={this.submitForm}>
          <h1>Votre annonce</h1>

          <label>
            {" "}
            <h3>Tite de l'annonce</h3>
          </label>
          <div style={{ display: "flex", flex: 1 }}>
            <input
              style={{ display: "flex", flex: 1 }}
              type="text"
              name="title"
              onChange={this.changeValue}
            />
          </div>
          <div>
            <label>Decription</label>
          </div>
          <div style={{ display: "flex", flex: 1 }}>
            <input
              style={{ display: "flex", flex: 1 }}
              type="textarea"
              name="description"
              onChange={this.changeValue}
            />
          </div>
          <div>
            <label>Prix</label>
          </div>
          <div>
            {" "}
            <input
              style={{ display: "flex", flex: 1 }}
              type="text"
              name="price"
              onChange={this.changeValue}
            />
          </div>
          <div>
            <button type="submit">Publier</button>
          </div>
        </form>
      </div>
    );
  }
  // componentDidMount() {
  //   axios
  //     .get("https:leboncoin-api.herokuapp.com/api/offer/publish")
  //     .then(response => {
  //       console.log(response.data);
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     });
  // }
}

export default Publish;
