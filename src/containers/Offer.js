import React, { Component } from "react";
import axios from "axios";

import "./Offer.css";

class Offer extends Component {
  state = {
    annonce: {}
  };

  renderPicture = () => {
    if (this.state.annonce.pictures && this.state.annonce.pictures.length > 0) {
      return <div>Une image</div>;
    }

    return <div className="empty-state-image" />; // empty state
  };

  renderCreator = () => {
    if (this.state.annonce.creator) {
      return <div>{this.state.annonce.creator.account.username}</div>;
    }

    return null;
  };

  render() {
    const { annonce } = this.state;

    return (
      <div>
        <div>Id de l'offre: {this.props.match.params.id}</div>
        <div className="container">
          {/* Partie gauche */}
          <div className="offer-body">
            <div>
              {this.renderPicture()}
              <div>{annonce.title}</div>
              <div>{annonce.price} €</div>
            </div>
            <div className="creator-box">
              <h4>Description</h4>
              <div>{annonce.description}</div>
            </div>
          </div>
          {/* Partie droite  */}
          <div>{this.renderCreator()}</div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    axios
      .get(
        `https://leboncoin-api.herokuapp.com/api/offer/${
          this.props.match.params.id
        }` // string template
      )
      .then(response => {
        console.log("response.data", response.data);
        this.setState({
          annonce: response.data
        });
      });
  }
}

export default Offer;
