import "./App.css";
import CanvasComponent from "./components/CanvasComponent";
import { BuildingModel } from "./components/models/BuildingModel";
import { KnifeModel } from "./components/models/Knife";
import { OceanModel } from "./components/models/Ocean";
import { Track } from "./components/models/Track";

function App() {
  return (
    <div id="canvas-container" style={{ width: "100vw", height: "100vh" }}>
      <CanvasComponent>
        {/* <BuildingModel /> */}
        {/* <KnifeModel /> */}
        {/* <OceanModel /> */}
        <Track />
      </CanvasComponent>
    </div>
  );
}

export default App;