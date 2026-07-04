import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
}

function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
    >
      <span className="text-glow-400 uppercase tracking-widest text-sm font-medium">
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">{title}</h2>
      <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-glow-400 rounded-full mx-auto mt-4" />
    </motion.div>
  );
}

export default SectionHeading;
