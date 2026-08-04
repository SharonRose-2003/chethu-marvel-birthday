import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  LockKeyhole,
  Fingerprint,
  ChevronDown,
  BadgeCheck,
} from "lucide-react";

export default function CaptainAmericaMission() {
  const [fileOpen, setFileOpen] = useState(false);

  return (
    <section className="cap-mission">

      <div className="cap-grid" />
      <div className="cap-blue-glow" />
      <div className="cap-red-glow" />

      {/* TOP SECURITY BAR */}

      <motion.div
        className="cap-topbar"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div>
          <span className="shield-status-dot" />
          S.H.I.E.L.D. SECURE NETWORK
        </div>

        <div>LEVEL 7 CLEARANCE REQUIRED</div>
      </motion.div>

      <div className="cap-layout">

        {/* LEFT DOSSIER */}

        <motion.div
          className="cap-info"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="cap-transmission">
            TRANSMISSION // 02 OF 06
          </p>

          <div className="cap-line" />

          <p className="cap-label">
            AVENGER IDENTIFIED
          </p>

          <h1>
            CAPTAIN
            <br />
            <span>AMERICA</span>
          </h1>

          <div className="cap-details">

            <div>
              <small>IDENTITY</small>
              <strong>STEVE ROGERS</strong>
            </div>

            <div>
              <small>DESIGNATION</small>
              <strong>SUPER SOLDIER</strong>
            </div>

            <div>
              <small>STATUS</small>
              <strong className="cap-active">
                ● ACTIVE
              </strong>
            </div>

            <div>
              <small>SECURITY</small>
              <strong>CLASSIFIED</strong>
            </div>

          </div>

          <motion.button
            className="classified-button"
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 0 35px rgba(45,130,255,.35)",
            }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setFileOpen(true)}
          >
            <LockKeyhole size={15} />
            ACCESS CLASSIFIED FILE
          </motion.button>

        </motion.div>

        {/* CAPTAIN AMERICA */}

        <motion.div
          className="cap-character"
          initial={{
            opacity: 0,
            y: 100,
            filter: "blur(12px)",
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

          <div className="shield-ring shield-ring-1" />
          <div className="shield-ring shield-ring-2" />
          <div className="shield-ring shield-ring-3" />

          <div className="cap-target cap-target-one">
            +
          </div>

          <div className="cap-target cap-target-two">
            +
          </div>

          <img
            src="/images/avengers/captainamerica.png"
            alt="Captain America"
            className="cap-image"
          />

          <motion.div
            className="cap-scan-line"
            animate={{
              top: ["12%", "85%", "12%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />

        </motion.div>

        {/* RIGHT SECURITY PANEL */}

        <motion.div
          className="cap-security-panel"
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

          <div className="cap-module">
            <Fingerprint size={20} />

            <div>
              <small>BIOMETRIC SCAN</small>
              <strong>VERIFIED</strong>
            </div>
          </div>

          <div className="cap-module">
            <Shield size={20} />

            <div>
              <small>SHIELD STATUS</small>
              <strong>DEPLOYED</strong>
            </div>
          </div>

          <div className="cap-module">
            <BadgeCheck size={20} />

            <div>
              <small>THREAT LEVEL</small>
              <strong>FRIENDLY</strong>
            </div>
          </div>

          <div className="clearance-panel">

            <p>SECURITY CLEARANCE</p>

            <div className="clearance-circle">
              <span>07</span>
            </div>

            <small>
              LEVEL SEVEN
              <br />
              ACCESS GRANTED
            </small>

          </div>

        </motion.div>

      </div>

      {/* CLASSIFIED FILE */}

      <AnimatePresence>
        {fileOpen && (

          <motion.div
            className="cap-file-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <motion.div
              className="classified-file"
              initial={{
                opacity: 0,
                scale: 0.8,
                rotateX: 15,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateX: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.85,
              }}
              transition={{ duration: 0.5 }}
            >

              <div className="file-top">

                <div>
                  S.H.I.E.L.D.
                </div>

                <span>
                  EYES ONLY
                </span>

              </div>

              <div className="classified-stamp">
                CLASSIFIED
              </div>

              <div className="file-code">
                CASE FILE //
                BR-1808-C
              </div>

              <p className="file-subject">
                SUBJECT
              </p>

              <h2>CHETHU</h2>

              <div className="file-rule" />

              <div className="assessment">

                <span>
                  CAPTAIN'S ASSESSMENT
                </span>

                <p>
                  Strength isn't always about lifting
                  a shield or fighting an army.
                </p>

                <p>
                  Sometimes it's about the way someone
                  stands by the people they care about,
                  keeps going when things get difficult,
                  and somehow makes another person's
                  world feel safer just by being in it.
                </p>

                <p>
                  And that is one of the many things
                  I admire about you.
                </p>

                <p className="cap-romantic-line">
                  If every universe needed its own
                  Captain...
                  <br /><br />
                  I'd still choose you to be mine. ❤️
                </p>

              </div>

              <div className="file-verification">
                <BadgeCheck size={15} />
                CHARACTER ASSESSMENT //
                VERIFIED
              </div>

              <div className="file-footer">
                TRANSMISSION 02 RECEIVED //
                MEMORY UNLOCKED
              </div>

              <button
                className="close-file"
                onClick={() => setFileOpen(false)}
              >
                CLOSE CLASSIFIED FILE
              </button>

            </motion.div>

          </motion.div>

        )}
      </AnimatePresence>

      <motion.div
        className="thor-detected"
        animate={{
          opacity: [0.35, 1, 0.35],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <span>
          ⚡ UNKNOWN ENERGY SIGNATURE DETECTED
        </span>

        <small>
          TRANSMISSION 03 INCOMING
        </small>

        <ChevronDown size={18} />

      </motion.div>

    </section>
  );
}