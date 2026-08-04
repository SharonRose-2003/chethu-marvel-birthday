import { motion } from "framer-motion";
import { ChevronDown, Shield, Zap, Sparkles } from "lucide-react";
import IronManMission from "./IronManMission";
import CaptainAmericaMission from "./CaptainAmericaMission";
import ThorMission from "./ThorMission";
import SpiderManMission from "./SpiderManMission";
import DoctorStrangeMission from "./DoctorStrangeMission";
import FinalMission from "./FinalMission";

export default function MarvelUniverse() {
  return (
    <main className="marvel-universe">

      <div className="universe-stars stars-one" />
      <div className="universe-stars stars-two" />

      <div className="cosmic-cloud cloud-one" />
      <div className="cosmic-cloud cloud-two" />

      <section className="multiverse-hero">

        <motion.div
          className="universe-code"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span className="online-dot" />
          DIMENSION // EARTH-616
        </motion.div>

        <motion.p
          className="welcome-small"
          initial={{
            opacity: 0,
            letterSpacing: "2px",
          }}
          animate={{
            opacity: 1,
            letterSpacing: "8px",
          }}
          transition={{
            delay: 1.2,
            duration: 1.5,
          }}
        >
          WELCOME TO THE MULTIVERSE
        </motion.p>

        <motion.h1
          initial={{
            opacity: 0,
            y: 50,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            delay: 1.5,
            duration: 1,
          }}
        >
          CHETHU
        </motion.h1>

        <motion.div
          className="hero-designation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.3 }}
        >
          <span />
          HERO DESIGNATION
          <span />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.7 }}
        >
          THE CHOSEN ONE
        </motion.h2>

        <motion.p
          className="multiverse-description"
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ delay: 3.2 }}
        >
          Across infinite realities, countless heroes have risen.
          <br />
          But in this universe, today belongs to only one.
        </motion.p>

        <motion.div
          className="hero-symbols"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.8 }}
        >
          <div className="symbol">
            <Shield size={20} />
          </div>

          <div className="symbol main-symbol">
            <Sparkles size={24} />
          </div>

          <div className="symbol">
            <Zap size={20} />
          </div>
        </motion.div>

        <motion.div
          className="mission-notice"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ delay: 4.3 }}
        >
          <small>NEW MISSION AVAILABLE</small>

          <strong>
            ASSEMBLE THE AVENGERS
          </strong>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5 }}
        >
          <span>BEGIN MISSION</span>

          <ChevronDown
            size={22}
            className="scroll-arrow"
          />
        </motion.div>

      </section>

      <section className="mission-preview">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          AVENGERS INITIATIVE
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          YOUR HEROES ARE
          <br />
          <span>WAITING.</span>
        </motion.h2>

        <motion.div
          className="classified-box"
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
        >
          <div className="classified-header">
            S.H.I.E.L.D. // CLASSIFIED
          </div>

          <p>
            Six transmissions have been detected across
            the multiverse.
          </p>

          <p>
            Each Avenger is holding something that belongs
            to you.
          </p>

          <strong>
            FIND THEM. UNLOCK THEM ALL.
          </strong>
        </motion.div>

      </section>
          <IronManMission />
          <CaptainAmericaMission />
          <ThorMission />
          <SpiderManMission />
          <DoctorStrangeMission />
          <FinalMission />

    </main>
  );
}