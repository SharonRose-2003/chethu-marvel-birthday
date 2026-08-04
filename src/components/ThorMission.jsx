import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, CloudLightning, Activity, ChevronDown } from "lucide-react";

export default function ThorMission() {
  const [summoned, setSummoned] = useState(false);

  return (
    <section className="thor-mission">

      <div className="thor-storm" />
      <div className="thor-cloud thor-cloud-one" />
      <div className="thor-cloud thor-cloud-two" />

      {/* RANDOM LIGHTNING FLASHES */}
      <motion.div
        className="thor-screen-flash"
        animate={{
          opacity: [0, 0, 0.18, 0, 0, 0.08, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatDelay: 2,
        }}
      />

      {/* LIGHTNING BOLTS */}
      <motion.div
        className="lightning lightning-one"
        animate={{
          opacity: [0, 1, 0, 0, 0.7, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />

      <motion.div
        className="lightning lightning-two"
        animate={{
          opacity: [0, 0, 1, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatDelay: 2,
        }}
      />

      {/* TOP BAR */}

      <motion.div
        className="thor-topbar"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <span>
          ⚡ ASGARDIAN ENERGY DETECTED
        </span>

        <span>
          AVENGERS DATABASE // 03
        </span>
      </motion.div>

      <div className="thor-layout">

        {/* LEFT */}

        <motion.div
          className="thor-info"
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
          }}
        >

          <p className="thor-transmission">
            TRANSMISSION // 03 OF 06
          </p>

          <div className="thor-line" />

          <p className="thor-label">
            ENERGY SOURCE IDENTIFIED
          </p>

          <h1>
            THOR
            <br />
            <span>ODINSON</span>
          </h1>

          <div className="thor-data">

            <div>
              <small>ORIGIN</small>
              <strong>ASGARD</strong>
            </div>

            <div>
              <small>DESIGNATION</small>
              <strong>GOD OF THUNDER</strong>
            </div>

            <div>
              <small>WEAPON</small>
              <strong>MJOLNIR</strong>
            </div>

            <div>
              <small>ENERGY LEVEL</small>
              <strong className="thor-danger">
                ⚡ EXTREME
              </strong>
            </div>

          </div>

          <motion.button
            className="summon-button"
            onClick={() => setSummoned(true)}
            whileHover={{
              scale: 1.06,
              boxShadow:
                "0 0 45px rgba(90,190,255,.55)",
            }}
            whileTap={{
              scale: 0.94,
            }}
          >
            <Zap size={17} />
            SUMMON MJOLNIR
          </motion.button>

        </motion.div>

        {/* THOR */}

        <motion.div
          className="thor-character"
          initial={{
            opacity: 0,
            y: -80,
            scale: 0.85,
            filter: "blur(15px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1.3,
            delay: 0.3,
          }}
        >

          <div className="thor-energy-ring thor-ring-one" />
          <div className="thor-energy-ring thor-ring-two" />
          <div className="thor-energy-ring thor-ring-three" />

          <motion.div
            className="thor-electric-aura"
            animate={{
              opacity: [0.25, 0.7, 0.3],
              scale: [0.95, 1.1, 0.95],
            }}
            transition={{
              duration: 1.7,
              repeat: Infinity,
            }}
          />

          <img
            src="/images/avengers/thor.png"
            alt="Thor"
            className="thor-image"
          />

          <motion.div
            className="thor-scan"
            animate={{
              top: ["15%", "85%", "15%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />

        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="thor-right"
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

          <div className="thor-module">
            <CloudLightning size={20} />

            <div>
              <small>ATMOSPHERE</small>
              <strong>UNSTABLE</strong>
            </div>
          </div>

          <div className="thor-module">
            <Zap size={20} />

            <div>
              <small>LIGHTNING OUTPUT</small>
              <strong>98.7%</strong>
            </div>
          </div>

          <div className="thor-module">
            <Activity size={20} />

            <div>
              <small>POWER SIGNATURE</small>
              <strong>ASGARDIAN</strong>
            </div>
          </div>

          <div className="storm-meter">

            <small>STORM INTENSITY</small>

            <motion.div
              className="storm-orb"
              animate={{
                boxShadow: [
                  "0 0 15px rgba(80,180,255,.3)",
                  "0 0 60px rgba(80,180,255,.8)",
                  "0 0 15px rgba(80,180,255,.3)",
                ],
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
              }}
            >
              <Zap size={32} />
            </motion.div>

            <strong>MAXIMUM</strong>

          </div>

        </motion.div>

      </div>

      {/* TRANSMISSION */}

      <AnimatePresence>
        {summoned && (

          <motion.div
            className="thor-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            {/* FLASH WHEN OPENING */}

            <motion.div
              className="mjolnir-flash"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            />

            <motion.div
              className="thor-message-box"
              initial={{
                opacity: 0,
                scale: 0.65,
                y: -80,
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
                duration: 0.6,
                delay: 0.2,
              }}
            >

              <div className="asgard-header">

                <span>
                  ASGARD // SECURE CHANNEL
                </span>

                <span>
                  03 // 06
                </span>

              </div>

              <motion.div
                className="mjolnir-symbol"
                animate={{
                  y: [0, -8, 0],
                  filter: [
                    "drop-shadow(0 0 5px #72cfff)",
                    "drop-shadow(0 0 25px #72cfff)",
                    "drop-shadow(0 0 5px #72cfff)",
                  ],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                ⚡
              </motion.div>

              <p className="worthy">
                WORTHINESS CONFIRMED
              </p>

              <h2>
                CHETHU
              </h2>

              <div className="thor-message-line" />

              <p className="thor-message">

                They say only the worthy can lift
                Mjolnir.

                <br /><br />

                But being worthy isn't about being
                perfect.

                <br /><br />

                It's about having strength when it
                matters, protecting the people you
                love, and still having a heart beneath
                all that power.

                <br /><br />

                And if Thor crossed nine realms looking
                for someone special...

                <br /><br />

                <strong>
                  I'd still tell him I already found
                  mine. ⚡❤️
                </strong>

              </p>

              <div className="thor-complete">
                ⚡ TRANSMISSION 03 RECEIVED
                <br />
                ASGARDIAN MEMORY UNLOCKED
              </div>

              <button
                className="close-thor"
                onClick={() => setSummoned(false)}
              >
                RETURN TO EARTH
              </button>

            </motion.div>

          </motion.div>

        )}
      </AnimatePresence>

      {/* SPIDER-MAN TEASER */}

      <motion.div
        className="spider-detected"
        animate={{
          y: [0, 5, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >

        <span>
          ◉ UNIDENTIFIED WEB SIGNATURE DETECTED
        </span>

        <small>
          QUEENS, NEW YORK // TRANSMISSION 04
        </small>

        <ChevronDown size={18} />

      </motion.div>

    </section>
  );
}