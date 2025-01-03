import { shaderMaterial } from '@react-three/drei';
// import { resolveLygia } from 'resolve-lygia';
import { Color } from 'three';

export const WaterMaterial = shaderMaterial(
	{
		uColor: new Color('skyblue'),
		uOpacity: 0.8,
		uTime: 0,
		uSpeed: 0.5,
		uRepeat: 20.0,
		uNoiseType: 0,
		uFoam: 0.4,
		uFoamTop: 0.7,
		uDepth: null,
		uMaxDepth: 1.0,
		uResolution: [0, 0],
		uCameraNear: 0,
		uCameraFar: 0,
	},
	/* glsl */ `
       varying vec2 vUv;

        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `
	// resolveLygia(/* glsl */  `
	//     #include "lygia/generative/pnoise.glsl"
	//     #include "lygia/generative/voronoise.glsl"

	//     varying vec2 vUv;
	//     uniform vec3 uColor;
	//     uniform float uOpacity;
	//     uniform float uTime;
	//     uniform float uSpeed;
	//     uniform float uRepeat;
	//     uniform int uNoiseType;
	//     uniform float uFoam;
	//     uniform float uFoamTop;
	//     uniform sampler2D uDepth;
	//     uniform float uMaxDepth;
	//     uniform vec2 uResolution;
	//     uniform float uCameraNear;
	//     uniform float uCameraFar;

	//     #include <packing>

	//     float getViewZ(const in float depth) {
	//     return perspectiveDepthToViewZ(depth, uCameraNear, uCameraFar);
	//     }

	//     float getDepth(const in vec2 screenPosition ) {
	//     return unpackRGBAToDepth(texture2D(uDepth, screenPosition));
	//     }

	//     void main() {
	//         float adjustedTime = uTime * uSpeed;

	//         // Noise
	//         float noise = 0.0;
	//         if (uNoiseType == 0) {
	//             noise = pnoise(vec3(vUv * uRepeat, adjustedTime * 0.5), vec3(100.0, 24.0, 112.0));
	//         } else {
	//             vec2 p = 0.5 - 0.5*cos(adjustedTime *vec2(1.0,0.5));
	//             p = p*p*(3.0-2.0*p);
	//             p = p*p*(3.0-2.0*p);
	//             p = p*p*(3.0-2.0*p);
	//             noise = voronoise(vec3(vUv * uRepeat, adjustedTime), p.x, 1.0);
	//         }

	//         // Depth
	//         vec2 screenUV = gl_FragCoord.xy / uResolution;
	//         float fragmentLinearEyeDepth = getViewZ(gl_FragCoord.z);
	//         float linearEyeDepth = getViewZ(getDepth(screenUV));

	//         float depth = fragmentLinearEyeDepth - linearEyeDepth;
	//         noise += smoothstep(uMaxDepth, 0.0, depth);
	//         // Foam
	//         noise = smoothstep(uFoam, uFoamTop, noise);
	//         // Color
	//         vec3 intermediateColor = uColor * 1.8;
	//         vec3 topColor = intermediateColor * 2.0;
	//         vec3 finalColor =  uColor;
	//         finalColor = mix(uColor, intermediateColor, step(0.01, noise));
	//         finalColor = mix(finalColor, topColor, step(1.0, noise));

	//         gl_FragColor = vec4(finalColor, uOpacity);
	//         #include <tonemapping_fragment>
	//         #include <colorspace_fragment>
	//     }
	// `)
);
