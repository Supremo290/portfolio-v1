import { motion } from "framer-motion";
import {
  FiDownload,
  FiExternalLink,
  FiMessageSquare,
  FiFolder,
  FiCode,
  FiBriefcase,
  FiArrowUpRight,
} from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import formalPicture from "../assets/Formal-Picture.jpg";

const stats = [
  {
    icon: FiFolder,
    value: "Coming Soon",
    title: "Projects",
    description:
      "Currently building hands-on Data Analytics projects using SQL, Python, Excel, Power BI, and Tableau.",
  },
  {
    icon: FiCode,
    value: "14+",
    title: "Technical Skills",
    description:
      "Continuously expanding my skills in data analytics, programming, databases, and visualization tools.",
  },
  {
    icon: FiBriefcase,
    value: "1 Internship",
    title: "Experience",
    description:
      "Frontend Developer Intern at the University of Saint Louis Tuguegarao (February 2026 – May 2026).",
  },
];

function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="About Me" title="Who I Am" />

        <div className="grid md:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl md:text-2xl text-glow-300 font-medium">
              Hello, I'm
            </h3>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-1 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary-600 to-glow-400 bg-clip-text text-transparent text-glow">
                Robbie Fuggan
              </span>
            </h2>

            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                I am Robbie Fuggan, an aspiring Data Analyst and AI Engineer
                with a strong passion for turning data into meaningful
                insights that help drive better decisions. I enjoy working
                with SQL, Python, Excel, Power BI, and modern data analytics
                tools to clean, analyze, and visualize data.
              </p>
              <p>
                I am continuously learning and building hands-on projects to
                strengthen my analytical and problem-solving skills while
                preparing for an entry-level career in Data Analytics and
                Artificial Intelligence.
              </p>
              <p>
                Although I have experience in frontend development, my career
                focus is now centered on Data Analytics, Business
                Intelligence, and AI. I am committed to continuous learning
                and applying data-driven solutions to solve real-world
                problems.
              </p>
            </div>

            <div className="glass-card rounded-xl p-5 mt-6 flex items-start gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-600/20 text-glow-300 shrink-0">
                <FiMessageSquare size={16} />
              </span>
              <p className="text-slate-300 italic text-sm md:text-base">
                "Turning data into meaningful insights that drive smarter
                decisions."
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Button href="/resume.pdf" download icon={<FiDownload />}>
                Download Resume
              </Button>
              <Button href="#portfolio" variant="outline" icon={<FiExternalLink />}>
                View Projects
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            <div
              className="glow-blob w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-primary-600/30"
              aria-hidden="true"
            />
            <img
              src={formalPicture}
              alt="Robbie Fuggan"
              className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full object-cover border border-glow-400/30 shadow-glow-lg"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-3 gap-6 mt-16"
        >
          {stats.map(({ icon: Icon, value, title, description }) => (
            <div
              key={title}
              className="glass-card rounded-2xl p-6 group hover:shadow-glow transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <span className="flex items-center justify-center w-11 h-11 rounded-full bg-primary-600/20 text-glow-300 shrink-0">
                  <Icon size={18} />
                </span>
                <span className="text-xl md:text-2xl font-bold text-white text-right">
                  {value}
                </span>
              </div>
              <h4 className="text-white font-semibold mt-2">{title}</h4>
              <p className="text-sm text-slate-400 mt-2 mb-4">{description}</p>
              <div className="flex justify-end">
                <FiArrowUpRight
                  className="text-glow-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  size={18}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default About;
