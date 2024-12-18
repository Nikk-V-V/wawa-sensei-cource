import { useRef } from "react";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ThemeProvider } from "../../hooks/useTheme";
import { button, useControls } from "leva";

const Cube = (props) => {
  const camera = useThree((state) => state.camera);

  const updateFov = (fov) => {
    camera.fov = fov;
    camera.updateProjectionMatrix();
  };

  useControls("FOV", {
    smallFov: button(() => updateFov(20)),
    normalFov: button(() => updateFov(42)),
    bigFov: button(() => updateFov(60)),
    hugeFov: button(() => updateFov(110)),
  });

  const ref = useRef();

  const { speed } = useControls("SPEED", {
    speed: {
      value: 0,
      min: -12,
      max: 12,
    },
  });

  useFrame((_state, delta) => {
    ref.current.rotation.y += speed * delta;
  });

  return (
    <mesh {...props} ref={ref}>
      <boxGeometry />
      <meshStandardMaterial color={"white"} />
    </mesh>
  );
};

export default function Lesson8() {
  return (
    <>
      <ThemeProvider>
        <Canvas camera={{ position: [0, 2, 6], fov: 42 }}>
          <Cube rotation-y={Math.PI / 4} />
          <OrbitControls />
          <ContactShadows
            position-y={-2}
            opacity={0.5}
            blur={2}
            color={"pink"}
            scale={10}
          />
          <Environment preset="city" />
        </Canvas>
      </ThemeProvider>
    </>
  );
}
