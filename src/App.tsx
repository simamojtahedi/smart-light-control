import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Intro from "./components/intro";
import LightControl from "./components/light-control";
import Lamp from "./components/lamp";
import "./App.css";

function App() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setStep(1);
    }, 3000);
  }, []);

  return (
    <div>
      <Lamp step={step} />
      <motion.div
        style={{
          width: "100%",
          height: "100vh",
          zIndex: 1,
        }}
        initial={{
          background: "radial-gradient(circle, #e3dbc4 0%, #afab9e 100%)",
        }}
        animate={{
          background: "radial-gradient(circle, #373632 0%, #2d2d2d 100%)",
        }}
        transition={{
          duration: 1,
          delay: 4,
        }}
      >
        <Intro step={step} />
        <LightControl step={step} />
      </motion.div>
    </div>
  );
}

export default App;
