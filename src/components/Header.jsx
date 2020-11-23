import React from "react";
import PropTypes from "prop-types";
import SearchFilter from "./SearchFilter";
import { Divider, Dropdown } from "semantic-ui-react";

const sortOptions = [
  { id: "abv", key: "abv", text: "ABV", value: "abv" },
  { id: "ibu", key: "ibu", text: "IBU", value: "ibu" },
  {
    id: "ounces",
    key: "ounces",
    text: "Weight",
    value: "ounces",
  },
];

const Header = ({ beers, onSortBy }) => (
  <div>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h1>Beers</h1>
      <SearchFilter options={beers} />
    </div>
    <Divider />
    <div>
      <Dropdown
        text="Sort by"
        icon="filter"
        options={sortOptions}
        onChange={(e, { value }) => onSortBy(value)}
      />
    </div>
  </div>
);

Header.propTypes = {
  beers: PropTypes.array,
  onSearchChange: PropTypes.func,
  onSearchSelection: PropTypes.func,
};

Header.defaultProps = {
  beers: [],
  onSearchSelection: () => {},
  onSearchChange: () => {},
};

export default Header;
