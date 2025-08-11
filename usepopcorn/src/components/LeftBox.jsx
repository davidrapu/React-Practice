import Button from "./Button"

export default function LeftBox({movies}){
    return (
        <div className="box">
            <Button className="btn-toggle">-</Button>
            <ul className="list">
                {movies?.map((v) => (
                    <MovieListCard key={v.imdbID} movie={v} />
                ))}
            </ul>
        </div>
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