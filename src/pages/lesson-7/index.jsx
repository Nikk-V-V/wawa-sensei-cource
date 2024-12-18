import { useMemo, useRef, useState, useEffect, memo, useCallback } from "react";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { button, useControls } from "leva";
import { ThemeProvider, useTheme } from "../../hooks/useTheme";

const UI = () => {
  const { setColor } = useTheme();

  useControls({
    changeColorToRed: button(() => setColor("red")),
    changeColorToGreen: button(() => setColor("green")),
    changeColorToBlue: button(() => setColor("blue")),
  });
};

const Cube = memo(function Cube(props) {
  console.log("Cube rendered");
  const ref = useRef();

  const { color } = useTheme();

  const material = useMemo(
    () => <meshStandardMaterial color={color} />,
    [color]
  );

  useEffect(() => {
    const colorPositions = {
      white: [0, 0, 0],
      red: [0.5, 0, 0],
      green: [0, 0.5, 0],
      blue: [0, 0, 0.5],
    };
    ref.current.position.set(...colorPositions[color]);

    const interval = setInterval(() => {
      ref.current.rotation.y += Math.PI / 4;
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [color]);

  return (
    <mesh ref={ref} {...props}>
      <boxGeometry />
      {material}
    </mesh>
  );
});

export default function Lesson7() {
  const [_count, setCount] = useState(0);

  const onCubeClicked = useCallback(() => {
    console.log("clicked");
    setCount((count) => count + 1);
  }, []);

  return (
    <>
      <ThemeProvider>
        <UI />
        <Canvas camera={{ position: [0, 2, 6], fov: 42 }}>
          <OrbitControls />
          <Cube rotation-y={Math.PI / 4} onClick={onCubeClicked} />
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
