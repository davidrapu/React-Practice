import { useState } from "react";
import AddingForm from "./components/AddingForm";
import Display from "./components/Display";

function App() {
  const [items, setItems] = useState([]);
  const packed = items.filter((value) => value.packed === true);
  const percentagePacked =
    items.length != 0 ? Math.floor((packed.length / items.length) * 100) : 0;
  return (
    <div className="app">
      <header>
        <h1>🏝️FAR AWAY💼</h1>
      </header>
      <AddingForm items={items} setItems={setItems} />
      <Display items={items} setItems={setItems} />
      <div className="stats">
        <h3>
          💼 You have {items.length} items on your list, and you already packed{" "}
          {packed.length} ({percentagePacked}%)
        </h3>
      </div>
    </div>
  );
}

export default App;
