import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, ScanLine, Power, ChevronDown } from "lucide-react";

export default function IronManMission() {
  const [transmissionOpen, setTransmissionOpen] = useState(false);

  return (
    <section className="ironman-mission">

      {/* BACKGROUND */}
      <div className="ironman-red-glow" />
      <div className="ironman-gold-glow" />
      <div className="ironman-grid" />

      {/* TOP HUD */}
      <motion.div
        className="ironman-topbar"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div>
          <span className="jarvis-dot" />
          J.A.R.V.I.S // ONLINE
        </div>

        <div>
          AVENGERS DATABASE // 01
        </div>
      </motion.div>

      <div className="ironman-layout">

        {/* LEFT SIDE */}
        <motion.div
          className="ironman-info"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >

          <p className="transmission-number">
            TRANSMISSION // 01 OF 06
          </p>

          <div className="ironman-line" />

          <p className="ironman-small">
            AVENGER IDENTIFIED
          </p>

          <h1>
            IRON
            <br />
            <span>MAN</span>
          </h1>

          <div className="identity-data">

            <div>
              <small>IDENTITY</small>
              <strong>TONY STARK</strong>
            </div>

            <div>
              <small>STATUS</small>
              <strong className="online">
                ● ONLINE
              </strong>
            </div>

            <div>
              <small>SYSTEM</small>
              <strong>MARK // ACTIVE</strong>
            </div>

          </div>

          <motion.button
            className="initialize-button"
            onClick={() =>
              setTransmissionOpen(true)
            }
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 0 40px rgba(255,70,20,.45)",
            }}
            whileTap={{ scale: 0.96 }}
          >
            <Power size={15} />

            INITIALIZE TRANSMISSION
          </motion.button>

        </motion.div>

        {/* CENTER CHARACTER */}

        <motion.div
          className="ironman-character"
          initial={{
            opacity: 0,
            y: 100,
            filter: "blur(15px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1.3,
            delay: 0.3,
          }}
        >

          {/* HUD RINGS */}

          <div className="ironman-hud-ring hud-ring-one" />

          <div className="ironman-hud-ring hud-ring-two" />

          <div className="ironman-hud-ring hud-ring-three" />

          <div className="target target-one">
            +
          </div>

          <div className="target target-two">
            +
          </div>

          <img
            src="/images/avengers/ironman.png"
            alt="Iron Man"
            className="ironman-image"
          />

          {/* SCANNER */}

          <motion.div
            className="ironman-scanner"
            animate={{
              top: ["15%", "80%", "15%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <div className="arc-reactor-glow" />

        </motion.div>

        {/* RIGHT SIDE HUD */}

        <motion.div
          className="ironman-right-hud"
          initial={{
            opacity: 0,
            x: 80,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
        >

          <div className="hud-module">

            <Cpu size={17} />

            <div>
              <small>AI SYSTEM</small>
              <strong>J.A.R.V.I.S</strong>
            </div>

          </div>

          <div className="hud-module">

            <ScanLine size={17} />

            <div>
              <small>SCAN STATUS</small>
              <strong>COMPLETE</strong>
            </div>

          </div>

          <div className="power-meter">

            <small>ARC REACTOR</small>

            <div className="power-circle">

              <div className="power-inner">
                100%
              </div>

            </div>

            <span>
              ENERGY OUTPUT
              <br />
              OPTIMAL
            </span>

          </div>

        </motion.div>

      </div>

      {/* TRANSMISSION POPUP */}

      <AnimatePresence>

        {transmissionOpen && (

          <motion.div
            className="ironman-transmission-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <motion.div
              className="ironman-transmission"
              initial={{
                opacity: 0,
                scale: 0.75,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
              }}
              transition={{
                duration: 0.5,
              }}
            >

              <div className="transmission-header">

                <span>
                  STARK INDUSTRIES
                </span>

                <span>
                  SECURE // 01
                </span>

              </div>

              <motion.div
                className="reactor-symbol"
                animate={{
                  boxShadow: [
                    "0 0 15px #65dfff",
                    "0 0 50px #65dfff",
                    "0 0 15px #65dfff",
                  ],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                <div />
              </motion.div>

              <p className="incoming">
                INCOMING TRANSMISSION
              </p>

              <h2>
                FOR CHETHU
              </h2>

              <div className="message-divider">
                <span />
                ♥
                <span />
              </div>

              <p className="ironman-message">

                Sometimes you remind me of Stark.

                <br /><br />

                Not because you own a billion-dollar
                suit — unfortunately.

                <br /><br />

                But because you have your own way of
                making everything around you more
                interesting.

                <br /><br />

                And across every universe, every
                timeline and every possibility...

                <br /><br />

                <strong>
                  there's still only one you I'd choose.
                </strong>

                ❤️

              </p>

              <div className="transmission-signature">
                TRANSMISSION RECEIVED //
                MEMORY 01 UNLOCKED
              </div>

              <button
                className="close-transmission"
                onClick={() =>
                  setTransmissionOpen(false)
                }
              >
                CONTINUE MISSION
              </button>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

      <div className="next-avenger-hint">
        <span>TRANSMISSION 02 DETECTED</span>
        <ChevronDown size={18} />
      </div>

    </section>
  );
}