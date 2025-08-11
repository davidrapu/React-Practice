export default function NavigationBar() {
    return (
      <div className="nav-bar">
        <div className="logo">
            <span role="img">🍿</span>
            <h1>usePopcorn</h1>
        </div>
        <input className="search" placeholder="Search movies..." type="text" />
        <p className="num-results">Found X results</p>
      </div>
    );
}