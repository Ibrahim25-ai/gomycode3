import React from "react";

const StarRating = ({ rating, handleRating }) => {
  const stars = (rating) => {
    var tab = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        tab.push(
          <span
            onClick={() => handleRating(i)}
            style={{ color: "gold", fontSize: "30px", cursor: "pointer" }}
          >
            ★
          </span>
        );
      } else {
        tab.push(
          <span
            onClick={() => handleRating(i)}
            style={{ color: "black", fontSize: "30px", cursor: "pointer" }}
          >
            ★
          </span>
        );

        // console.log(tab)
      }
    }
    return tab;
  };
  return <div>{React.Children.toArray(stars(rating))}</div>;
};
StarRating.defaultProps = {
  handleRating: () => {},
};

export default StarRating;
