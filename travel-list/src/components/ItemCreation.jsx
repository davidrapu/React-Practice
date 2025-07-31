export default function ItemCreation({ id, task, amount, packed, setItems }) {
  const spanStyle = {
    textDecoration: `${packed ? "line-through" : "none"}`,
  };
  function handleDeleteButton() {
    setItems((items) => {
      const newItems = items.filter((value) => value.id != id);
      return newItems;
    });
  }
  function handleCheckBox() {
    setItems((items) => {
      const newItems = items.map((value) =>
        value.id === id ? { ...value, packed: !value.packed } : value
      );
      return newItems;
    });
  }
  return (
    <li>
      <input type="checkbox" onChange={handleCheckBox} />
      <span style={spanStyle}>
        {amount} {task}
      </span>
      <button onClick={handleDeleteButton}>{"\u274C"}</button>
    </li>
  );
}
