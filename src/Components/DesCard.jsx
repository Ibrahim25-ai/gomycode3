import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const DesCard = () => {
  const navigate = useNavigate();
  const handleClick1 = () => {
  
    navigate("/");
  };
  const location = useLocation();
  const { desc,trail} = location.state;
  return (
    <div className="movie-card">
      <h3>{desc}</h3>
      <button className="btn" onClick={() => handleClick1()}>Back</button>
      <a href={trail} >Watch Trailer</a>
    </div>
  );
};

export default DesCard;
