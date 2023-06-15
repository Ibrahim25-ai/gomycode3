import React from "react";
import StarRating from "./StarRating";

const NavBar = ({ rating, search, handleRating, handleSearch }) => {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="movie Name"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <StarRating rating={rating} handleRating={handleRating} />
      </form>
    </div>
  );
};

export default NavBar;
