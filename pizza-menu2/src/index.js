import React from "react";
import ReactDOM from "react-dom/client";
import { pizzaData } from "./data";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
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
  closingTime.setHours(18, 0, 0, 0);

  const now = Date.now();

  const isOpen = now >= openingTime.getTime() && now <= closingTime.getTime();

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. We are currently{" "}
      {isOpen ? "open" : "closed"}.
    </footer>
  );
}
function Menu() {
  return (
    <div className="menu">
      <h2>Menu</h2>
      {pizzaData.map((value, index) => (
        <div className="Pizzas">
          <Pizza key={index} obj={value} />
        </div>
      ))}
    </div>
  );
}
function Pizza(props) {
  console.log(props)
  return (
    <div className="pizza">
      <img src={props.obj.photoName} alt={props.obj.name} />
      <div>
        <h3>{props.obj.name}</h3>
        <p>{props.obj.ingredients}</p>
        <span>${props.obj.price.toFixed(2)}</span>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
