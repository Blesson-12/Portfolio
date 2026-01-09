import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiJavascript, SiMongodb ,SiTailwindcss,SiBootstrap} from "react-icons/si";

const skills = [
  { name: "HTML", level: 90, icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", level: 85, icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", level: 80, icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React", level: 75, icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", level: 70, icon: <FaNodeJs className="text-green-500" /> },
  { name: "MongoDB", level: 65, icon: <SiMongodb className="text-green-600" /> },
  {name:"Tailwindcss",level:70,icon:<SiTailwindcss className="text-blue-400"/>},
  {name:"Bootstrap",level:70,icon: <SiBootstrap className="text-purple-600"/>}
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen py-20 dark:bg-slate-900/95 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center dark:text-white mb-14"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08}}
              // viewport={{ once: true }}
              className="bg-gray-300 dark:bg-slate-800 p-5 rounded-xl shadow-md h-[170px] flex flex-col justify-between"
            >

              {/* Icon */}
              <div className="text-4xl">
                {skill.icon}
              </div>

              {/* Name */}
              <span className="font-semibold uppercase tracking-wide dark:text-white">
                {skill.name}
              </span>

              {/* Progress */}
              <div className="w-full bg-gray-300 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8 }}
                  className="h-2 bg-gradient-to-r from-indigo-500 to-purple-500"
                />
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
