import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

interface propsType {
  index: number,
  title: string,
  icon: string
}

const ServiceCard = ({ index, title, icon }:propsType) => {
  return (
    <div>
    <p>{title}</p>
    </div>
  )
}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>
          introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software Engineer with specialisation in Typescript and Javascript, and expertise in framworks like React, Node.js, Express, MongoDB and Three.js. I'm a quick learner and work efficiently to create scalable and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default About