import { Canvas } from "@react-three/fiber";
import { Grid, Stats, useHelper } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { useControls, Leva } from "leva";

const Box = () => {
  const ref = useRef();
  useHelper(ref, THREE.BoxHelper, "red");

  const { position, color, opacity, transparent } = useControls({
    position: {
      x: 0,
      y: 0,
      z: 0,
    },
    color: "#ff0000",
    opacity: {
      value: 0.5,
      min: 0,
      max: 1,
      step: 0.01,
    },
    transparent: true,
  });

  return (
    <mesh ref={ref} position={[position.x, position.y, position.z]}>
      <boxGeometry />
      <meshBasicMaterial
        color={color}
        transparent={transparent}
        opacity={opacity}
      />
    </mesh>
  );
};

export default function Lesson5() {
  return (
    <>
      <Leva hidden />
      <Stats/>
      <Canvas camera={{ position: [3, 3, 3] }}>
        <axesHelper />
        <Grid
          sectionSize={3}
          sectionColor={"purple"}
          sectionThickness={1}
          cellSize={1}
          cellColor={"#6f6f6f"}
          cellThickness={0.6}
          infiniteGrid
          fadeDistance={50}
          fadeStrength={5}
        />
        {/* <gridHelper args={[10, 10, "green", "blue"]} /> */}
        <Box />
      </Canvas>
    </>
  );
}