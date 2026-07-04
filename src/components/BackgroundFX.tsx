import { motion, useScroll, useSpring, useTransform } from "framer-motion";

function BackgroundFX() {
  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, { stiffness: 60, damping: 25, mass: 0.5 });

  const yBlob1 = useTransform(smoothScrollY, [0, 2400], [0, -160]);
  const yBlob2 = useTransform(smoothScrollY, [0, 2400], [0, 220]);
  const xBlob2 = useTransform(smoothScrollY, [0, 2400], [0, -100]);
  const yBlob3 = useTransform(smoothScrollY, [0, 2400], [0, -120]);
  const xBlob3 = useTransform(smoothScrollY, [0, 2400], [0, 80]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-navy-950">
      <div className="absolute inset-0 bg-grid" />
      <motion.div
        style={{ y: yBlob1 }}
        className="glow-blob w-[500px] h-[500px] bg-primary-600/25 top-[-150px] left-[-150px]"
        aria-hidden="true"
      />
      <motion.div
        style={{ y: yBlob2, x: xBlob2 }}
        className="glow-blob w-[450px] h-[450px] bg-glow-400/15 top-1/3 right-[-200px]"
        aria-hidden="true"
      />
      <motion.div
        style={{ y: yBlob3, x: xBlob3 }}
        className="glow-blob w-[420px] h-[420px] bg-purple-600/20 bottom-[-150px] left-1/4"
        aria-hidden="true"
      />
    </div>
  );
}

export default BackgroundFX;
