import React, { useState } from 'react'
import MovieList from './components/MovieList/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './components/Filter/Filter';
import AddMovie from './components/AddMovie/AddMovie';
import {moviedata} from "./data"
import NavBar from './components/Nav/NavBar';

const App = () => {
  const [movies, setMovies] = useState(moviedata)

  const handleAdd = (newMovie) => {
      setMovies([...movies,newMovie])
  }
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };
  
  const handleChange =(e) =>
  {
    setTitle(e.target.value)

  }
  
  return (
    <div>
      <NavBar/>
      <Filter handleChange={handleChange} title={title} ratingChanged={ratingChanged}/>
      <MovieList movies={movies.filter(el=>el.title.toUpperCase().includes(title.toUpperCase().trim()) && el.rate > rating)} />
      <AddMovie handleAdd={handleAdd}/>
    </div>
  )
}

export default App
