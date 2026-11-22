import { motion } from "framer-motion";

// Fades content in when it enters the viewport and back out when it leaves.
export default function Reveal({ children, delay = 0, className = "", amount = 0.2 }) {
  return (
    <motion.div className={className}
      initial="hidden" whileInView="visible"
      viewport={{ once: false, amount }}
      variants={{
        hidden: { opacity: 0, y: 20, transition: { duration: 0.45, ease: "easeIn" } },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: "easeOut" } },
      }}>
      {children}
    </motion.div>
  );
}
