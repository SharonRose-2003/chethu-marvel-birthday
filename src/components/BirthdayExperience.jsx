import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { birthdayData } from "../data/birthdayData";
import PortalTransition from "./PortalTransition";
import MarvelUniverse from "./MarvelUniverse";

export default function BirthdayExperience() {
  const [stage, setStage] = useState("birthday");

  return (
    <AnimatePresence mode="wait">

      {stage === "birthday" && (
        <motion.main
          key="birthday"
          className="birthday-screen"
          exit={{
            opacity: 0,
            scale: 1.1,
            filter: "blur(15px)",
          }}
          transition={{ duration: 0.8 }}
        >
          <div className="energy" />

          <motion.p
            className="system-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2 }}
          >
            SYSTEM OVERRIDE DETECTED
          </motion.p>

          <motion.div
            className="reveal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 2.2,
              duration: 1,
            }}
          >
            <motion.div
              className="protocol-active"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                delay: 2.5,
                duration: 0.6,
              }}
            >
              BIRTHDAY PROTOCOL ACTIVATED
            </motion.div>

            <motion.p
              className="hero-born"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5 }}
            >
              A HERO WAS BORN TODAY
            </motion.p>

            <motion.h1
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 4,
                duration: 1.2,
              }}
            >
              HAPPY
              <br />
              <strong>BIRTHDAY</strong>
            </motion.h1>

            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{ delay: 5 }}
            >
              {birthdayData.name}
            </motion.h2>

            <motion.p
              className="hero-message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5.8 }}
            >
              {birthdayData.subheadline}
            </motion.p>

            <motion.button
              className="enter-button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 6.5 }}
              whileHover={{
                scale: 1.08,
                boxShadow:
                  "0 0 40px rgba(212,36,42,.55)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setStage("portal")}
            >
              ENTER THE MULTIVERSE
            </motion.button>
          </motion.div>
        </motion.main>
      )}

      {stage === "portal" && (
        <PortalTransition
          key="portal"
          onComplete={() =>
            setStage("universe")
          }
        />
      )}

      {stage === "universe" && (
        <motion.div
          key="universe"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <MarvelUniverse />
        </motion.div>
      )}

    </AnimatePresence>
  );
}