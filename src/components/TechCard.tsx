import { motion } from "framer-motion";
import type { Skill } from "../types";

interface TechCardProps {
  skill: Skill;
  index: number;
}

function TechCard({ skill, index }: TechCardProps) {
  const Icon = skill.icon;

  return (
    <motion.div
      className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center gap-3 group hover:shadow-glow transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      whileHover={{ y: -6, scale: 1.04 }}
    >
      <span className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-600/20 text-glow-300 group-hover:text-white group-hover:bg-primary-600/40 transition-colors duration-300">
        {typeof Icon === "string" ? (
          <img src={Icon} alt={`${skill.name} logo`} className="w-6 h-6 object-contain" />
        ) : (
          <Icon size={22} />
        )}
      </span>
      <span className="text-sm font-medium text-slate-200 text-center">
        {skill.name}
      </span>
    </motion.div>
  );
}

export default TechCard;
