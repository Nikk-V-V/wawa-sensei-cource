import { OrbitControls, SpotLight, useHelper } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { useControls } from "leva";
import * as THREE from "three";

const Lights = () => {
  const ref = useRef();
  // useHelper(ref, THREE.PointLightHelper, 0.5, "red");
  useHelper(ref, THREE.SpotLightHelper, "red");

  // const { color, distance, decay, intensity } = useControls({
  //   color: "#ff0000",
  //   distance: 3,
  //   decay: 2,
  //   intensity: 0.5,
  // });

  const { distance, attenuation, angle, anglePower, color } = useControls({
    distance: 6,
    attenuation: 2.2,
    angle: 1,
    anglePower: 1,
    color: "#876ae5",
  });

  return (
    <>
      <SpotLight
        ref={ref}
        distance={distance}
        angle={angle}
        anglePower={anglePower}
        attenuation={attenuation}
        color={color}
      />
      {/* <pointLight
        ref={ref}
        position={[1, 1, 1]}
        intensity={intensity}
        distance={distance}
        color={color}
        decay={decay}
      /> */}
      {/* <hemisphereLight
        intensity={0.5}
        color={"deepskyblue"}
        groundColor={"sandybrown"}
      /> */}
    </>
  );
};

export default function Lesson6() {
  return (
    <>
      <Canvas camera={{ position: [0, 3, 3] }}>
        <OrbitControls />
        {/* <ambientLight intensity={0.2} /> */}
        {/* <directionalLight position={[3, 3, 3]} intensity={0.5} color={"red"} />
        <directionalLight
          position={[0, 3, -3]}
          intensity={0.5}
          color={"green"}
        />
        <directionalLight
          position={[-3, 3, -3]}
          intensity={0.5}
          color={"blue"}
        /> */}
        <Lights />
        <mesh rotation-y={Math.PI / 4}>
          <boxGeometry />
          <meshStandardMaterial color="white" roughness={1} metalness={0} />
        </mesh>

        <mesh rotation-x={-Math.PI / 2} position-y={-0.5}>
          <planeGeometry args={[5, 5]} />
          <meshPhysicalMaterial
            color="white"
            clearcoat={0.5}
            reflectivity={0.8}
          />
        </mesh>
      </Canvas>
    </>
  );
}
