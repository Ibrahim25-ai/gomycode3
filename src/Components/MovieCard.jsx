import React from "react";
import StarRating from "./StarRating";
import EditMovie from "./Edit";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie, handleDelete,handleEdit }) => {
  const navigate = useNavigate();
  const handleClick1 = (description,trailer) => {
  
    navigate("/DesCard", { state: { desc: description,trail : trailer } });
  };
  return (
    <div className="movie-card" onClick={() => handleClick1(movie.description,movie.trailer)}>
      <h3>{movie.name}</h3>
      <img src={movie.image} alt={movie.name} />
      <StarRating rating={movie.rating} />
      <p>{movie.date}</p>
      <button className="btn" onClick={() => handleDelete(movie.id)}>
        Delete
      </button>
      <EditMovie film={movie}  handleEdit={handleEdit}/>
     
    </div>
  );
};

export default MovieCard;
