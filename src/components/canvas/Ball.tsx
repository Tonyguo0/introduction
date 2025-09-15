import React, { Suspense, useMemo } from "react";
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
import { useDeviceCapabilities } from "../../utils/deviceDetection";

const Ball = (props: { imgUrl: any; isLowEnd?: boolean }) => {
    // get the balls texture
    const [decal] = useTexture([props.imgUrl]);
    
    // Reduce geometry complexity for low-end devices
    const geometryArgs: [number, number] = useMemo(() => 
        props.isLowEnd ? [1, 0] : [1, 1], 
        [props.isLowEnd]
    );

    return (
        <Float 
            speed={props.isLowEnd ? 1 : 1.75} 
            rotationIntensity={props.isLowEnd ? 0.5 : 1} 
            floatIntensity={props.isLowEnd ? 1 : 2}
        >
            <ambientLight intensity={0.25} />
            <directionalLight position={[0, 0, 0.05]} />
            {/* rotation is x, y and z x horizontal, y vertical, z in out the screen */}
            <mesh
                castShadow={!props.isLowEnd}
                receiveShadow={!props.isLowEnd}
                scale={props.isLowEnd ? 3 : 3.75}
                rotation={[-0.4, 1.34, 0.5]}
            >
                <icosahedronGeometry args={geometryArgs} />
                <meshStandardMaterial
                    color="#fff8eb"
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />
                {/* position rotation etc... of the tech image on the ball */}
                <Decal
                    position={[0, 0, 1.00]}
                    rotation={[10 * Math.PI, 0, 6.25]}
                    scale={1.5}
                    map={decal}
                />
            </mesh>
        </Float>
    );
};

const BallCanvas = ({ icon }: Itechnology) => {
    const { isLowEnd, supportsWebGL } = useDeviceCapabilities();
    
    // Return null if WebGL is not supported
    if (!supportsWebGL) {
        return null;
    }

    return (
        <Canvas
            frameloop={isLowEnd ? "never" : "demand"}
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ 
                preserveDrawingBuffer: true,
                antialias: !isLowEnd,
                powerPreference: isLowEnd ? "low-power" : "default"
            }}
            performance={{ min: isLowEnd ? 0.2 : 0.5 }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls 
                    enableZoom={false} 
                    enablePan={false}
                    enableRotate={!isLowEnd}
                />
                <Ball imgUrl={icon} isLowEnd={isLowEnd} />
            </Suspense>

            {!isLowEnd && <Preload all />}
        </Canvas>
    );
};

export default BallCanvas;
