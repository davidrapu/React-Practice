import { useState } from "react";

function App() {
  return (
    <div className="app">
      <Header />
      <AddingForm />
      <Display />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>🏝️FAR AWAY💼</h1>
    </header>
  );
}
function AddingForm() {
  const [itemText, setItemText] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleFormSubmit(e) {
    e.preventDefault();
  }
  return (
    <form className="add-form" onSubmit={handleFormSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => {
          setQuantity(Number(e.target.value));
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={itemText}
        placeholder="Item..."
        onChange={(e) => {
          setItemText(e.target.value);
        }}
      />
      <button>ADD</button>
    </form>
  );
}
function Display() {
  const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: true },
  ];
  return (
    <div className="list">
      <ul>
        {initialItems.map((itemObj) => {
          return (
            <ItemCreation
              key={itemObj.id}
              task={itemObj.description}
              amount={itemObj.quantity}
              packed={itemObj.packed}
            />
          );
        })}
      </ul>
      <div className="actions">
        <select>
          <option value="">SORT BY INPUT ORDER</option>
          <option value="">SORT BY DESCRIPTION</option>
          <option value="">SORT BY PACKED STATUS</option>
        </select>
        <button>CLEAR LIST</button>
      </div>
    </div>
  );
}

function ItemCreation({ task, amount, packed }) {
  const spanStyle = {
    textDecoration: `${packed ? "line-through" : "none"}`,
  };
  return (
    <li>
      <input type="checkbox" />
      <span style={spanStyle}>
        {amount} {task}
      </span>
      <button>{"\u274C"}</button>
    </li>
  );
}
function Footer() {
  return (
    <div className="stats">
      <h3>💼 You have 4 items on your list, and you already packed 2 (50%)</h3>
    </div>
  );
}

export default App;
