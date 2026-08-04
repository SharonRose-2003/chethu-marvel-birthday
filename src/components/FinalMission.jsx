import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Lock,
  Sparkles,
  Shield,
  Zap,
  Play,
} from "lucide-react";

const finalPhotos = [
  "/images/finale/final1.png",
  "/images/finale/final2.png",
  "/images/finale/final3.png",
  "/images/finale/final4.png",
];

export default function FinalMission() {
    const [started, setStarted] = useState(false);
const [unlocked, setUnlocked] = useState(false);
const [scanStep, setScanStep] = useState(0);
const [showHero, setShowHero] = useState(false);
const [showBirthday, setShowBirthday] = useState(false);
const [showPhotos, setShowPhotos] = useState(false);
  // TRUE while you're building/testing.
  // Change to FALSE before sending the website to Chethu.
  const PREVIEW_MODE = false;

useEffect(() => {
  const checkBirthday = () => {
    const now = new Date();

    // August 18 at 12:00 AM
    const target = new Date(
      now.getFullYear(),
      7,  // August (0 = January)
      18,
      0,
      0,
      0
    );

    if (PREVIEW_MODE || now >= target) {
      setUnlocked(true);
    } else {
      setUnlocked(false);
    }
  };

  checkBirthday();

  const timer = setInterval(checkBirthday, 1000);

  return () => clearInterval(timer);
}, []);

  const startFinalTransmission = () => {
    setStarted(true);

    setTimeout(() => setScanStep(1), 700);
    setTimeout(() => setScanStep(2), 1600);
    setTimeout(() => setScanStep(3), 2500);
    setTimeout(() => setScanStep(4), 3400);
    setTimeout(() => setScanStep(5), 4300);

    setTimeout(() => {
      setShowHero(true);
    }, 5600);

    setTimeout(() => {
      setShowBirthday(true);
    }, 7600);
  };

  return (
    <section className="final-mission">

      <div className="final-stars" />
      <div className="final-vignette" />

      {/* TOP */}

      <div className="final-topbar">
        <span>AVENGERS INITIATIVE</span>

        <span className="final-red">
          FINAL PROTOCOL
        </span>

        <span>TRANSMISSION // 06 OF 06</span>
      </div>

      {/* LOCK / START SCREEN */}

      {!started && (
        <motion.div
          className="final-entry"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="final-avengers-ring"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="final-ring-inner">
              A
            </div>
          </motion.div>

          <small>
            FIVE TRANSMISSIONS RECEIVED
          </small>

          <h1>
            ONE FINAL
            <span>PROTOCOL.</span>
          </h1>

          <p>
            THE AVENGERS DATABASE HAS ONE
            LAST MESSAGE FOR YOU.
          </p>

          {unlocked ? (
            <motion.button
              className="begin-final"
              onClick={startFinalTransmission}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <Play size={15} />
              INITIATE FINAL PROTOCOL
            </motion.button>
          ) : (
            <div className="birthday-locked">
              <Lock size={16} />
              CLASSIFIED UNTIL 18 AUG // 00:00
            </div>
          )}

          {PREVIEW_MODE && (
            <div className="preview-warning">
              DEVELOPMENT PREVIEW // BIRTHDAY LOCK BYPASSED
            </div>
          )}
        </motion.div>
      )}

      {/* SCANNING */}

      <AnimatePresence>
        {started && !showHero && (
          <motion.div
            className="final-scanner"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.1,
            }}
          >
            <p>
              AVENGERS DATABASE // SEARCHING
            </p>

            <motion.div
              className="scanner-circle"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="scanner-circle-two" />
            </motion.div>

            <div className="hero-scan-list">

              <div
                className={
                  scanStep >= 1 ? "scan-complete" : ""
                }
              >
                <span>01</span>
                <strong>IRON MAN</strong>
                <em>
                  {scanStep >= 1 ? "MATCH FAILED" : "SCANNING"}
                </em>
              </div>

              <div
                className={
                  scanStep >= 2 ? "scan-complete" : ""
                }
              >
                <span>02</span>
                <strong>CAPTAIN AMERICA</strong>
                <em>
                  {scanStep >= 2 ? "MATCH FAILED" : "PENDING"}
                </em>
              </div>

              <div
                className={
                  scanStep >= 3 ? "scan-complete" : ""
                }
              >
                <span>03</span>
                <strong>THOR</strong>
                <em>
                  {scanStep >= 3 ? "MATCH FAILED" : "PENDING"}
                </em>
              </div>

              <div
                className={
                  scanStep >= 4 ? "scan-complete" : ""
                }
              >
                <span>04</span>
                <strong>SPIDER-MAN</strong>
                <em>
                  {scanStep >= 4 ? "MATCH FAILED" : "PENDING"}
                </em>
              </div>

              <div
                className={
                  scanStep >= 5 ? "scan-complete" : ""
                }
              >
                <span>05</span>
                <strong>DOCTOR STRANGE</strong>
                <em>
                  {scanStep >= 5 ? "MATCH FAILED" : "PENDING"}
                </em>
              </div>

            </div>

            {scanStep >= 5 && (
              <motion.div
                className="no-match"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: [0, 1, 0.5, 1],
                }}
              >
                NO AVENGER MATCH FOUND...
                <br />
                <strong>
                  SEARCHING UNKNOWN HERO.
                </strong>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* CHETHU REVEAL */}

      <AnimatePresence>
        {showHero && (
          <motion.div
            className="chethu-reveal"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
          >

            <motion.div
              className="hero-flash"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{
                duration: 1,
              }}
            />

            <motion.div
              className="chethu-copy"
              initial={{
                opacity: 0,
                x: -80,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.4,
                duration: 1,
              }}
            >
              <small>
                UNKNOWN SIGNATURE IDENTIFIED
              </small>

              <p>FINAL HERO // 06</p>

              <h2>
                CHETHU
              </h2>

              <div className="chethu-line" />

              <span>
                DESIGNATION
              </span>

              <strong>
                MY FAVOURITE HERO.
              </strong>

              <div className="hero-stats">
                <div>
                  <small>STRENGTH</small>
                  <b>UNMEASURABLE</b>
                </div>

                <div>
                  <small>HEART</small>
                  <b>100%</b>
                </div>

                <div>
                  <small>STATUS</small>
                  <b>IRREPLACEABLE</b>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="chethu-photo-area"
              initial={{
                opacity: 0,
                scale: 0.75,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.3,
                duration: 1.2,
              }}
            >
              <motion.div
                className="chethu-ring ring-a"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.div
                className="chethu-ring ring-b"
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <div className="chethu-photo">
                <img
                  src="/images/finale/chethu.png"
                  alt="Chethu"
                />

                <motion.div
                  className="chethu-scan-line"
                  animate={{
                    top: ["5%", "95%", "5%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
            </motion.div>

            {/* BIRTHDAY */}

            <AnimatePresence>
              {showBirthday && (
                <motion.div
                  className="birthday-reveal"
                  initial={{
                    opacity: 0,
                    y: 80,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 1,
                  }}
                >
                  <Sparkles size={20} />

                  <small>
                    FINAL TRANSMISSION DECRYPTED
                  </small>

                  <h1>
                    HAPPY
                    <span>BIRTHDAY</span>
                    CHETHU.
                  </h1>

                  <p>
                    So after Iron Man's technology,
                    Captain America's courage, Thor's
                    strength, Spider-Man's heart and
                    Doctor Strange's entire multiverse...
                  </p>

                  <strong>
                    I realised my favourite hero
                    was waiting at the end of this
                    story all along.
                  </strong>

                  <Heart size={25} />

                  <div className="birthday-letter">
                    <span>
                      FOR THE BIRTHDAY BOY //
                      CLASSIFIED ❤️
                    </span>

                    <p>
                      Happy birthday to the person who
                      somehow became such an important
                      part of my world.
                    </p>

                    <p>
                      Thank you for the laughs, the
                      memories, the random conversations,
                      the chaos, and all those little
                      moments that became much bigger
                      memories than either of us probably
                      realised.
                    </p>

                    <p>
                      I hope this year gives you more
                      reasons to smile, bigger dreams to
                      chase, ridiculous adventures to
                      remember, and everything you've
                      been working for.
                    </p>

                    <p>
                      And wherever life takes us, I hope
                      you always remember how incredibly
                      special you are to me.
                    </p>

                    <b>
                      Happy Birthday, Chethu. ❤️
                    </b>
                  </div>

                  {/* PHOTOS */}

                  <div className="final-memory-title">
                    <span>ARCHIVED MEMORIES</span>
                    <strong>
                      SOME OF MY FAVOURITE SCENES
                    </strong>
                  </div>

                  <div className="final-photo-strip">
                    {finalPhotos.map((photo, index) => (
                      <motion.div
                        key={photo}
                        className={`final-photo final-photo-${index + 1}`}
                        initial={{
                          opacity: 0,
                          y: 40,
                          rotate:
                            index % 2 === 0 ? -4 : 4,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.15,
                        }}
                        whileHover={{
                          scale: 1.07,
                          rotate: 0,
                          zIndex: 10,
                        }}
                      >
                        <img
                          src={photo}
                          alt={`Memory ${index + 1}`}
                        />

                        <span>
                          MEMORY // 0{index + 1}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* ENDING */}

                  <motion.div
                    className="love-3000"
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{ once: true }}
                  >
                    <small>
                      FINAL MESSAGE // 3000
                    </small>

                    <h2>
                      I LOVE YOU
                      <span>3000.</span>
                    </h2>

                    <Heart size={32} />

                    <p>
                      END OF TRANSMISSION
                    </p>
                  </motion.div>

                  <div className="marvel-credits">
                    <p>
                      A SHARON ROSE PRODUCTION
                    </p>

                    <span>
                      STARRING
                    </span>

                    <h3>
                      CHETHU
                    </h3>

                    <small>
                      MADE WITH AN UNREASONABLE
                      AMOUNT OF LOVE ❤️
                    </small>

                    <div>
                      AVENGERS INITIATIVE //
                      BIRTHDAY PROTOCOL COMPLETE
                    </div>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}