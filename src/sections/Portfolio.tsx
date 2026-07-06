import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import TechCard from "../components/TechCard";
import CertificateCard from "../components/CertificateCard";
import PortfolioTabs, { type PortfolioTabId } from "../components/PortfolioTabs";
import AnimatedSection from "../components/AnimatedSection";
import { projects } from "../data/projects";
import { skills } from "../data/skills";
import { certificates } from "../data/certificates";

function Portfolio() {
  const [activeTab, setActiveTab] = useState<PortfolioTabId>("projects");

  return (
    <AnimatedSection id="portfolio" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-glow-400 uppercase tracking-widest text-sm font-medium">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Featured Portfolio
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-glow-400 rounded-full mx-auto mt-4" />
          <p className="text-slate-300 max-w-2xl mx-auto mt-6 leading-relaxed">
            Explore my journey through projects, certifications, and technical
            skills. Each section represents my continuous learning and growth
            as an aspiring Data Analyst and AI Engineer.
          </p>
        </motion.div>

        <PortfolioTabs active={activeTab} onChange={setActiveTab} />

        <AnimatePresence mode="wait">
          {activeTab === "projects" && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
            >
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          )}

          {activeTab === "certificates" && (
            <motion.div
              key="certificates"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
            >
              {certificates.map((certificate, index) => (
                <CertificateCard
                  key={certificate.id}
                  certificate={certificate}
                  index={index}
                />
              ))}
            </motion.div>
          )}

          {activeTab === "techstack" && (
            <motion.div
              key="techstack"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"
            >
              {skills.map((skill, index) => (
                <TechCard key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
}

export default Portfolio;
