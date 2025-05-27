import { useState } from "react";
import movies from "./assets/data/movies";

function App() {
  return (
    <>
      <div className="container">
        <h1>React Movie Filter</h1>
        <h2>Lista dei film da scegliere</h2>
        {movies.map((movie, index) => (
          <ul className="point-ulist">
            <li key={index}>
              {movie.title} {movie.genre}
            </li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default App;
