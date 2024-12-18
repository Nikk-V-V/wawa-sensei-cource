import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  OrthographicCamera,
} from "@react-three/drei";
import { City } from "./componets/City";

export default function Lesson4() {
  return (
    <Canvas>
      <OrthographicCamera
        position={[1, 1, 1]}
        top={2}
        bottom={-2}
        right={2}
        left={-2}
        makeDefault
      />
      <OrbitControls />
      <City />
      <Environment preset="city" />
    </Canvas>
  );
}
