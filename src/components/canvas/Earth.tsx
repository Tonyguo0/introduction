// everything 3D related comes from canvas
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import CanvasLoader from "../Loader";

const Earth = () => {
    // how to pass in 3D rendered models
    const earth = useGLTF("./planet/scene.gltf");
    return (
        <primitive
            object={earth.scene}
            scale={2.5}
            position-y={0}
            rotation-y={0}
        />
    );
};

const EarthCanvas = () => {
    return (
        <Canvas
            shadows
            frameloop="demand"
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6],
            }}
        >
            {/* 
            suspense ensure while our model is loading we have something to show

            // how the rotation is happening same as the PC we used above:
          */}
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    autoRotate={true}
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Earth />
            </Suspense>
        </Canvas>
    );
};

export default EarthCanvas;
