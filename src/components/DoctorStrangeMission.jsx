import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Heart,
  X,
  ChevronDown,
  Infinity as InfinityIcon,
} from "lucide-react";

const memories = [
  {
    id: 1,
    image: "/images/boyfriend/memories/memory1.jpg",
    code: "UNIVERSE 01",
    title: "A MOMENT I’D RELIVE",
    text: "Some moments pass. Some stay with you forever. This one became one of mine.",
  },
  {
    id: 2,
    image: "/images/boyfriend/memories/memory2.jpg",
    code: "UNIVERSE 02",
    title: "MY FAVOURITE VIEW",
    text: "There are billions of beautiful things in this universe. Somehow, you still win.",
  },
  {
    id: 3,
    image: "/images/boyfriend/memories/memory3.jpg",
    code: "UNIVERSE 03",
    title: "US.",
    text: "Not perfect. Not scripted. Just us — and somehow that's my favourite story.",
  },
  {
    id: 4,
    image: "/images/boyfriend/memories/memory4.jpg",
    code: "UNIVERSE 04",
    title: "ONE OF THOSE DAYS",
    text: "The kind of memory I randomly think about and immediately smile.",
  },
  {
    id: 5,
    image: "/images/boyfriend/memories/memory5.jpg",
    code: "UNIVERSE 05",
    title: "IN EVERY UNIVERSE",
    text: "Different timelines. Different worlds. Different versions of us. I'd still look for you.",
  },
];

