import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { portfolio } from "../data/portfolio"

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.projects.map((project, i) => {
            const isHovered = hoveredIndex === i
            return (
              <ProjectCard
                key={project.title}
                project={project}
                index={i}
                isHovered={isHovered}
                onHoverStart={() => setHoveredIndex(i)}
                onHoverEnd={() => setHoveredIndex(null)}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index, isHovered, onHoverStart, onHoverEnd }) {
  const cardRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1])

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 60, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -12, 
        rotateY: 2,
        rotateX: -2,
        transition: { duration: 0.3 }
      }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      style={{ y, opacity }}
      className="group relative h-full rounded-2xl overflow-hidden border border-slate-500/20 bg-gradient-to-br from-slate-900/80 to-slate-800/40 backdrop-blur-sm hover:border-blue-500/40 transition-all perspective-1000"
    >
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-cyan-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:via-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-500"
        animate={isHovered ? {
          background: [
            "linear-gradient(135deg, rgba(59, 130, 246, 0) 0%, rgba(6, 182, 212, 0) 50%, rgba(168, 85, 247, 0) 100%)",
            "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 50%, rgba(168, 85, 247, 0.1) 100%)",
            "linear-gradient(135deg, rgba(59, 130, 246, 0) 0%, rgba(6, 182, 212, 0) 50%, rgba(168, 85, 247, 0) 100%)",
          ]
        } : {}}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
        initial={{ x: "-200%" }}
        animate={isHovered ? { x: "200%" } : { x: "-200%" }}
        transition={{ duration: 0.8 }}
      />

      {/* Content */}
      <div className="relative z-10 p-6 h-full flex flex-col">
        {/* Project number */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.2 }}
          className="absolute top-6 right-6 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-sm"
        >
          {String(index + 1).padStart(2, "0")}
        </motion.div>

        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-400 text-sm mb-4 leading-relaxed flex-grow">
          {project.description}
        </p>

        {/* Highlight badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3 }}
          className="mb-4"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">
            ✨ {project.highlight.split(".")[0]}
          </span>
        </motion.div>

        {/* Tech stack */}
        <div className="mb-4">
          <p className="text-xs text-slate-500 mb-2">Tech Stack:</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.split(", ").slice(0, 3).map((tech, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.4 + i * 0.05 }}
                className="px-2 py-1 rounded-md bg-slate-800/60 border border-slate-700/50 text-slate-300 text-xs"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* GitHub link */}
        <motion.a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 mt-auto text-sm text-blue-400 hover:text-cyan-400 font-medium group/link"
        >
          <span>View on GitHub</span>
          <motion.svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={{ x: isHovered ? [0, 4, 0] : 0 }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </motion.svg>
        </motion.a>
      </div>

      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{
          boxShadow: "0 0 40px rgba(59, 130, 246, 0.3)",
        }}
      />
    </motion.article>
  )
}
