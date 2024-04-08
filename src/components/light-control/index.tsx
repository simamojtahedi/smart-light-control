import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CircularSlider from "react-circular-slider-svg";
import { FaPercent } from "react-icons/fa6";
import styles from "./light.module.scss";

const LightControl = ({ step }: { step: number }) => {
  const [isOn, setIsOn] = useState(true);
  const [sliderValue, setSliderValue] = useState(50);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    if (isOn) setSliderValue(50);
  };

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <div className={styles.light_page_wrapper}>
      <div className={styles.page_content}>
        {step == 1 && (
          <motion.div
            key="shadow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
            className={styles.lamp_shadow}
            style={{
              background: `rgba(244, 220, 86, ${
                Number(sliderValue.toFixed(0)) / 200
              })`,
              boxShadow: `0 0 150px rgba(244, 220, 86, ${
                Number(sliderValue.toFixed(0)) / 200
              })`,
            }}
          ></motion.div>
        )}

        <AnimatePresence>
          <div className={styles.light_page_time}>
            {step == 1 && (
              <motion.div
                key="light_page_am_time"
                initial={{ opacity: 0, transform: "translateX(-60px)" }}
                animate={{ opacity: 1, transform: "translateX(0)" }}
                transition={{ duration: 1, delay: 1 }}
              >
                <span>7:00</span>
                <span>AM</span>
              </motion.div>
            )}
            {step == 1 && (
              <motion.div
                key="light_page_divider_time"
                initial={{ opacity: 0, transform: "translateX(-60px)" }}
                animate={{ opacity: 1, transform: "translateX(0)" }}
                transition={{ duration: 1.5, delay: 1 }}
                className={styles.divider}
              ></motion.div>
            )}

            {step == 1 && (
              <motion.div
                key="light_page_pm_time"
                initial={{ opacity: 0, transform: "translateX(-60px)" }}
                animate={{ opacity: 1, transform: "translateX(0)" }}
                transition={{ duration: 2, delay: 1 }}
              >
                <span>9:00</span>
                <span>PM</span>
              </motion.div>
            )}
          </div>
        </AnimatePresence>

        <AnimatePresence>
          {step == 1 && (
            <motion.div
              key="light_page_slider"
              initial={{ opacity: 0, transform: "translateY(60px)" }}
              animate={{ opacity: 1, transform: "translateY(0)" }}
              transition={{ duration: 2, delay: 1 }}
              className={styles.light_page_slider}
            >
              <AnimatePresence>
                <motion.span
                  key="light_page_slider_label_1"
                  initial={{ opacity: 0, transform: "translateY(60px)" }}
                  animate={{ opacity: 1, transform: "translateY(0)" }}
                  transition={{ duration: 2.5, delay: 1 }}
                  className={styles.light_page_slider_label_1}
                >
                  Low
                </motion.span>
              </AnimatePresence>
              <CircularSlider
                handle1={{
                  value: sliderValue,
                  onChange: (val) => setSliderValue(val),
                }}
                arcColor="#F4DC56"
                startAngle={20}
                endAngle={160}
                size={360}
                trackWidth={2}
                minValue={1}
                maxValue={100}
                angleType={{
                  direction: "cw",
                  axis: "+x",
                }}
                arcBackgroundColor="#4b4942"
                disabled={!isOn}
              />
              <AnimatePresence>
                <motion.span
                  key="light_page_slider_label_2"
                  initial={{ opacity: 0, transform: "translateY(60px)" }}
                  animate={{ opacity: 1, transform: "translateY(0)" }}
                  transition={{ duration: 3, delay: 1 }}
                  className={styles.light_page_slider_label_2}
                >
                  High
                </motion.span>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {step == 1 && (
            <motion.div
              key="footer_data"
              initial={{ opacity: 0, transform: "translateY(60px)" }}
              animate={{ opacity: 1, transform: "translateY(0)" }}
              transition={{ duration: 1.5, delay: 2 }}
            >
              <h2>
                {sliderValue.toFixed(0)}
                <FaPercent size={28} />
              </h2>
              <h5>Brightness</h5>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {step == 1 && (
            <motion.div
              key="thermometer"
              initial={{ opacity: 0, transform: "translateX(60px)" }}
              animate={{ opacity: 1, transform: "translateX(0)" }}
              transition={{ duration: 2, delay: 1 }}
              className={styles.thermometer}
            >
              <div
                className={styles.switch}
                onClick={toggleSwitch}
                style={{
                  alignItems: isOn ? "flex-start" : "flex-end",
                  background: isOn ? "#696238" : "#484743",
                }}
              >
                <motion.div
                  className={styles.handle}
                  layout
                  transition={spring}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LightControl;
