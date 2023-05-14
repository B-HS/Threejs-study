import { Physics } from "@react-three/cannon";
import { Sky, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Ground } from "./Ground";
import { Player } from "./Player";
import { Model } from "./untitled";
import { FPV } from "./FPV";

const App = () => {
    // fov : 카메라의 확대상태, 정보량
    // aspect ratio: 카메라의 정보창의 비율
    return (
        <>
            <Canvas>
                <Sky sunPosition={[100, 100, 20]} />
                <ambientLight intensity={0.5} />
                <FPV />
                <Physics>
                    <Stage shadows={false}>
                        <Model />
                    </Stage>
                    <Ground />
                    <Player />
                </Physics>
            </Canvas>
        </>
    );
};

export default App;
