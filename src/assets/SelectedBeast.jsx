export default function SelectedBeast({ handleShowSelectedBeast }) {
  return (
    <div className="selectedBeast">
      <h2>Selected Beast</h2>
      <button onClick={handleShowSelectedBeast}>Close</button>
    </div>
  );
}
