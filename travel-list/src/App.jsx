import { useState } from "react";
import AddingForm from "./components/AddingForm";
import Display from "./components/Display";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [items, setItems] = useState([]);
  return (
    <div className="app">
      <Header />
      <AddingForm items={items} setItems={setItems} />
      <Display items={items} setItems={setItems} />
      <Footer items={items} />
    </div>
  );
}
export default App;
