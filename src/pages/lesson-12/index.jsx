import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Experience from "./components/Experience";

export default function Lesson12() {
  return (
    <>
      <Canvas camera={{ position: [0, 1, 8], fov: 42 }}>
        <OrbitControls />
        <Experience />
        <Environment preset="sunset" />
      </Canvas>
    </>
  );
}
