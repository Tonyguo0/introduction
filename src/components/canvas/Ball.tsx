import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
// Orbit controls to be able to move the ball around
import {
    Decal,
    Float,
    OrbitControls,
    Preload,
    useTexture,
} from "@react-three/drei";
// loads percentages
import CanvasLoader from "../Loader";
import { Itechnology } from "../../constants";

const Ball = (props: { imgUrl: any }) => {
    // get the balls texture
    const [decal] = useTexture([props.imgUrl]);

    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={0.25} />
            <directionalLight position={[0, 0, 0.05]} />
            {/* rotation is x, y and z x horizontal, y vertical, z in out the screen */}
            <mesh
                castShadow
                receiveShadow
                scale={3.75}
                rotation={[-0.4, 1.34, 0.5]}
            >
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color="#fff8eb"
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />
                <Decal
                    position={[0, 0, 1]}
                    scale={1.5}
                    rotation={[10 * Math.PI, 0, 6.25]}
                    flatShading
                    map={decal}
                />
            </mesh>
        </Float>
    );
};

const BallCanvas = ({ icon }: Itechnology) => (
    <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
    >
        <Suspense fallback={<CanvasLoader />}>
            <OrbitControls enableZoom={false} />
            <Ball imgUrl={icon} />
        </Suspense>

        <Preload all />
    </Canvas>
);

export default BallCanvas;
