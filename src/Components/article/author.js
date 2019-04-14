import React from "react";
import PropTypes from "prop-types";

function Author(props) {
  const { authorName } = props;
  return (
    <div>
      <img
        className="mainBody__authorAvatar"
        alt=""
        src="http://localhost:3001/slices/author.jpg"
      />
      <p className="mainBody__authorName">by {authorName}</p>
    </div>
  );
}
Author.propTypes = {
  authorName: PropTypes.string
};
Author.defaultProps = {
  authorName: "Creed Battron"
};

export default Author;
