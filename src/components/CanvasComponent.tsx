
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, Stage } from "@react-three/drei";
import CanvasLoader from "./CanvasLoader";

const BuildingCanvas = ({ children }: { children: React.ReactNode }) => {
    return (
        <Canvas
            frameloop="demand"
            shadows
            dpr={[1, 2]}
            camera={{ position: [0.2, 0.1, 0.3], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={true}
                    maxPolarAngle={Math.PI}
                    minPolarAngle={Math.PI / 20}
                    dampingFactor={0.3}
                />
                <Stage>
                    {children}
                </Stage>
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default BuildingCanvas;