export default function DoctorStrangeMission() {
  const [opened, setOpened] = useState([]);
  const [selectedMemory, setSelectedMemory] = useState(null);
  const [finalPortal, setFinalPortal] = useState(false);

  const openMemory = (memory) => {
    setSelectedMemory(memory);

    if (!opened.includes(memory.id)) {
      setOpened((prev) => [...prev, memory.id]);
    }
  };

  const progress = (opened.length / memories.length) * 100;
  const complete = opened.length === memories.length;

  return (
    <section className="strange-mission">

      {/* SPACE BACKGROUND */}
      <div className="strange-space" />
      <div className="strange-stars stars-one" />
      <div className="strange-stars stars-two" />

      {/* MAGIC PARTICLES */}
      <div className="magic-particles">
        {Array.from({ length: 24 }).map((_, index) => (
          <motion.span
            key={index}
            style={{
              left: `${(index * 37) % 100}%`,
              top: `${(index * 53) % 100}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.15, 1, 0.15],
              scale: [0.5, 1.3, 0.5],
            }}
            transition={{
              duration: 2.5 + (index % 5),
              repeat: Infinity,
              delay: index * 0.12,
            }}
          />
        ))}
      </div>

      {/* TOP HUD */}
      <motion.div
        className="strange-topbar"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <span>BLEECKER STREET // NEW YORK</span>

        <span className="strange-status">
          ✦ MULTIVERSE BREACH DETECTED
        </span>

        <span>TRANSMISSION // 05 OF 06</span>
      </motion.div>

      {/* INTRO */}
      <motion.div
        className="strange-heading"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        <div className="strange-eyebrow">
          <Sparkles size={13} />
          MYSTIC ARTS PROTOCOL
        </div>

        <h1>
          THE MULTIVERSE
          <span>OF US</span>
        </h1>

        <p>
          FIVE TIMELINES HAVE BEEN DISCOVERED.
          <br />
          ENTER EACH PORTAL TO RESTORE THE MEMORIES.
        </p>
      </motion.div>

      {/* MAIN CENTRAL SPELL */}
      <div className="central-spell">
        <motion.div
          className="spell-ring spell-ring-one"
          animate={{ rotate: 360 }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="spell-ring spell-ring-two"
          animate={{ rotate: -360 }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="spell-ring spell-ring-three"
          animate={{ rotate: 360 }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="spell-center">
          <InfinityIcon size={32} />

          <span>MULTIVERSE</span>

          <strong>
            {opened.length} / {memories.length}
          </strong>
        </div>
      </div>

      {/* MEMORY PORTALS */}
      <div className="memory-portals">
        {memories.map((memory, index) => {
          const isOpened = opened.includes(memory.id);

          return (
            <motion.button
              key={memory.id}
              className={`memory-portal portal-${index + 1} ${
                isOpened ? "portal-opened" : ""
              }`}
              onClick={() => openMemory(memory)}
              initial={{
                opacity: 0,
                scale: 0.6,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                type: "spring",
                stiffness: 70,
              }}
              whileHover={{
                scale: 1.05,
              }}
            >
              {/* PORTAL RINGS */}
              <motion.div
                className="portal-ring portal-ring-outer"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 10 + index,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.div
                className="portal-ring portal-ring-inner"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 7 + index,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* IMAGE */}
              <div className="portal-image-wrap">
                <img src={memory.image} alt={memory.title} />

                {!isOpened && (
                  <div className="portal-lock">
                    <Sparkles size={22} />
                    <span>ENTER</span>
                  </div>
                )}
              </div>

              {/* LABEL */}
              <div className="portal-label">
                <small>{memory.code}</small>
                <strong>
                  {isOpened ? memory.title : "TIMELINE LOCKED"}
                </strong>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* STABILITY METER */}
      <div className="multiverse-meter">
        <div className="meter-copy">
          <span>MULTIVERSE STABILITY</span>
          <strong>{Math.round(progress)}%</strong>
        </div>

        <div className="strange-meter-track">
          <motion.div
            className="strange-meter-fill"
            animate={{
              width: `${progress}%`,
            }}
            transition={{
              duration: 0.6,
            }}
          />
        </div>

        <small>
          {complete
            ? "ALL TIMELINES RESTORED"
            : "RESTORE ALL FIVE MEMORIES"}
        </small>
      </div>

      {/* MEMORY MODAL */}
      <AnimatePresence>
        {selectedMemory && (
          <motion.div
            className="memory-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="memory-modal-portal"
              initial={{
                scale: 0.2,
                rotate: -20,
              }}
              animate={{
                scale: 1,
                rotate: 0,
              }}
              exit={{
                scale: 0.2,
                opacity: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 80,
              }}
            >
              <motion.div
                className="modal-magic-ring modal-ring-one"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.div
                className="modal-magic-ring modal-ring-two"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <div className="memory-card">
                <button
                  className="memory-close"
                  onClick={() => setSelectedMemory(null)}
                >
                  <X size={18} />
                </button>

                <div className="memory-photo">
                  <img
                    src={selectedMemory.image}
                    alt={selectedMemory.title}
                  />
                </div>

                <div className="memory-copy">
                  <small>{selectedMemory.code}</small>

                  <h2>{selectedMemory.title}</h2>

                  <p>{selectedMemory.text}</p>

                  <Heart size={18} />

                  <span>TIMELINE RESTORED</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FINAL PORTAL BUTTON */}
      <AnimatePresence>
        {complete && !finalPortal && (
          <motion.button
            className="open-final-portal"
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            whileHover={{
              scale: 1.05,
            }}
            onClick={() => setFinalPortal(true)}
          >
            <Sparkles size={17} />
            OPEN THE FINAL PORTAL
          </motion.button>
        )}
      </AnimatePresence>

      {/* FINAL MULTIVERSE MESSAGE */}
      <AnimatePresence>
        {finalPortal && (
          <motion.div
            className="final-strange-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="giant-portal portal-giant-one"
              initial={{ scale: 0 }}
              animate={{
                scale: 1,
                rotate: 360,
              }}
              transition={{
                scale: {
                  duration: 1,
                  type: "spring",
                },
                rotate: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            />

            <motion.div
              className="giant-portal portal-giant-two"
              initial={{ scale: 0 }}
              animate={{
                scale: 1,
                rotate: -360,
              }}
              transition={{
                scale: {
                  duration: 1.2,
                },
                rotate: {
                  duration: 14,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            />

            <motion.div
              className="final-strange-message"
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.8,
              }}
            >
              <small>MULTIVERSE ANALYSIS COMPLETE</small>

              <h2>
                IN EVERY
                <span>UNIVERSE.</span>
              </h2>

              <p>
                Maybe there are infinite universes.
                Infinite versions of us.
                Infinite ways our stories could have gone.
              </p>

              <p>
                But if I had to search every timeline,
                cross every dimension and open every portal...
              </p>

              <strong>
                I'd still choose the universe
                where I found you.
              </strong>

              <Heart size={24} />

              <div className="final-transmission">
                TRANSMISSION 05 // COMPLETE
              </div>

              <button
                onClick={() => setFinalPortal(false)}
              >
                RETURN TO THIS UNIVERSE
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 06 TEASER */}
      {complete && (
        <motion.div
          className="final-mission-teaser"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <span>ONE FINAL TRANSMISSION REMAINS</span>
          <strong>06 // CLASSIFIED</strong>
          <ChevronDown size={18} />
        </motion.div>
      )}
    </section>
  );
}