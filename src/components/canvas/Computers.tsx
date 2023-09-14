import { Suspense, useEffect, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

interface Props {
    isMobile?: boolean;
}

interface MediaEvent {
    matches: boolean | ((prevState: boolean) => boolean);
}

const Computers = ({ isMobile }: Props) => {
    const computer = useGLTF("./desktop_pc/scene.gltf");

    return (
        // 3d mesh
        <mesh>
            <hemisphereLight intensity={0.15} groundColor="black" />
            {/* on the computer screen */}
            <pointLight intensity={1} />
            {/* on the table */}
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
            {/* primitive object */}
            <primitive
                object={computer.scene}
                scale={isMobile ? 0.7 : 0.75}
                position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </mesh>
    );
};

const ComputerCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // basically use a listener to determine if the website size is mobile or not based on the windows event

        // Add a Listener for changes to the screen size
        const mediaQuery = window.matchMedia("(max-width: 500px)");

        // Set the initial value of the 'isMobile' state variable
        setIsMobile(mediaQuery.matches);

        // Define a callback function to handle changes to the media query variable
        const handleMediaQueryChange = (event: MediaEvent) => {
            setIsMobile(event.matches);
        };

        // Add callback function as a listner for changes to the media query
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        // Remove the listener when the component is unmounted
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        <Canvas
            frameloop="demand"
            shadows
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 4}
                />
                <Computers isMobile={isMobile} />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default ComputerCanvas;
