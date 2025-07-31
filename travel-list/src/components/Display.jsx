import ItemCreation from "./ItemCreation";
export default function Display({ items, setItems }) {
  function handleClearButton() {
    setItems([]);
  }
  function handleSortingChoice(e) {
    const itemsCopy = [...items];
    switch (e.target.value) {
      case "input":
        itemsCopy.sort((itemA, itemB) => itemA.id - itemB.id);
        setItems(itemsCopy);
        break;
      case "description":
        itemsCopy.sort((itemA, itemB) =>
          itemA.description.localeCompare(itemB.description)
        );
        setItems(itemsCopy);
        break;
      case "packed":
        itemsCopy.sort(
          (itemA, itemB) => Number(itemA.packed) - Number(itemB.packed)
        );
        setItems(itemsCopy);
        break;
    }
  }
  return (
    <div className="list">
      <ul>
        {items.map((itemObj) => {
          return (
            <ItemCreation
              key={itemObj.id}
              id={itemObj.id}
              task={itemObj.description}
              amount={itemObj.quantity}
              packed={itemObj.packed}
              setItems={setItems}
            />
          );
        })}
      </ul>
      <div className="actions">
        <select onChange={handleSortingChoice}>
          <option value="input">SORT BY INPUT ORDER</option>
          <option value="description">SORT BY DESCRIPTION</option>
          <option value="packed">SORT BY PACKED STATUS</option>
        </select>
        <button onClick={handleClearButton}>CLEAR LIST</button>
      </div>
    </div>
  );
}
