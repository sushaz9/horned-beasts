import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Gallery from "./Gallery";

function App() {
  return (
    <div className="App">
      <Header title="Horned Beasts" />
      <Gallery />
      <Footer author="Susie Harrison" />
    </div>
  );
}

export default App;
