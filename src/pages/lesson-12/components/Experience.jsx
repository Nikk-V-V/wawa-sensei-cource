import { useTexture } from "@react-three/drei";
// import { RepeatWrapping } from "three";
// import { normalMap } from "three/webgpu";

export default function Experience() {
  const props = useTexture({
    map: "textures/PavingStones130_1K_Color.jpg",
    normalMap: "textures/PavingStones130_1K_NormalGL.jpg",
    roughnessMap: "textures/PavingStones130_1K_Roughness.jpg",
    aoMap: "textures/PavingStones130_1K_AmbientOcclusion.jpg",
  });
  // texture.repeat.set(0.2, 0.2);
  // texture.rotation = Math.PI / 6;
  // texture.wrapS = texture.wrapT = RepeatWrapping;

  return (
    <>
      <mesh>
        <boxGeometry />
        <meshStandardMaterial {...props} />
      </mesh>
    </>
  );
}
