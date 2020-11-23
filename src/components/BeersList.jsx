import React from "react";
import PropTypes from "prop-types";
import { Item } from "semantic-ui-react";
import { ErrorMessage } from "./StyledComponents";

const BeersList = ({ beers, beerImages }) => {
  let img;
  return beers && beers.length > 0 ? (
    <Item.Group divided>
      {/* {beerImages.map((img) => (
        <Item.Image src={img.image} alt="" height="35px" width="25px" />
      ))} */}
      {beers.map(
        (beer) => (
          // eslint-disable-next-line no-sequences
          (img = beerImages["image"]),
          (
            <Item key={beer["id"]}>
              <Item.Image src={img} alt="" height="35px" width="25px" />
              <Item.Content>
                <Item.Header as="a">Beer Name: {beer["name"]}</Item.Header>
                <Item.Meta>Beer ABV: {beer["abv"]}</Item.Meta>
                {beer["ibu"] ? (
                  <Item.Meta>Beer IBU: {beer["ibu"]}</Item.Meta>
                ) : (
                  <Item.Meta>Beer IBU: {"Not available"}</Item.Meta>
                )}
                <Item.Meta>Beer Name: {beer["name"]}</Item.Meta>
                <Item.Meta>Beer Style: {beer["style"]}</Item.Meta>
                <Item.Meta>Beer Weight: {beer["ounces"]}</Item.Meta>
              </Item.Content>
            </Item>
          )
        )
      )}
    </Item.Group>
  ) : (
    <ErrorMessage> No beers found matching your search. </ErrorMessage>
  );
};

BeersList.propTypes = {
  beers: PropTypes.array,
  beerImages: PropTypes.array,
};

BeersList.defaultProps = {
  beers: [],
  beerImages: [],
};

export default BeersList;
