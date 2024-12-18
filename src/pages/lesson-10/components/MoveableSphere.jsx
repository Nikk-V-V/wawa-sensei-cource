import { useState, useRef } from "react";
import { useCursor, useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Controls } from "..";

const MovmentSpeed = 0.05;

export default function MoveableSphere(props) {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);
  const [selected, setSelected] = useState(false);

  const forwardPressed = useKeyboardControls(
    (state) => state[Controls.forward]
  );
  const backPressed = useKeyboardControls((state) => state[Controls.back]);
  const leftPressed = useKeyboardControls((state) => state[Controls.left]);
  const rightPressed = useKeyboardControls((state) => state[Controls.right]);

  let color = hovered ? "pink" : "white";

  if (selected) {
    color = "hotpink";
  }

  useFrame(() => {
    if (!selected) {
      return;
    }

    if (forwardPressed) {
      ref.current.position.y += MovmentSpeed;
    }
    if (backPressed) {
      ref.current.position.y -= MovmentSpeed;
    }
    if (leftPressed) {
      ref.current.position.x -= MovmentSpeed;
    }
    if (rightPressed) {
      ref.current.position.x += MovmentSpeed;
    }
  });

  return (
    <mesh
      ref={ref}
      {...props}
      onPointerEnter={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerLeave={(e) => {
        e.stopPropagation();
        setHovered(false);
      }}
      onClick={(e) => {
        e.stopPropagation();
        setSelected(!selected);
      }}
      onPointerMissed={() => setSelected(false)}
    >
      <sphereGeometry args={[0.5, 64, 64]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
