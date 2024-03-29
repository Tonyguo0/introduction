import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

interface propsType {
    index: number;
    title: string;
    icon: string;
}

const ServiceCard = ({ index, title, icon }: propsType) => {
    return (
        <Tilt
            className="parallax-effect xs:w-[250px] w-full"
            perspective={1000}
            scale={1.1}
            transitionSpeed={450}
            tiltMaxAngleX={35}
            tiltMaxAngleY={35}
        >
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className="inner-element w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
            >
                <div className="inner-element bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                    <img
                        src={icon}
                        alt={title}
                        className="inner-inner-element w-16 h-16 object-contain"
                    />
                    <h3 className="inner-inner-element text-white text-[20px] font-bold text-center">
                        {title}
                    </h3>
                </div>
            </motion.div>
        </Tilt>
    );
};

const About = () => {
    return (
        <>
            <motion.div variants={textVariant(0)}>
                <p className={styles.sectionSubText}>introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                I'm a skilled software Engineer with specialisation in
                Javascript, Typescript and Java, and expertise in framworks like
                React, Angular, Node.js, Express, MongoDB and Three.js. I'm a quick learner and work efficiently to create scalable and
                user-friendly solutions that solve real-world problems. Let's
                work together to bring your ideas to life!
            </motion.p>

            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.title}
                        index={index}
                        {...service}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
