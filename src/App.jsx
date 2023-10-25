import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Modal from "./assets/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  function handleShowModal() {
    setShowModal(!showModal);
  }

  return (
    <div className="App">
      <Header title="Horned Beasts" />
      <Gallery /> {""}
      <buton onClick={handleShowModal}>Show/Hide Modal</buton>
      {showModal && <Modal handleShowModal={handleShowModal} />}
      <Footer author="Susie Harrison" />
    </div>
  );
}

export default App;
