import { motion } from "framer-motion"
import { portfolio } from "../data/portfolio"
import { useState } from "react"

const skillGroups = [
  { title: "Languages", skills: portfolio.skills.languages, color: "from-blue-500 to-cyan-500" },
  { title: "ML / DL & Libraries", skills: portfolio.skills.mlLibraries, color: "from-purple-500 to-pink-500" },
  { title: "Tools & Platforms", skills: portfolio.skills.tools, color: "from-green-500 to-emerald-500" },
  { title: "Other Strengths", skills: portfolio.skills.other, color: "from-orange-500 to-red-500" },
]

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null)

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none" />
      
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
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
          >
            Skills & Tech Stack
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, i) => (
            <SkillGroup
              key={group.title}
              group={group}
              index={i}
              hoveredSkill={hoveredSkill}
              setHoveredSkill={setHoveredSkill}
            />
          ))}
        </div>

        {/* Floating skill chips animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {portfolio.skills.languages.slice(0, 3).map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.1 }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-400 text-sm font-medium backdrop-blur-sm"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function SkillGroup({ group, index, hoveredSkill, setHoveredSkill }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateY: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative rounded-2xl p-6 border border-slate-500/20 bg-gradient-to-br from-slate-900/80 to-slate-800/40 backdrop-blur-sm hover:border-purple-500/40 transition-all overflow-hidden group"
    >
      {/* Gradient overlay */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
      />

      {/* Content */}
      <div className="relative z-10">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.1 }}
          className="text-xs uppercase tracking-widest text-slate-500 mb-6 font-semibold"
        >
          {group.title}
        </motion.h3>
        
        <div className="flex flex-wrap gap-2">
          {group.skills.map((skill, j) => (
            <SkillChip
              key={skill}
              skill={skill}
              index={j}
              groupIndex={index}
              color={group.color}
              isHovered={hoveredSkill === `${index}-${j}`}
              onHoverStart={() => setHoveredSkill(`${index}-${j}`)}
              onHoverEnd={() => setHoveredSkill(null)}
            />
          ))}
        </div>
      </div>

      {/* Glow effect */}
      <motion.div
        className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-br ${group.color} blur-xl`}
        style={{ filter: "blur(20px)" }}
      />
    </motion.div>
  )
}

function SkillChip({ skill, index, groupIndex, color, isHovered, onHoverStart, onHoverEnd }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        delay: groupIndex * 0.1 + index * 0.03,
        type: "spring",
        stiffness: 200
      }}
      whileHover={{ 
        scale: 1.15, 
        y: -4,
        rotate: [0, -5, 5, -5, 0],
        transition: { duration: 0.5 }
      }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      className={`relative px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all ${
        isHovered
          ? `bg-gradient-to-r ${color} text-white border-transparent shadow-lg`
          : "bg-slate-800/80 border border-slate-500/30 text-slate-300 hover:border-purple-500/50"
      }`}
    >
      {skill}
      {isHovered && (
        <motion.div
          layoutId="skillHover"
          className={`absolute inset-0 rounded-full bg-gradient-to-r ${color} -z-10`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </motion.span>
  )
}
