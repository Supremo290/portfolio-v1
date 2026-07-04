import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href: string;
  variant?: "primary" | "outline";
  icon?: ReactNode;
}

function Button({ children, href, variant = "primary", icon }: ButtonProps) {
  const baseClasses =
    "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300";

  const variantClasses =
    variant === "primary"
      ? "bg-primary-600 text-white hover:bg-primary-900 shadow-glow hover:shadow-glow-lg"
      : "border border-glow-400/40 text-glow-300 hover:bg-glow-400/10 hover:shadow-glow";

  return (
    <motion.a
      href={href}
      className={`${baseClasses} ${variantClasses}`}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
      {icon}
    </motion.a>
  );
}

export default Button;
