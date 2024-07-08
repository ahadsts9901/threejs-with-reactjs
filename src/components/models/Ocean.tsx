import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export const OceanModel = () => {

  const group: any = useRef();
  const { scene, animations } = useGLTF("./free_ocean_wave_animation/scene.gltf");
  const { actions } = useAnimations(animations, group);

  // Start the animation on mount
  useEffect(() => {
    if (actions) {
      // Play all animations
      Object.values(actions).forEach((action: any) => {
        action.play();
      });
    }
  }, [actions]);

  useEffect(() => {
    if (actions) {
      // Play all animations
      Object.values(actions).forEach((action: any) => {
        action.play();
      });
    }
  }, [])

  return (
    <group ref={group}>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive object={scene} scale={0.5} position={[0, -3.25, -1.5]} />
    </group>
  );
};

// Don't forget to preload your model to avoid loading issues
useGLTF.preload("./free_ocean_wave_animation/scene.gltf");