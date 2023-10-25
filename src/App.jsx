import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Gallery from "./Gallery";
import SelectedBeast from "./assets/SelectedBeast";
import data from "./assets/data.json";
import { useState } from "react";

function App() {
  const [showSelectedBeast, setShowSelectedBeast] = useState(false);

  function handleShowSelectedBeast() {
    setShowSelectedBeast(!setShowSelectedBeast);
  }

  return (
    <div className="App">
      <Header title="Horned Beasts" />
      <button onClick={handleShowSelectedBeast}>
        Show/Hide Selected Beast
      </button>
      {showSelectedBeast && (
        <SelectedBeast handleShowSelectedBeast={handleShowSelectedBeast} />
      )}
      <Gallery data={data} />
      <Footer author="Susie Harrison" />
    </div>
  );
}

export default App;
