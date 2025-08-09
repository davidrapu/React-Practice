export default function Footer({ items }) {
  const packed = items.filter((value) => value.packed === true);
  const percentagePacked =
    items.length != 0 ? Math.floor((packed.length / items.length) * 100) : 0;
  return (
    <div className="stats">
      <h3>
        💼 You have {items.length} items on your list, and you already packed{" "}
        {packed.length} ({percentagePacked}%)
      </h3>
    </div>
  );
}
