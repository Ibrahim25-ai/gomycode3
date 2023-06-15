import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ data, handleDelete, handleEdit }) => {
  //   console.log(data);
  return (
    <div className="movie-list">
      {React.Children.toArray(
        data.map((el) => (
          <MovieCard
            movie={el}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))
      )}
    </div>
  );
};

export default MovieList;
