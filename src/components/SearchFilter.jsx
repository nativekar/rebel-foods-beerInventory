import React from "react";
import PropTypes from "prop-types";
import { Dropdown } from "semantic-ui-react";

const SearchFilter = ({ options }) => {
  return (
    <div>
      <Dropdown
        style={{ minWidth: 500 }}
        placeholder="Search for Beers"
        search
        selection
        selectOnBlur={false}
        options={options}
      />
    </div>
  );
};

SearchFilter.propTypes = {
  options: PropTypes.array,
};

SearchFilter.defaultProps = {
  options: [],
};

export default SearchFilter;
