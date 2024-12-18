import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Experience from "./components/Experience";

export default function Lesson11() {
  return (
    <>
      <Canvas camera={{ position: [0, 1, 8], fov: 42 }}>
        <OrbitControls />
        <Experience />
      </Canvas>
    </>
  );
}
