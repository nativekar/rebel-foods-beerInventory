import React, { Component } from "react";
import { Divider } from "semantic-ui-react";
import _ from "lodash";
import Header from "./Header";
import BeersList from "./BeersList";

class Dashboard extends Component {
  state = {
    beers: [],
    beerImages: [],
  };

  componentDidMount = () => {
    this.fetchBeers();
    this.fetchBeerImages();
  };

  fetchBeers = () => {
    fetch(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/beercraft5bac38c.json"
    )
      .then((response) => response.json())
      .then((data) => this.setState({ beers: data }));
  };

  fetchBeerImages = () => {
    fetch(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/beerimages7e0480d.json"
    )
      .then((response) => response.json())
      .then((data) => this.setState({ beerImages: data }));
  };

  formatToDropdown(data) {
    let ddValues = [];
    _.forEach(data, (it) => {
      ddValues.push({
        abv: it["abv"],
        ibu: it["ibu"],
        ounces: it["ounces"],
      });
    });
    return ddValues;
  }

  sortBy = (value) => {
    const { beers } = this.state;
    this.setState({
      beers: _.sortBy(beers, value),
    });
  };

  render() {
    const { beers, beerImages } = this.state;
    return (
      <div style={{ padding: 20 }}>
        <Header
          restaurants={this.formatToDropdown(beers)}
          onSortBy={this.sortBy}
        />
        <Divider />
        <BeersList beers={beers} beerImages={beerImages} />
      </div>
    );
  }
}

export default Dashboard;
