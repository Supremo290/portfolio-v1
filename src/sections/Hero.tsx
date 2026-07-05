import { motion } from "framer-motion";
import { FiExternalLink, FiMail, FiBarChart2 } from "react-icons/fi";
import Button from "../components/Button";
import SocialIcons from "../components/SocialIcons";
import TechPill from "../components/TechPill";
import LottieHero from "../components/LottieHero";

const techStack = ["SQL", "Excel", "Power BI", "Python"];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 pb-16 px-6"
    >
      <div className="container-page grid md:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="md:-translate-x-6 lg:-translate-x-10"
        >
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-glow-300 text-base mb-6"
          >
            <FiBarChart2 /> Ready to Analyze
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl font-extrabold text-white leading-tight text-glow-soft"
          >
            Aspiring Data
            <br />
            <span className="bg-gradient-to-r from-primary-600 to-glow-400 bg-clip-text text-transparent text-glow">
              Analyst
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl text-slate-300 mt-4">
            Information Technology Student
            <span className="text-glow-400 cursor-blink">|</span>
          </motion.p>

          <motion.p variants={itemVariants} className="text-slate-400 mt-4 max-w-md">
            Passionate about analyzing data, building dashboards, and
            uncovering insights that help drive smarter business decisions.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mt-6">
            {techStack.map((tech) => (
              <TechPill key={tech} label={tech} />
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mt-8">
            <Button href="#portfolio" icon={<FiExternalLink />}>
              Projects
            </Button>
            <Button href="#contact" variant="outline" icon={<FiMail />}>
              Contact
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10">
            <SocialIcons />
          </motion.div>
        </motion.div>

        <LottieHero />
      </div>
    </section>
  );
}

export default Hero;
