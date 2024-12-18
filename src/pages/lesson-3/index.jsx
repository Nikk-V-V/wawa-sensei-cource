import { Canvas } from "@react-three/fiber";

export default function Lesson3() {
  return (
    <Canvas
      camera={{
        position: [0, 3, 8],
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 3, 5]} intensity={0.5} />
      <group position={[-2, -2, 0]} scale={2} rotation-y={[Math.PI / 4]}>
        <mesh position-x={-1}>
          <boxGeometry />
          <meshStandardMaterial color="red" />
        </mesh>
        <mesh>
          <boxGeometry />
          <meshStandardMaterial color="green" />
        </mesh>
        <mesh position-x={1}>
          <boxGeometry />
          <meshStandardMaterial color="blue" />
        </mesh>
      </group>
    </Canvas>
  );
}
