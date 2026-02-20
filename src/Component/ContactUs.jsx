import React from 'react'
import { motion } from 'framer-motion'
import { MdEmail ,MdPhone} from 'react-icons/md'
import { FaGithub,FaInstagram,FaLinkedin } from 'react-icons/fa'
const ContactUs = () => {
    const servicesContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 }
  }
};

const serviceCard = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

    return (
        <section className='min-h-screen py-20 dark:bg-slate-900/95 bg-white'
            id='contact'>
            <div className="max-w-6xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="font-bold text-center text-3xl dark:text-white mb-10"
                >
                    Contact Me
                </motion.h2>
            </div>
            <h4 className="text-xl font-bold text-white ml-6">Services</h4>

                <motion.div
                variants={servicesContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 rounded-lg max-w-8xl m-4 mx-auto px-5 gap-6"
                >
                <motion.div
                    variants={serviceCard}
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-slate-900 rounded-lg p-4 shadow-xl mb-5 "
                >
                    <h5 className="text-xl font-bold dark:text-slate-200 text-slate-200 mb-6">
                    Frontend
                    </h5>
                    <p className="text-sm text-slate-400 mb-4">
                    We design responsive, modern interfaces with HTML, CSS, JavaScript, and React to
                    deliver smooth user experiences.
                    </p>
                </motion.div>

                <motion.div
                    variants={serviceCard}
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-slate-900 rounded-lg p-4 shadow-xl mb-5"
                >
                    <h5 className="text-xl font-bold dark:text-slate-200 text-slate-200 mb-6">
                    Backend
                    </h5>
                    <p className="text-sm text-slate-400 mb-4">
                    Specializing in backend development, I build reliable APIs and high-performance
                    infrastructures tailored to client needs.
                    </p>
                </motion.div>

                <motion.div
                    variants={serviceCard}
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-slate-900 rounded-lg p-4 shadow-xl mb-5"
                >
                    <h5 className="text-xl font-bold dark:text-slate-200 text-slate-200 mb-6">
                    MERN
                    </h5>
                    <p className="text-sm text-slate-400 mb-4">
                    Specializing in MERN stack development, I build dynamic web apps with robust APIs
                    and high-performance, scalable infrastructure.
                    </p>
                </motion.div>
                </motion.div>


            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 m-4 '>
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    
                    <h3 className='text-2xl font-semibold dark:text-white text-black'>Let’s work together 👋</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                        I’m open to full-time roles, internships, and freelance projects.
                        Feel free to reach out if you have an opportunity or just want to connect.
                    </p>
                    <div className="space-y-2 text-slate-700 dark:text-slate-100">
                            <p><strong>Location:</strong> Coimbatore, India</p>
                            
                            <p className="italic text-slate-500 dark:text-slate-400">
                            "Striving for excellence in every line of code!"
                            </p>
                    </div>


                    <div className="flex items-center  text-slate-700 dark:text-slate-100 text-3xl gap-5">
                       <motion.a href='mailto:blessonnelson12@gmail.com'
                       whileHover={{scale:1.2}}
                        transition={{ type: "spring", stiffness: 400 }}
                        ><MdEmail/></motion.a> 

                        <motion.a href='https://github.com/Blesson-12'
                        target='_blank'
                        rel="noopener noreferrer"
                       whileHover={{scale:1.2}}
                        transition={{ type: "spring", stiffness: 400 }}
                        ><FaGithub/></motion.a> 

                        <motion.a href='https://www.instagram.com/black_blessa?igsh=MXh0MmM1MWM1MDc0Yw=='
                        target='_blank'
                        rel="noopener noreferrer"
                       whileHover={{scale:1.2}}
                        transition={{ type: "spring", stiffness: 400 }}
                        ><FaInstagram/></motion.a> 

                        <motion.a href='https://www.linkedin.com/in/blesson12'
                        target='_blank'
                        rel="noopener noreferrer"
                       whileHover={{scale:1.2}}
                        transition={{ type: "spring", stiffness: 400 }}
                        ><FaLinkedin/></motion.a> 

                        <motion.a href='tel:+918220492880'
                       whileHover={{scale:1.2}}
                        transition={{ type: "spring", stiffness: 400 }}
                        ><MdPhone/></motion.a> 
                    </div>
                </motion.div>
                <motion.form
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-slate-300 dark:bg-slate-800 p-4 rounded-xl shadow-lg  space-y-5 max-w-md w-full items-right ml-auto "
            >
                <div>
                <label className="block text-sm font-medium mb-1 dark:text-white">
                    Name
                </label>
                <input
                    type="text"
                    placeholder="Your name"
                    className="w-full p-2 rounded-md bg-white dark:bg-slate-700 dark:text-white outline-none focus:ring-2 focus:ring-cyan-500"
                />
                </div>

                <div>
                <label className="block text-sm font-medium mb-1 dark:text-white">
                    Email
                </label>
                <input
                    type="email"
                    placeholder="Your email"
                    className="w-full p-2 rounded-md bg-white dark:bg-slate-700 dark:text-white outline-none focus:ring-2 focus:ring-cyan-500"
                />
                </div>

                <div>
                <label className="block text-sm font-medium mb-1 dark:text-white">
                    Message
                </label>
                <textarea
                    rows="3"
                    placeholder="Your message"
                    className="w-full p-2 rounded-md bg-white dark:bg-slate-700 dark:text-white outline-none focus:ring-2 focus:ring-cyan-500"
                />
                </div>

                <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 rounded-md"
                >
                Send Message
                </motion.button>
            </motion.form>

            </div>
            <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1}}
            className='mt-10 text-center border-t pt-4 border-slate-200 dark:border-slate-700
            '>
                <p className='text-sm text-slate-600 dark:text-slate-400'>© {new Date().getFullYear()} Blesson N. All rights reserved.</p>
               
            </motion.div>


        </section>
    )
}

export default ContactUs
