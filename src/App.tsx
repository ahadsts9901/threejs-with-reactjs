import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import CanvasComponent from "./components/CanvasComponent";
import { KnifeModel } from "./components/models/Knife";
import { Track } from "./components/models/Track";
import { BuildingModel } from "./components/models/BuildingModel";
import { OceanModel } from "./components/models/Ocean";
import Header from "./Header";

function App() {
  return (
    <>
      <Header />
      <div id="canvas-container" style={{ width: "100vw", height: "90vh" }}>
        <CanvasComponent>
          <Routes>
            <Route path="/knife" element={<KnifeModel />} />
            <Route path="/track" element={<Track />} />
            <Route path="/building" element={<BuildingModel />} />
            <Route path="/ocean" element={<OceanModel />} />
            <Route path="*" element={<Navigate to="/knife" replace={true} />} />
          </Routes>
        </CanvasComponent>
      </div>
    </>
  );
}

export default App;