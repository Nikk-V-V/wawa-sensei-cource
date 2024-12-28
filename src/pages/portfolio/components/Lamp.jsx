/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/models/Lamp.glb -o src/components/Lamp.jsx -r public
Lamp by burunduk [CC-BY] (https://creativecommons.org/licenses/by/3.0/) via Poly Pizza (https://poly.pizza/m/OQ2HurCvOz)
*/

import { useGLTF } from '@react-three/drei';
import React from 'react';

export default function Lamp(props) {
	const { nodes, materials } = useGLTF('/models/Lamp.glb');
	return (
		<group {...props} dispose={null}>
			<group position={[0.326, 0.78, -0.505]} rotation={[-1.419, 0.087, 2.088]}>
				<mesh
					geometry={nodes.Cylinder398_1.geometry}
					material={materials.brown}
				/>
				<mesh
					geometry={nodes.Cylinder398_2.geometry}
					material={materials.black}
				/>
			</group>
			<group position={[0.44, 2.164, -0.331]} rotation={[0, 0, Math.PI / 6]}>
				<mesh
					geometry={nodes.Cylinder400_1.geometry}
					material={materials.black}
				/>
				<mesh
					geometry={nodes.Cylinder400_2.geometry}
					material={materials.white}
				/>
				<mesh
					geometry={nodes.Cylinder400_3.geometry}
					material={materials.L_yellow}
				/>
			</group>
		</group>
	);
}

useGLTF.preload('/models/Lamp.glb');
