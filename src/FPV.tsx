import { PointerLockControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

// eslint-disable-next-line react-refresh/only-export-components
export const FPV = () => {
    const { camera, gl } = useThree();
    return <PointerLockControls args={[camera, gl.domElement]} />;
};
