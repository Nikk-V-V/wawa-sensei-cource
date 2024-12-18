import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

export default function Lesson2() {
  return (
    <Canvas
      camera={{
        position: [3, 3, 3],
      }}
    >
      <mesh position-x={-0.6}>
        <boxGeometry />
        <meshStandardMaterial color="hotpink" side={THREE.FrontSide} />
      </mesh>
      <mesh position-x={0.6} position-z={-1}>
        <boxGeometry />
        <meshStandardMaterial color="hotpink" side={THREE.DoubleSide} />
      </mesh>
      {/* <mesh> */}
      {/* <planeGeometry args={[5, 5]} /> */}
      {/* <sphereGeometry args={[1, 32, 32]} /> */}
      {/* <boxGeometry args={[1, 1, 1]} /> */}
      {/* <torusKnotGeometry args={[1, 0.3, 200, 32]} /> */}
      {/* <meshToonMaterial color={"green"} /> */}
      {/* </mesh> */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 3]} intensity={1} />
      <directionalLight position={[0, 5, 3]} intensity={0.5} />
    </Canvas>
  );
}
