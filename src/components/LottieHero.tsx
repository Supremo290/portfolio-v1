import { motion } from "framer-motion";
import Lottie from "lottie-react";
import developerAnimation from "../assets/developer-animation.json";

function LottieHero() {
  return (
    <motion.div
      className="relative flex items-center justify-center w-full max-w-lg md:max-w-3xl mx-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
    >
      <div className="glow-blob w-[28rem] h-[28rem] bg-glow-400/30" aria-hidden="true" />
      <Lottie
        animationData={developerAnimation}
        loop
        autoplay
        className="relative w-full max-w-md md:max-w-2xl drop-shadow-[0_0_40px_rgba(96,165,250,0.35)]"
      />
    </motion.div>
  );
}

export default LottieHero;
