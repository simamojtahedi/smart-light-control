import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./intro.module.scss";

const Intro = ({ step }: { step: number }) => {
  const text = "Smart Light Control".split(" ");

  return (
    <div className={styles.intro_page_wrapper}>
      <div className={styles.page_content}>
        <div style={{ marginBottom: "2rem" }}>
          <AnimatePresence>
            {step == 0 &&
              text.map((el, i) => (
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 2,
                    delay: i / 5,
                  }}
                  key={i}
                >
                  {el}{" "}
                </motion.h1>
              ))}
          </AnimatePresence>
        </div>

        <div style={{ height: "70px" }}>
          <AnimatePresence>
            {step == 0 && (
              <motion.p
                key="line_1"
                initial={{ transform: "translateY(60px)" }}
                animate={{ transform: "translateY(0)" }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
              >
                Smart home can change the way
              </motion.p>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {step == 0 && (
              <motion.p
                key="line_2"
                initial={{ transform: "translateY(70px)" }}
                animate={{ transform: "translateY(0)" }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.4 }}
              >
                you live in the future.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Intro);
