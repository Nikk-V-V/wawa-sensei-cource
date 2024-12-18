// import { Environment, Gltf, useFBX } from "@react-three/drei";
import Fish from "./Fish";

export default function Experience() {
  // const { scene } = useGLTF("/models/Fish.gltf");
  // const dino = useFBX("/models/Dino.fbx");

  return (
    <>
      <ambientLight intensity={2} />
      <Fish />
      {/* <Gltf src="/models/Fish.gltf" /> */}
      {/* <primitive object={scene} /> */}
      {/* <primitive scale={0.01} position-x={-4} object={dino} /> */}
      {/* <Environment preset="sunset" /> */}
    </>
  );
}
