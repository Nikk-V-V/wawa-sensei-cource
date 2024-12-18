import { useRef } from "react";
import { PivotControls } from "@react-three/drei";
import * as THREE from "three";

export default function MoveableItem({
    children,
}) {
    const ref = useRef();


    const displayItemNewPosition = () => {
        const newWorldPosition = new THREE.Vector3();

        ref.current.getWorldPosition(newWorldPosition);
        console.log('New world position:', newWorldPosition);

        const newWorldRotation = new THREE.Euler();
        ref.current.getWorldQuaternion(newWorldRotation);

        console.log('New world rotation:', newWorldRotation);
    }

    return (
        <PivotControls
            depthTest={false}
            onDragEnd={displayItemNewPosition}
        >
            <group ref={ref}>
                {children}
            </group>
        </PivotControls>
    )
}