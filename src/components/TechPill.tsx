import { motion } from "framer-motion";

interface TechPillProps {
  label: string;
}

function TechPill({ label }: TechPillProps) {
  return (
    <motion.span
      className="px-4 py-1.5 text-sm rounded-full glass-card text-glow-300 transition-shadow duration-300 hover:shadow-glow"
      whileHover={{ scale: 1.08, y: -2 }}
    >
      {label}
    </motion.span>
  );
}

export default TechPill;
