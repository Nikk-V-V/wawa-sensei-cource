import { Canvas, extend } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { WaterMaterial } from "./components/WaterMaterial";

extend({ WaterMaterial });

export default function Shader4() {
  return (
    <>
      <Canvas
        camera={{
          position: [4, 4.5, 24],
          fov: 60,
        }}
      >
        <fog attach="fog" args={["#53ac58", 50, 100]} />
        <color attach="background" args={["#53ac58"]} />
        <Experience />
      </Canvas>
    </>
  );
}
