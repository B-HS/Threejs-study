import { PresentationControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Model } from "./Untitled";

const App = () => {
    return (
        <Canvas camera={{ fov: 1 }}>
            <PresentationControls speed={1.5}>
                <Stage shadows={false}>
                    <Model />
                </Stage>
            </PresentationControls>
        </Canvas>
    );
};

export default App;
