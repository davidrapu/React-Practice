import { useState } from "react";
import Box from "./Box";

export default function LeftBox({movies}){
    const [isOpen, setIsOpen] = useState(true);
    return (
        <Box isOpen={isOpen} setIsOpen={setIsOpen}>
            {isOpen &&
                <>
                    <ul className="list">
                        {movies?.map((v) => (
                            <MovieListCard key={v.imdbID} movie={v} />
                        ))}
                    </ul>
                </>
            }
        </Box>
    )
}

function MovieListCard({movie}){
    return (
        <li>
            <img src={movie.Poster} alt={`${movie.Title} poster`} />
            <h3>{movie.Title}</h3>
            <div>
                <p>
                    <span>🗓️</span>
                    <span>{movie.Year}</span>
                </p>
            </div>
        </li>
    )
}