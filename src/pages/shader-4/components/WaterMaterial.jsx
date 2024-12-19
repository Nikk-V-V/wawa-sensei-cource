import { shaderMaterial } from "@react-three/drei";
import { Color } from "three";

export const WaterMaterial = shaderMaterial(
    {
        uColor: new Color("skyblue"),
        uOpacity: 0.8,
    },
    /* glsl */ `
        
    `
);
