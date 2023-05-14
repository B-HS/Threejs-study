import { usePlane } from "@react-three/cannon";

export const Ground = () => {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
        position: [0, -95, 0],
    }));

    return (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        <mesh ref={ref as any}>
            <meshStandardMaterial />
        </mesh>
    );
};
