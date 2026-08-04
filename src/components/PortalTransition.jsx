import { motion } from "framer-motion";

export default function PortalTransition({ onComplete }) {
  return (
    <motion.div
      className="portal-transition"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="portal-warning"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 2,
          times: [0, 0.2, 0.75, 1],
        }}
      >
        <span>MULTIVERSE BREACH DETECTED</span>
        <small>DIMENSIONAL GATEWAY // INITIALIZING</small>
      </motion.div>

      <motion.div
        className="portal-container"
        initial={{ opacity: 0, scale: 0.05 }}
        animate={{
          opacity: [0, 1, 1, 1],
          scale: [0.05, 0.35, 1, 5],
          rotate: [0, 40, 150, 360],
        }}
        transition={{
          duration: 4.5,
          delay: 1.3,
          ease: "easeInOut",
          times: [0, 0.35, 0.75, 1],
        }}
      >
        <div className="portal-ring portal-ring-one" />
        <div className="portal-ring portal-ring-two" />
        <div className="portal-ring portal-ring-three" />

        <div className="portal-core">
          <div className="portal-space" />
        </div>
      </motion.div>

      <div className="spark-field">
        {Array.from({ length: 38 }).map((_, index) => (
          <i
            key={index}
            className="portal-spark"
            style={{
              "--i": index,
              "--angle": `${(index * 137.5) % 360}deg`,
              "--distance": `${130 + (index % 8) * 28}px`,
              "--delay": `${(index % 10) * 0.08}s`,
            }}
          />
        ))}
      </div>

      <motion.div
        className="portal-flash"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 1, 0] }}
        transition={{
          duration: 1.2,
          delay: 5.1,
          times: [0, 0.5, 0.7, 1],
        }}
        onAnimationComplete={onComplete}
      />
    </motion.div>
  );
}