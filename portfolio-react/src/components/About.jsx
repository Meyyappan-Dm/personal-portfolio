import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { portfolio } from "../data/portfolio"

export default function About() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 1, 0])

  return (
    <section id="about" ref={containerRef} className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div 
        style={{ y, opacity }}
        className="max-w-6xl mx-auto grid md:grid-cols-[2fr_1fr] gap-12 items-start relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>
          
          <div className="space-y-6">
            {portfolio.bio.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="text-slate-300 text-lg leading-relaxed"
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* Stats or highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-8 grid grid-cols-3 gap-4"
          >
            {[
              { label: "Projects", value: portfolio.projects.length },
              { label: "Experience", value: portfolio.experience.length },
              { label: "Certifications", value: portfolio.certifications.length },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-4 rounded-xl bg-gradient-to-br from-slate-900/60 to-slate-800/40 border border-slate-500/20 backdrop-blur-sm"
              >
                <motion.div
                  className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                >
                  {stat.value}+
                </motion.div>
                <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50, rotateY: 15 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          whileHover={{ y: -8, scale: 1.02 }}
          className="relative rounded-2xl p-8 border border-slate-500/20 bg-gradient-to-br from-slate-900/90 to-slate-800/50 backdrop-blur-sm hover:border-blue-500/40 transition-all overflow-hidden group"
        >
          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-cyan-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:via-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-500"
          />

          <div className="relative z-10 space-y-6">
            {[
              { label: "Location", value: portfolio.location, icon: "📍" },
              { label: "Role", value: portfolio.role, icon: "💼" },
              { label: "Open to", value: portfolio.openTo, icon: "🚀" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="group/item"
              >
                <motion.div
                  className="flex items-center gap-2 mb-2"
                  whileHover={{ x: 4 }}
                >
                  <span className="text-xl">{item.icon}</span>
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold">
                    {item.label}
                  </p>
                </motion.div>
                <p className="text-slate-200 text-lg font-medium pl-7 group-hover/item:text-blue-400 transition-colors">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Decorative elements */}
          <motion.div
            className="absolute top-4 right-4 w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
