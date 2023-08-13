import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc';
import { Iprojectcard, projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';


const ProjectCard = ({ index, name, description, tags, image, source_code_link }: Iprojectcard) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        scale={1} transitionSpeed={450} tiltMaxAngleX={45} tiltMaxAngleY={45}

        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          
        </div>

      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          My work
        </p>
        <h2 className={styles.sectionHeadText}>
          Projects
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Project descriptions: showcasing my skill used to create webpages using react, node.js and MongoDB
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (<ProjectCard key={`project-${index} `} index={index} {...project} />))}

      </div>
    </>
  )
}

export default SectionWrapper(Works, "");