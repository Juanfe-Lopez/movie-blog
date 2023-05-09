import React, { useState, useEffect } from "react";
import Funciones, { getDataId } from "../functions/functions";
import "./BlogPost.css";
import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    console.log(id);
    const fetchMovie = async () => {
      const data = await getDataId(id);
      setMovie(data);
    };
    fetchMovie();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }
  return (
    <div className="content">
      <div className="details">
        <div className="details-img">
          <img src={movie.image} />
        </div>
        <div>
          <div className="details-info">
            <ul>
              <li>
                <h1> {movie.title}</h1>
              </li>
              <li>{movie.description}</li>
              <li>
                Rating: <strong> {movie.rating}</strong>
              </li>
              <li>Año: {movie.year}</li>
              <li>Director: {movie.director}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
