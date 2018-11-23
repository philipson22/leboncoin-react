import React, { Component } from "react";
import axios from "axios";
import "./styles.css";

const itemsPerPage = 25;

class OffersFilters extends Component {
  state = {
    title: "",
    priceMin: "",
    priceMax: "",
    sort: "price-desc",
    skip: 0,
    limit: ""
  };

  // functionNextPage = () => {
  //     this.setState({itemsPerPage + skip})
  // }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  updatePage = () => {
    axios

      .get("https://leboncoin-api.herokuapp.com/api/offer", {
        params: {
          title: this.state.title,
          priceMin: this.state.priceMin,
          priceMax: this.state.priceMax,
          sort: this.state.sort,
          skip: this.state.skip
        }
      })
      .then(response => {
        this.props.updateAnnoncesList(response.data);
      });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.updatePage();
  };
  previousPage = () => {
    if (this.state.skip <= 0) {
      return;
    }
    this.setState(
      {
        skip: this.state.skip - itemsPerPage // page 1: skip 0 éléments, page 2: skip 25 éléments
      },
      this.updatePage
    );
  };
  nextPage = () => {
    this.setState(
      {
        skip: this.state.skip + itemsPerPage
      },
      this.updatePage
    );
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      // .get(
      //   "https://leboncoin-api.herokuapp.com/api/offer?" +
      //     "title=" +
      //     this.state.title
      // )
      .get("https://leboncoin-api.herokuapp.com/api/offer", {
        params: {
          title: this.state.title,
          priceMin: this.state.priceMin,
          priceMax: this.state.priceMax,
          sort: this.state.sort
        }
      })
      .then(response => {
        this.props.updateAnnoncesList(response.data);
        console.log(this.state.title);
      });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="offers-filter-background">
            <div className="offers-filter-container">
              {" "}
              <input
                id="title"
                name="title"
                placeholder="Que recherchez-vous?"
                onChange={this.handleChange}
                value={this.state.title}
              />
              <input
                id="priceMin"
                name="priceMin"
                placeholder="Prix Min"
                onChange={this.handleChange}
                value={this.state.priceMin}
              />
              <input
                id="priceMax"
                name="priceMax"
                placeholder="Prix Max"
                onChange={this.handleChange}
                value={this.state.priceMax}
              />
            </div>
            <div className="offers-filter-container2">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  padding: "20px"
                }}
              >
                <button
                  onClick={this.nextPage}
                  style={{
                    height: "30px",
                    marginLeft: "5px",
                    borderRadius: "5px"
                  }}
                >
                  Page suivante
                </button>
                <button
                  onClick={this.previousPage}
                  type={onclick}
                  style={{
                    height: "30px",
                    marginLeft: "5px",
                    borderRadius: "5px"
                  }}
                >
                  Page précédente
                </button>
              </div>
              <select
                id="selector"
                name="sort"
                onChange={this.handleChange}
                value={this.state.sort}
              >
                <option value="price-desc">Du + cher au - cher</option>
                <option value="price-asc">Du - cher au + cher</option>
                <option value="date-desc">Trier par date proche </option>
                <option value="date-asc">Trier par date lointaine</option>
              </select>

              <button
                style={{
                  height: "30px",
                  borderRadius: "8px",
                  backgroundColor: "lightgrey"
                }}
                type="submit"
              >
                Rechercher
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default OffersFilters;
