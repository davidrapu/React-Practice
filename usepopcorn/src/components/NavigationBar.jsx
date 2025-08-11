export default function NavigationBar({movies}) {
    return (
      <div className="nav-bar">
        <div className="logo">
            <span role="img">🍿</span>
            <h1>usePopcorn</h1>
        </div>
        <input className="search" placeholder="Search movies..." type="text" />
        <p className="num-results">Found {movies.length} results</p>
      </div>
    );
}