import React from "react";
import "./Home.css";
import axios from "axios";
import { Link } from "react-router-dom";
import OffersFilters from "../components/OffersFilters";
class Home extends React.Component {
  state = {
    annonces: []
  };

  updateAnnoncesList = annonces => {
    this.setState({ annonces: annonces });
  };

  render() {
    const listItems = [];
    for (let i = 0; i < this.state.annonces.length; i++) {
      listItems.push(
        <Link
          to={{
            pathname: "/offer/" + this.state.annonces[i]._id
          }}
          key={i}
          style={{
            display: "flex",
            flexDirection: "row",
            border: "solid 1px lightgrey",
            backgroundColor: "white",
            textDecoration: "none"
          }}
        >
          <div
            style={{
              width: "150px",
              height: "150px",
              border: "solid 1px grey",
              margin: "5px 15px",
              backgroundColor: "lightblue"
            }}
          >
            {this.state.annonces[i].pictures}
          </div>
          <div>
            <div style={{ margin: "0px 0px" }}>
              <h4> {this.state.annonces[i].title}</h4>
            </div>
            <div style={{ margin: "0 0px" }}>
              {this.state.annonces[i].description}
            </div>
            <div style={{ margin: "0px 0px", color: "orange" }}>
              {this.state.annonces[i].price + "€"}
            </div>
          </div>{" "}
        </Link>
      );
    }

    // for (let i = 0; i < this.state.annonces.length; i++) {
    //   this.state.annonces.push({ picture: this.state.description[i] });
    // }

    return (
      <div>
        <OffersFilters updateAnnoncesList={this.updateAnnoncesList} />

        <div>{listItems}</div>
      </div>
    );
  }

  componentDidMount() {
    axios
      .get("https://leboncoin-api.herokuapp.com/api/offer")
      .then(response => {
        this.setState({ annonces: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
}

export default Home;
