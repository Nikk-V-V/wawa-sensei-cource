import { Canvas } from "@react-three/fiber";

export default function Lesson1() {
  return (
    <>
      <Canvas
        camera={{
          position: [3, 3, 3],
          fov: 75,
        }}
      >
        <mesh>
          <boxGeometry />
          <meshNormalMaterial />
        </mesh>
      </Canvas>
    </>
  );
}
