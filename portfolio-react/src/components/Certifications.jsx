import { motion } from "framer-motion"
import { portfolio } from "../data/portfolio"
import { useState } from "react"

export default function Certifications() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section id="certifications" className="py-24 px-6 bg-gradient-to-b from-slate-900/50 via-slate-800/30 to-transparent relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
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
          className="mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
          >
            Certifications
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-xl text-lg"
          >
            Click any certification to view the official credential. Verified credentials from leading platforms.
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.certifications.map((cert, i) => (
            <CertificationCard
              key={cert.title}
              cert={cert}
              index={i}
              isHovered={hoveredIndex === i}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function CertificationCard({ cert, index, isHovered, onHoverStart, onHoverEnd }) {
  const providers = {
    "Coursera": "from-blue-500 to-blue-600",
    "DeepLearning.AI": "from-purple-500 to-pink-500",
    "HackerRank": "from-green-500 to-emerald-500",
    "Udemy": "from-red-500 to-orange-500",
  }

  const providerClass = Object.keys(providers).find(key => cert.provider.includes(key))
  const gradientClass = providers[providerClass] || "from-blue-500 to-cyan-500"

  return (
    <motion.a
      href={cert.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40, rotateX: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.08,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -12, 
        rotateY: 5,
        scale: 1.03,
        transition: { duration: 0.3 }
      }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      className="group relative block rounded-2xl p-6 border border-slate-500/20 bg-gradient-to-br from-slate-900/90 to-slate-800/50 backdrop-blur-sm hover:border-purple-500/40 transition-all overflow-hidden cursor-pointer h-full flex flex-col"
    >
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
        initial={{ x: "-200%" }}
        animate={isHovered ? { x: "200%" } : { x: "-200%" }}
        transition={{ duration: 0.8 }}
      />

      {/* Provider badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.08 + 0.2 }}
        className={`absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r ${gradientClass} text-white text-xs font-semibold shadow-lg`}
      >
        {providerClass || "Certified"}
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex-grow flex flex-col">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 + 0.1 }}
          className="text-lg font-bold mb-2 group-hover:text-purple-400 transition-colors"
        >
          {cert.title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 + 0.15 }}
          className="text-sm text-slate-400 mb-3 flex-grow"
        >
          {cert.provider}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 + 0.2 }}
          className="text-slate-300 text-sm mb-4"
        >
          {cert.meta}
        </motion.p>

        {/* View link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 + 0.25 }}
          className="flex items-center gap-2 text-sm text-purple-400 font-medium mt-auto"
        >
          <span>View Certificate</span>
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
        </motion.div>
      </div>

      {/* Glow effect */}
      <motion.div
        className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-br ${gradientClass} blur-xl`}
        style={{ filter: "blur(20px)" }}
      />
    </motion.a>
  )
}
