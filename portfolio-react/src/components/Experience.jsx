import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { portfolio } from "../data/portfolio"

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-gradient-to-b from-slate-900/50 via-slate-800/30 to-transparent relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

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
            Experience
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
          />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-purple-500"
          />

          <div className="space-y-12">
            {portfolio.experience.map((exp, i) => (
              <ExperienceCard key={exp.company} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({ exp, index }) {
  const cardRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        type: "spring",
        stiffness: 100
      }}
      style={{ y, opacity }}
      className="relative pl-20 md:pl-28 group"
    >
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
        className="absolute left-4 md:left-8 top-6 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 border-4 border-slate-900 shadow-lg shadow-blue-500/50 z-10"
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-blue-400"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.8, 0, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Card */}
      <motion.div
        whileHover={{ x: 8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="relative rounded-2xl p-8 border border-slate-500/20 bg-gradient-to-br from-slate-900/90 to-slate-800/50 backdrop-blur-sm hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10 transition-all overflow-hidden"
      >
        {/* Gradient overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-cyan-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:via-cyan-500/5 group-hover:to-purple-500/5 transition-all duration-500"
        />

        {/* Content */}
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
            <div>
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.1 }}
                className="text-xl md:text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors"
              >
                {exp.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.15 }}
                className="text-blue-400 font-semibold text-lg"
              >
                {exp.company}
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + 0.2 }}
              className="text-right"
            >
              <p className="text-slate-200 font-medium">{exp.date}</p>
              <p className="text-sm text-slate-500">{exp.location}</p>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 + 0.25 }}
            className="text-slate-300 mb-6 leading-relaxed"
          >
            {exp.description}
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 + 0.3 }}
            className="space-y-3 mb-6"
          >
            {exp.bullets.map((bullet, j) => (
              <motion.li
                key={j}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.35 + j * 0.05 }}
                className="flex gap-3 text-slate-400"
              >
                <motion.span
                  className="text-blue-500 font-bold shrink-0 mt-1"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: j * 0.2 }}
                >
                  ▹
                </motion.span>
                <span>{bullet}</span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 + 0.5 }}
            className="flex flex-wrap gap-2"
          >
            {exp.tags.map((tag, j) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.55 + j * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 border border-blue-500/30 backdrop-blur-sm"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.article>
  )
}
