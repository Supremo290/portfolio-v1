import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { skills } from "../data/skills";
import { experience } from "../data/experience";

function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="About Me" title="Who I Am" />

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-slate-300 leading-relaxed mb-8">
              I'm a frontend developer who loves turning ideas into fast,
              accessible, and visually engaging web experiences. I focus on
              clean architecture, smooth animation, and building interfaces
              people enjoy using.
            </p>

            <h3 className="text-white font-semibold mb-4">Skills &amp; Tools</h3>
            <div className="grid grid-cols-4 gap-4">
              {skills.map(({ name, icon: Icon }) => (
                <div
                  key={name}
                  className="glass-card rounded-xl flex flex-col items-center justify-center gap-2 py-4 text-glow-300 hover:text-white hover:shadow-glow transition-all"
                >
                  <Icon size={26} />
                  <span className="text-xs text-slate-300">{name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {experience.map((item) => (
              <div key={item.title} className="glass-card rounded-xl p-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-semibold">{item.title}</h4>
                  <span className="text-xs text-glow-400">{item.period}</span>
                </div>
                <p className="text-sm text-glow-300 mb-2">{item.organization}</p>
                <p className="text-sm text-slate-400">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
