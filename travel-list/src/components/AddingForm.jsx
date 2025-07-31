import { useState } from "react";
export default function AddingForm({ items, setItems }) {
  const [itemFormInput, setItemFormInput] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleFormSubmit(e) {
    e.preventDefault();
    if (itemFormInput === "") return;
    const item = {
      id: Date.now(),
      description: itemFormInput,
      quantity: quantity,
      packed: false,
    };
    setItems(() => [...items, item]);
    setItemFormInput("");
    setQuantity(1);
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
        value={itemFormInput}
        placeholder="Item..."
        onChange={(e) => {
          setItemFormInput(e.target.value);
        }}
      />
      <button type="submit">ADD</button>
    </form>
  );
}
