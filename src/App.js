import ColorCard from "./component/ColorCard";
function App() {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ColorCard color="black" />
      <ColorCard color="#1E82CD" />
      <ColorCard color="#FFAAFF" />
    </div>
  );
}

export default App;
