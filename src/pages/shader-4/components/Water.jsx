import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { FloatType, MeshDepthMaterial, NoBlending, RGBADepthPacking } from "three";
import { useFBO } from "@react-three/drei";

const depthMaterial = new MeshDepthMaterial();
depthMaterial.depthPacking = RGBADepthPacking;
depthMaterial.blending = NoBlending

export const Water = ({ ...props }) => {
  const waterMaterialRef = useRef();
  const { waterColor, waterOpacity, speed, repeat, foam, foamTop, noiseType, maxDepth  } = useControls({
    waterOpacity: { value: 0.8, min: 0, max: 1 },
    waterColor: "#00c3ff",
    speed: { value: 0.5, min: 0, max: 5 },
    repeat: {
      value: 30,
      min: 1,
      max: 100,
    },
    foam: { value: 0.4, min: 0, max: 1 },
    foamTop: { value: 0.7, min: 0, max: 1 },
    noiseType: { value: 0, options: { Perlin: 0, Voronoi: 1 } },
    maxDepth: { value: 2, min: 0, max: 5 }
  });

  const renderTarget = useFBO({
    depth: true,
    type: FloatType
  });

  const waterRef = useRef(); 

  useFrame(({ clock, camera, gl, scene }) => {
    // We hide the water mesh and render the scene to the render target
    waterRef.current.visible = false;
    gl.setRenderTarget(renderTarget);
    scene.overrideMaterial = depthMaterial;
    gl.render(scene, camera);

    // We reset the scene and show the water mesh
    scene.overrideMaterial = null;
    waterRef.current.visible = true;
    gl.setRenderTarget(null);

    if (waterMaterialRef.current) {
      waterMaterialRef.current.uniforms.uTime.value = clock.getElapsedTime();

      waterMaterialRef.current.uniforms.uDepth.value = renderTarget.texture;
      const pixelRatio = gl.getPixelRatio();
      waterMaterialRef.current.uniforms.uResolution.value = [
        window.innerWidth * pixelRatio,
        window.innerHeight * pixelRatio,
      ];
      waterMaterialRef.current.uniforms.uCameraNear.value = camera.near;
      waterMaterialRef.current.uniforms.uCameraFar.value = camera.far;
    }
  });

  return (
    <mesh {...props} ref={waterRef}>
      <planeGeometry args={[15, 32, 22, 22]} />
      <waterMaterial
        ref={waterMaterialRef}
        uColor={waterColor}
        transparent
        uOpacity={waterOpacity}
        uSpeed={speed}
        uRepeat={repeat}
        uFoam={foam}
        uFoamTop={foamTop}
        uNoiseType={noiseType}
        uMaxDepth={maxDepth}
      />
    </mesh>
  );
};
