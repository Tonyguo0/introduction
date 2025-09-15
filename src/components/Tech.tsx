import React from "react";
import { BallCanvas } from "./canvas";
import MobileTechBall from "./canvas/MobileTechBall";
import { SectionWrapper } from "../hoc";
import { Itechnology, technologies } from "../constants";
import { useDeviceCapabilities } from "../utils/deviceDetection";

const Tech = () => {
    const { isMobile, isLowEnd, supportsWebGL } = useDeviceCapabilities();
    
    // Use fallback component for mobile or low-end devices
    const shouldUseFallback = isMobile || isLowEnd || !supportsWebGL;

    return (
        <div className="flex flex-row flex-wrap justify-center gap-10">
            {technologies.map((technology: Itechnology) => (
                <div className="w-28 h-28" key={technology.name}>
                    {shouldUseFallback ? (
                        <MobileTechBall technology={technology} />
                    ) : (
                        <BallCanvas icon={technology.icon} />
                    )}
                </div>
            ))}
        </div>
    );
};

export default SectionWrapper(Tech, "tech");
