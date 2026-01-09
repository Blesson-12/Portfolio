import React from 'react'
import {motion} from "framer-motion"
const About = () => {
  return (
    <section id='about' className='py-20 bg-white dark:bg-slate-900/95 min-h-screen '>
      <div className='max-w-6xl mx-auto px-6'>
        <motion.h2
          initial={{opacity:0,y:30}}
          whileInView={{opacity:2,y:0}}
          transition={{duration:0.9}}
          
          className="text-3xl font-bold text-center dark:text-white mb-14">
            About
            </motion.h2>         
            <motion.p
            initial={{opacity:0,x:-100}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:0.9}} className='text-center text-gray-600 dark:text-gray-300 mt-40 text-2xl md:text-3xl'>Hi, I’m <span className='text-3xl text-bold text-amber-500 md:text-4xl'>Blesson N</span>  a dedicated Full Stack Developer with a strong grasp of building scalable, modern web applications from the ground up.</motion.p>
        <hr className='opacity-20 mt-7 border-slate-950 dark:border-gray-200' />
        <motion.p 
        initial={{opacity:0,x:100}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:0.9}} className='text-center text-gray-600 dark:text-gray-300 mt-10 text-2xl md:text-3xl'>I specialize in JavaScript technologies like React and Node.js, combining clean UI design with powerful backend architecture. I’m passionate about crafting intuitive, high-performance user experiences with clean, maintainable code.</motion.p>
        <div className='mx-auto text-center max-w-6xl'>
          <a href='/Blesson_Resume.pdf'
            target='_blank'
            className='rounded inline-block bg-blue-500
            text-white justify-center px-4 items-center py-2 mt-8'>Resume</a>
        </div>
      </div>
    </section>
  )
}

export default About