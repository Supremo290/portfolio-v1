import { motion } from "framer-motion";
import { socialLinks } from "../data/socialLinks";

function SocialIcons() {
  return (
    <div className="flex items-center gap-4">
      {socialLinks.map(({ name, href, icon: Icon }) => (
        <motion.a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="flex items-center justify-center w-11 h-11 rounded-full glass-card text-glow-300 hover:text-white hover:shadow-glow-lg transition-all duration-300"
          whileHover={{ scale: 1.15, y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          <Icon size={18} />
        </motion.a>
      ))}
    </div>
  );
}

export default SocialIcons;
