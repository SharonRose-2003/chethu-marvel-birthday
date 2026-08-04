import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, ChevronDown } from "lucide-react";

const webMessages = [
  {
    id: 1,
    number: "01",
    title: "MY SAFE PLACE",
    message:
      "No matter how chaotic the world gets, somehow being with you makes everything feel a little calmer.",
  },
  {
    id: 2,
    number: "02",
    title: "MY FAVOURITE PERSON",
    message:
      "Out of billions of people in this universe, somehow I found the one person I never get tired of choosing.",
  },
  {
    id: 3,
    number: "03",
    title: "MY HOME",
    message:
      "Home stopped being just a place. Somewhere along the way, it started feeling a lot like you.",
  },
];

export default function SpiderManMission() {
  const [openedTargets, setOpenedTargets] = useState([]);
  const [secretOpen, setSecretOpen] = useState(false);

  const openTarget = (id) => {
    if (!openedTargets.includes(id)) {
      setOpenedTargets((prev) => [...prev, id]);
    }
  };

  const allUnlocked = openedTargets.length === 3;

  return (
    <section className="spiderman-mission">

      {/* BACKGROUND */}

      <div className="spider-sky" />
      <div className="spider-city" />

      <div className="spider-building building-one" />
      <div className="spider-building building-two" />
      <div className="spider-building building-three" />
      <div className="spider-building building-four" />

      <div className="spider-web-corner web-corner-left" />
      <div className="spider-web-corner web-corner-right" />

      {/* TOP */}

      <motion.div
        className="spider-top"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span>QUEENS // NEW YORK</span>

        <span className="spider-sense">
          ● SPIDER-SENSE ACTIVE
        </span>

        <span>TRANSMISSION // 04 OF 06</span>
      </motion.div>

      {/* TITLE */}

      <motion.div
        className="spider-title"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <small>FRIENDLY NEIGHBOURHOOD</small>

        <h1>
          SPIDER
          <span>MAN</span>
        </h1>

        <p>
          THREE WEB SIGNALS DETECTED
          <br />
          FIND WHAT'S CAUGHT IN THE WEB.
        </p>
      </motion.div>

     

      {/* SPIDER-MAN */}

<div className="spiderman-character">

  <motion.div
    className="spider-swing-web"
    animate={{
      rotate: [-2, 2, -2],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  <motion.img
    src="/images/avengers/spiderman.png"
    alt="Spider-Man"
    className="spiderman-image"
    animate={{
      y: [0, -10, 0],
      rotate: [-1, 1, -1],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  <motion.div
    className="thwip"
    initial={{
      opacity: 0,
      scale: 0,
    }}
    whileInView={{
      opacity: 1,
      scale: 1,
    }}
    viewport={{ once: true }}
    transition={{
      delay: 0.7,
      type: "spring",
    }}
  >
    THWIP!
  </motion.div>

</div>



      {/* WEB TARGETS */}

      <div className="web-targets">

        {webMessages.map((item, index) => {
          const opened = openedTargets.includes(item.id);

          return (
            <motion.button
              key={item.id}
              className={`web-target target-${index + 1} ${
                opened ? "web-opened" : ""
              }`}
              onClick={() => openTarget(item.id)}
              initial={{
                opacity: 0,
                scale: 0,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.8 + index * 0.25,
                type: "spring",
              }}
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >

              <span className="target-ring ring-one" />
              <span className="target-ring ring-two" />

              {!opened ? (
                <>
                  <span className="web-icon">
                    🕸️
                  </span>

                  <small>
                    WEB SIGNAL
                  </small>

                  <strong>
                    {item.number}
                  </strong>

                  <em>
                    CLICK TO THWIP
                  </em>
                </>
              ) : (
                <motion.div
                  className="web-message"
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                >
                  <Heart size={17} />

                  <strong>
                    {item.title}
                  </strong>

                  <p>
                    {item.message}
                  </p>
                </motion.div>
              )}

            </motion.button>
          );
        })}

      </div>

      {/* PROGRESS */}

      <div className="spider-progress">

        <span>
          WEB MEMORY RECOVERY
        </span>

        <div className="progress-track">
          <motion.div
            className="progress-fill"
            animate={{
              width: `${(openedTargets.length / 3) * 100}%`,
            }}
          />
        </div>

        <strong>
          {openedTargets.length} / 3
        </strong>

      </div>

      {/* SECRET BUTTON */}

      <AnimatePresence>
        {allUnlocked && !secretOpen && (

          <motion.button
            className="secret-web-button"
            initial={{
              opacity: 0,
              scale: 0.6,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => setSecretOpen(true)}
            whileHover={{
              scale: 1.05,
            }}
          >
            <Sparkles size={16} />

            PULL THE FINAL WEB

          </motion.button>

        )}
      </AnimatePresence>

      {/* FINAL LOVE MESSAGE */}

      <AnimatePresence>
        {secretOpen && (

          <motion.div
            className="spider-secret-overlay"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >

            <motion.div
              className="web-pull-left"
              initial={{ width: 0 }}
              animate={{ width: "50vw" }}
              transition={{ duration: 0.7 }}
            />

            <motion.div
              className="web-pull-right"
              initial={{ width: 0 }}
              animate={{ width: "50vw" }}
              transition={{ duration: 0.7 }}
            />

            <motion.div
              className="spider-love-note"
              initial={{
                opacity: 0,
                scale: 0.4,
                rotate: -8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: -2,
              }}
              transition={{
                delay: 0.5,
                type: "spring",
              }}
            >

              <div className="comic-label">
                SECRET MESSAGE
              </div>

              <h2>
                HEY,
                <br />
                CHETHU.
              </h2>

              <p>
                Spider-Man says everyone gets one
                person worth swinging across the whole
                city for.
              </p>

              <p>
                Someone who makes the ordinary days
                better, the difficult days easier,
                and the happy days something you wish
                could last a little longer.
              </p>

              <p>
                So if I had a web that could reach
                anywhere in this universe...
              </p>

              <strong>
                I'd still use it to find my way
                back to you. 🕷️❤️
              </strong>

              <div className="spider-transmission-complete">
                TRANSMISSION 04 // COMPLETE
              </div>

              <button
                onClick={() => setSecretOpen(false)}
                className="close-spider-note"
              >
                THWIP BACK TO QUEENS
              </button>

            </motion.div>

          </motion.div>

        )}
      </AnimatePresence>

      {/* STRANGE TEASER */}

      {allUnlocked && (
        <motion.div
          className="strange-signal"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1,
          }}
        >
          <motion.div
            className="mini-portal"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <span>
            INTERDIMENSIONAL ANOMALY DETECTED
          </span>

          <small>
            BLEECKER STREET // TRANSMISSION 05
          </small>

          <ChevronDown size={17} />

        </motion.div>
      )}

    </section>
  );
}