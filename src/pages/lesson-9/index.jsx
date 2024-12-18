import {
  Environment,
  // PivotControls,
  // PresentationControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ThemeProvider } from "../../hooks/useTheme";
import { Lighthouse } from "./components/Lighthouse";
import MoveableItem from "./components/MoveableItem";

export default function Lesson9() {
  return (
    <>
      <ThemeProvider>
        <Canvas camera={{ position: [0, 2, 6], fov: 42 }}>
          {/* <OrbitControls
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minAzimuthAngle={-Math.PI / 2}
            maxAzimuthAngle={Math.PI / 2}
            maxDistance={10}
            minDistance={3}
          /> */}
          {/* <PresentationControls
            global={false} // Spin globally or by dragging the model
            cursor={true} // Whether to toggle cursor style on drag
            snap={true} // Snap-back to center (can also be a spring config)
            speed={1} // Speed factor
            zoom={1} // Zoom factor when half the polar-max is reached
            rotation={[0, 0, 0]} // Default rotation
            polar={[0, Math.PI / 2]} // Vertical limits
            azimuth={[-Infinity, Infinity]} // Horizontal limits
            config={{ mass: 2, tension: 250, friction: 16 }} // Spring config
          >
            <Lighthouse position-y={-1} scale={[0.2, 0.2, 0.2]} />
          </PresentationControls> */}

          {/* <PivotControls
            depthTest={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minAzimuthAngle={-Math.PI / 2}
            maxAzimuthAngle={Math.PI / 2}
            maxDistance={10}
            minDistance={3}
          > */}
          {/* <Lighthouse position-y={-1} scale={[0.2, 0.2, 0.2]} /> */}
          {/* </PivotControls> */}

          <MoveableItem>
            <Lighthouse position-y={-1} scale={[0.2, 0.2, 0.2]} />
          </MoveableItem>

          <Environment preset="city" />
        </Canvas>
      </ThemeProvider>
    </>
  );
}
