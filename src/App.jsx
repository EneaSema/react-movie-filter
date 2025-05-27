import { useState, useEffect } from "react";
import movies from "./assets/data/movies";

function App() {
  const [moviesList, setMovieList] = useState(movies);

  useEffect(() => {
    console.log("Select cambiata");
  }, []);

  return (
    <>
      <div className="container">
        <h1>React Movie Filter</h1>
        <h2>Lista dei film da scegliere</h2>
        <h3>Nome film ed il genere:</h3>
        {moviesList.map((movie, index) => (
          <ul className="point-ulist">
            <li key={index}>{`${movie.title} = ${movie.genre}`}</li>
          </ul>
        ))}
        <hr />

        <h3>Scegli il genere che di film che vorresti vedere?</h3>

        <select
          className="select-box"
          value={moviesList}
          onChange={(e) => {
            setMovieList(e.target.value);
          }}
        >
          {moviesList.map((movie, index) => (
            <option key={index} value={movie.genre}>
              {movie.genre}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default App;
