import { motion } from "framer-motion"

const Projects = () => {
  const projects = [
    {
      title: "Success Academy",
      tools: "MERN",
      description: "A full stack web application for managing course details and enquiry details.",
      links: "https://react-rho-ecru-11.vercel.app"
    },
    {
      title: "Course Content Management",
      tools: "Node.js",
      description: "A backend application to manage course contents using Node.js and Express.",
      links: "https://github.com/BlackBlesson/onlinecourse"
    },
    {
      title: "To-Do-List",
      tools: "React.js",
      description: "A simple to-do list application built with React.js to manage daily tasks.",
      links: "https://todolist-mu-nine-61.vercel.app"
    }
  ]

  return (
    <section
      id="projects"
      className="min-h-screen py-20 dark:bg-slate-900/95 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-bold text-center text-3xl dark:text-white mb-14"
        >   
          Projects
        </motion.h2>
      </div>

      <div className="flex justify-center items-stretch gap-10 flex-wrap max-w-6xl mx-auto px-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="
              bg-slate-700 text-white 
              p-6 rounded-md shadow-2xl shadow-black 
              w-80 h-55
              flex flex-col justify-between
            "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 ,delay: index * 0.2}}
          >
            <div>
              <h5 className="font-bold text-lg text-slate-100">
                {project.title}
              </h5>
              <p className="font-bold text-slate-400">
                {project.tools}
              </p>
              <p className="text-slate-300 mt-2">
                {project.description}
              </p>
            </div>

            <a
              href={project.links}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-cyan-400 hover:underline"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
