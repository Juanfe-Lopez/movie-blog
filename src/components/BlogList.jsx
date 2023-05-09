import React, { useState, useEffect } from "react";
import Funciones, { getData } from "../functions/functions";
import "./BlogList.css";
import { addToFirebase } from "../functions/firebaseHelper";

function BlogList() {
  const [movies, setMovies] = useState([]);

  const addFavorite = async (e) => {
    console.log(e);
    addToFirebase({ objectToSave: {e} } , "Favs");
    alert("Pelicula añadida con exito");
  };
  const addWatchlater = async (e) => {
    console.log(e);
    addToFirebase({ objectToSave: {e} } , "MustWatch");
    alert("Pelicula añadida con exito a WatchLater");
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getData();
      setMovies(data);
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Movie List</h1>
      <ul className="products">
        {movies.map((movie) => (
          <li key={movie.id}>
            <div className="product">
              <img src={movie.image} />

              <a className="product-name" href={`/BlogPost/${movie.id}`}>
                {movie.title}
              </a>

              <div className="product-price">{movie.rating}</div>
              <div>
                <button onClick={() => addFavorite(movie)}>Add fav</button>
                <button onClick={() => addWatchlater(movie)}>Watch Later</button>

              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
