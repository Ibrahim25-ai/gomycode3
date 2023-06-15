import logo from "./logo.svg";
import "./App.css";
import { moviesData } from "./data";
import { useState } from "react";
import MovieList from "./Components/MovieList";
import AddNewMovie from "./Components/AddNewMovie";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DesCard from "./Components/DesCard";
function App() {
  const [list, setList] = useState(moviesData);
  // console.log(list);
  const [rating, setRating] = useState(1);
  const [search, setSearch] = useState("");
  const handleRating = (x) => setRating(x);
  const handleSearch = (y) => setSearch(y);
  console.log(search);
  const handleDelete = (movieId) =>
    setList(list.filter((el) => el.id !== movieId));
  const handleAdd = (newMovie) => setList([...list, newMovie]);
  const handleEdit = (editedMovie) =>
    setList(list.map((el) => (el.id === editedMovie.id ? editedMovie : el)));
  return (
    <div className="App">
      <AddNewMovie handleAdd={handleAdd} />
      <BrowserRouter>
      <NavBar
                rating={rating}
                search={search}
                handleRating={handleRating}
                handleSearch={handleSearch}
              />
        <Routes>
          <Route
            path="/"
            element={
              <MovieList
                data={list.filter(
                  (el) =>
                    el.name
                      .toLocaleLowerCase()
                      .includes(search.toLocaleLowerCase()) &&
                    el.rating >= rating
                )}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            }
          />
          <Route path="/DesCard" element={<DesCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
