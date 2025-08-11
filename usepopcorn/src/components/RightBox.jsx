import Box from "./Box";
import { useState } from "react";

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

export default function RightBox(){
    const [watchedMovies, setWatchedMovies] = useState(tempWatchedData);
    const [isOpen, setIsOpen] = useState(true);
    
    return (
      <Box isOpen={isOpen} setIsOpen={setIsOpen}>
        {isOpen &&
            <>
                <Summary watchedMovies={watchedMovies} />
                <ul className="list">
                {watchedMovies?.map(m => (
                    <WatchedMovieCard key={m.imdbID} movie={m} />
                ))}
                </ul>
            </>
        }
      </Box>
    );
}
function Summary({watchedMovies}) {
    const avgImdbRating = average(
        watchedMovies.map((movie) => movie.imdbRating)
    );
    const avgUserRating = average(
        watchedMovies.map((movie) => movie.userRating)
    );
    const avgRuntime = average(watchedMovies.map((movie) => movie.runtime));

    //
    function average(arr) {
        return arr.reduce((acc, num) => num + acc, 0) / arr.length;
    }
    return (
    <div className="summary">
        <h2>Movies you watched</h2>
        <div>
        <p>
            <span>#️⃣</span>
            <span>{watchedMovies.length} movies</span>
        </p>
        <p>
            <span>⭐️</span>
            <span>{avgImdbRating}</span>
        </p>
        <p>
            <span>🌟</span>
            <span>{avgUserRating}</span>
        </p>
        <p>
            <span>⏳</span>
            <span>{avgRuntime} min</span>
        </p>
        </div>
    </div>
    );
}
function WatchedMovieCard({movie}){
    return (
      <li>
        <img src={movie.Poster} alt={`${movie.Title} poster`} />
        <h3>{movie.Title}</h3>
        <div>
          <p>
            <span>⭐️</span>
            <span>{movie.imdbRating}</span>
          </p>
          <p>
            <span>🌟</span>
            <span>{movie.userRating}</span>
          </p>
          <p>
            <span>⏳</span>
            <span>{movie.runtime} min</span>
          </p>
        </div>
      </li>
    );
}