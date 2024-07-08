import "./App.css";
import CanvasComponent from "./components/CanvasComponent";
import Overlay from "./Overlay";
import { BuildingModel } from "./components/BuildingModel";

function App() {
  return (
    <div id="canvas-container" style={{ width: "100vw", height: "90vh" }}>
      <CanvasComponent>
        <BuildingModel />
      </CanvasComponent>
      <Overlay />
    </div>
  );
}

export default App;