import React from "react";
import { motion } from "framer-motion";
import home from "../assets/hme.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const bgVariants = {
  hidden: { scale: 1.5 },
  visible: {
    scale: 1,
    transition: { duration: 1.5, ease: "easeOut" },
  },
};

const Home = () => {
  return (
    <motion.section
      id="home"
      className="relative min-h-screen z-0 flex flex-col justify-center items-center text-center bg-cover bg-center pt-24"
      style={{ backgroundImage: `url(${home})` }}
      variants={bgVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>

      {/* Content */}
      <motion.div
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        
      >

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-7xl font-bold text-white"
        >
          Hi, I'm{" "}
          <motion.span
            className="text-blue-500 inline-block"
            whileHover={{ scale: 1.1, }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Blesson N
          </motion.span>
        </motion.h1>


        <motion.p
          variants={itemVariants}
          className="mt-4 text-2xl font-bold text-gray-300"
        >
          Being full stack means never saying{" "}
          <span className="text-amber-400">❛not my layer❜</span>
        </motion.p>


        <motion.div
          className="mx-auto mt-6 h-1 w-30 bg-blue-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 100 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
        />
      </motion.div>
    </motion.section>
  );
};

export default Home;
