import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Gallery from "./Gallery";
import SelectedBeast from "./assets/SelectedBeast";
import data from "./assets/data.json";
import { useState } from "react";

function App() {
  const [showSelectedBeast, setShowSelectedBeast] = useState(false);
  const [shownBeast, setShownBeast] = useState({});
  const [filter, setFilter] = useState({});
  /*const imageData = [
    { horns: "all", url: "image_url" },
    { horns: "one horn", url: "image_url" },
    { horns: "two horns", url: "image_url" },
  ];

  const [form, setForm] = useState({
    value: "one horn",
    value: "two horns",
  });

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };*/
  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleShowSelectedBeast(beast) {
    setShowSelectedBeast(!setShowSelectedBeast);
    setShownBeast();
  }
  function handleChange(event) {
    setFilter(event.target.value);
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  return (
    <div className="App">
      <Header title="Horned Beasts" />
      <h1>Horn Form</h1>
      <form onSubmit={handleSubmit}>
        <select value={filter} onChange={handleChange}>
          <option value="click">Please select</option>
          <option value="one horn">one horn</option>
          <option value="two horns">two horns</option>
          <option value="all horns">all horns</option>
        </select>
        <button>Submit</button>
      </form>
      <Gallery data={data} />
      <Footer author="Susie Harrison" />
      <button onClick={handleShowSelectedBeast}>
        Show/Hide Selected Beast
      </button>
      {showSelectedBeast && (
        <SelectedBeast handleShowSelectedBeast={handleShowSelectedBeast} />
      )}
    </div>
  );
}

export default App;
