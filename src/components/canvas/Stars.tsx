import { Canvas, useFrame } from "@react-three/fiber";
import React, { useState, useRef, Suspense } from "react";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.cjs";
// import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
    const ref = useRef();
    const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });

    // useFrame a react Hook from react Fiber
    // delta = change
    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    // to learn more go to threejs or react fiber and type stride there
    // MAKE SURE to use closing tag and self closing tags properly
    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points
                ref={ref}
                positions={sphere}
                stride={3}
                frustumCulled
                {...props}
            >
                <PointMaterial transparent color="#f272c8" size={0.002} />
            </Points>
        </group>
    );
};

const StarsCanvas = () => {
    // absolute to show behind the actual earth and contact form
    // z-[-1] to show behind those elements
    return (
        <div className="w-full h-auto absolute inset-0 ">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <Stars />
                </Suspense>

                <Preload all />
            </Canvas>
        </div>
    );
};

export default StarsCanvas;
