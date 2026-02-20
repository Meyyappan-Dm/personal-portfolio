import { motion } from "framer-motion"
import { portfolio } from "../data/portfolio"
import { useState } from "react"

const socialLinks = [
  {
    name: "Email",
    href: `mailto:${portfolio.contact.email}`,
    icon: "✉️",
    color: "from-blue-500 to-cyan-500",
    value: portfolio.contact.email,
  },
  {
    name: "LinkedIn",
    href: portfolio.contact.linkedin,
    icon: "💼",
    color: "from-blue-600 to-blue-700",
    value: "linkedin.com/in/meyyappan-dm",
  },
  {
    name: "GitHub",
    href: portfolio.contact.github,
    icon: "💻",
    color: "from-gray-700 to-gray-900",
    value: "github.com/Meyyappan-Dm",
  },
]

export default function Contact() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent"
          >
            Let's Connect
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-xl mx-auto"
          >
            Feel free to reach out for collaborations, internships, or just to talk
            about ML and data. I'm always open to discussing new opportunities.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {socialLinks.map((link, i) => (
            <SocialCard
              key={link.name}
              link={link}
              index={i}
              isHovered={hoveredIndex === i}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <motion.p
            className="text-slate-400 mb-6"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Available for opportunities
          </motion.p>
          <motion.a
            href={`mailto:${portfolio.contact.email}`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all"
          >
            Send me an email
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

function SocialCard({ link, index, isHovered, onHoverStart, onHoverEnd }) {
  return (
    <motion.a
      href={link.href}
      target={link.href.startsWith("mailto:") ? undefined : "_blank"}
      rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      initial={{ opacity: 0, y: 40, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -12, 
        rotateY: 5,
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      className="group relative rounded-2xl p-8 border border-slate-500/20 bg-gradient-to-br from-slate-900/90 to-slate-800/50 backdrop-blur-sm hover:border-blue-500/40 transition-all overflow-hidden cursor-pointer text-center"
    >
      {/* Gradient overlay */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
      />

      {/* Icon */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
        className="text-5xl mb-4 relative z-10"
      >
        {link.icon}
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3 }}
          className="text-xs uppercase tracking-widest text-slate-500 mb-3 font-semibold"
        >
          {link.name}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.4 }}
          className="text-slate-300 text-sm break-all group-hover:text-blue-400 transition-colors"
        >
          {link.value}
        </motion.p>
      </div>

      {/* Glow effect */}
      <motion.div
        className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-br ${link.color} blur-xl`}
        style={{ filter: "blur(20px)" }}
      />
    </motion.a>
  )
}
