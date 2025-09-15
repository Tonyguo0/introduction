import React from "react";
import { computerIcon } from "../../constants";

const MobileHeroImage: React.FC = () => {
    return (
        <div className="absolute bottom-0 w-full h-[60vh] flex items-center justify-center">
            <div className="relative">
                {/* Hero image placeholder - you can replace with an actual computer image */}
                <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full opacity-20 animate-pulse"></div>

                {/* Computer icon/illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <img src={computerIcon.icon} alt="Computer Icon" className="w-32 h-32 md:w-40 md:h-40" />
                </div>
            </div>
        </div>
    );
};

export default MobileHeroImage;
