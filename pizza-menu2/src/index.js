import React from "react";
import ReactDOM from "react-dom/client";
import { pizzaData } from "./data";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Button />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <h1>Welcome to OB1's Pizza Spot</h1>
    </header>
  );
}
function Footer() {
  const openingTime = new Date();
  openingTime.setHours(9, 0, 0, 0);

  const closingTime = new Date();
  closingTime.setHours(21, 0, 0, 0);

  const now = Date.now();

  const isOpen = now >= openingTime.getTime() && now <= closingTime.getTime();

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString("en-US")}. We are currently{" "}
      {isOpen ? "open" : "closed"}.
    </footer>
  );
}
function Menu() {
  return (
    <div className="menu">
      <h2>Menu</h2>

      {pizzaData.length > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((value, index) => (
              <Pizza key={index} obj={value} />
            ))}
          </ul>
        </>
      ) : (
        <h3>No Pizza's availble</h3>
      )}
    </div>
  );
}
function Pizza({ obj }) {
  return (
    <li className={`pizza ${obj.soldOut ? "sold-out" : ""}`}>
      <img src={obj.photoName} alt={obj.name} />
      <div>
        <h3>{obj.name}</h3>
        <p>{obj.ingredients}</p>
        <span>${ obj.soldOut ? "SOLD OUT" : obj.price.toFixed(2)}</span>
      </div>
    </li>
  );
}
function Button() {
  return <button className="btn">Order Now</button>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
