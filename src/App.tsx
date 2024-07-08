import "./App.css";
import CanvasComponent from "./components/CanvasComponent";
import { BuildingModel } from "./components/models/BuildingModel";

function App() {
  return (
    <div id="canvas-container" style={{ width: "100vw", height: "100vh" }}>
      <CanvasComponent>
        <BuildingModel />
      </CanvasComponent>
    </div>
  );
}

export default App;