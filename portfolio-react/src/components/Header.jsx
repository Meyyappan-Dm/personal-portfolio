import { useState } from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { portfolio } from "../data/portfolio"

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-slate-900/50 z-50"
      initial={{ opacity: 0 }}
      style={{ opacity: scrollYProgress.get() > 0.05 ? 1 : 0 }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"
        style={{
          scaleX: scrollYProgress,
          transformOrigin: "left",
        }}
      />
    </motion.div>
  )
}

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50)
    
    // Update active section based on scroll position
    const sections = navLinks.map(link => link.href.substring(1))
    const current = sections.find(section => {
      const element = document.getElementById(section)
      if (element) {
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      }
      return false
    })
    if (current) setActiveSection(current)
  })

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "backdrop-blur-xl bg-[#0a0e1a]/95 border-b border-slate-500/20 shadow-lg shadow-black/20" 
            : "backdrop-blur-md bg-[#0a0e1a]/60 border-b border-slate-500/10"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.a 
            href="#home" 
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-500/30 bg-slate-900/60 font-bold text-sm uppercase tracking-wider hover:border-blue-500 hover:bg-slate-900/80 transition-all group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>{portfolio.name}</span>
            <motion.span 
              className="text-blue-500"
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              {portfolio.surname}
            </motion.span>
          </motion.a>

          <ul className="hidden md:flex items-center gap-1 text-sm text-slate-400">
            {navLinks.map(({ href, label }) => {
              const isActive = activeSection === href.substring(1)
              return (
                <li key={href}>
                  <motion.a
                    href={href}
                    className={`relative px-4 py-2 rounded-full transition-colors ${
                      isActive 
                        ? "text-blue-400 bg-blue-500/10" 
                        : "hover:bg-blue-500/10 hover:text-blue-400"
                    }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    {label}
                    {isActive && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 rounded-full border border-blue-500/30 bg-blue-500/5"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </motion.a>
                </li>
              )
            })}
          </ul>

          <motion.button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col gap-1.5 p-2 z-50 relative"
            whileTap={{ scale: 0.9 }}
          >
            <motion.span
              animate={{ 
                rotate: mobileOpen ? 45 : 0, 
                y: mobileOpen ? 6 : 0,
                backgroundColor: mobileOpen ? "#60a5fa" : "#ffffff"
              }}
              className="block w-6 h-0.5 bg-white rounded transition-colors"
            />
            <motion.span
              animate={{ opacity: mobileOpen ? 0 : 1 }}
              className="block w-6 h-0.5 bg-white rounded"
            />
            <motion.span
              animate={{ 
                rotate: mobileOpen ? -45 : 0, 
                y: mobileOpen ? -6 : 0,
                backgroundColor: mobileOpen ? "#60a5fa" : "#ffffff"
              }}
              className="block w-6 h-0.5 bg-white rounded transition-colors"
            />
          </motion.button>
        </nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-full left-0 right-0 bg-slate-900/98 backdrop-blur-xl border-b border-slate-500/20 shadow-xl"
            >
              <ul className="flex flex-col p-6 gap-2 text-slate-400">
                {navLinks.map(({ href, label }, i) => {
                  const isActive = activeSection === href.substring(1)
                  return (
                    <motion.li
                      key={href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <a
                        href={href}
                        onClick={() => setMobileOpen(false)}
                        className={`block py-3 px-4 rounded-lg transition-colors ${
                          isActive 
                            ? "bg-blue-500/20 text-blue-400 border border-blue-500/30" 
                            : "hover:bg-blue-500/10 hover:text-blue-400"
                        }`}
                      >
                        {label}
                      </a>
                    </motion.li>
                  )
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <ScrollProgress />
    </>
  )
}
