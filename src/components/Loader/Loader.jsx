import styles from "./Loader.module.scss";
import { slideUp } from "./animation-variant";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { useLayoutEffect } from "react";
import { useState } from "react";

const quotes = [
  "patience is a virtue",
  "you want to see? just count 1 2 3",
  "sometimes, a little bit more of time is need to save a lot of time",
];

function Loader() {
  const [quote, setQuote] = useState("");
  const [greet, setGreet] = useState(false);

  useLayoutEffect(() => {
    const picker = Math.floor(Math.random() * 2);
    setQuote(() => setQuote(quotes[picker]));
    setTimeout(() => {
      setGreet(true);
    }, 3000);
  }, []);

  return (
    <motion.div
      className={styles.bg}
      variants={slideUp}
      initial="initial"
      exit="exit"
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.h1
          className={styles.title}
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          exit={{ y: "100vh" }}
          transition={{ duration: 3, ease: [0.76, 0, 0.24, 1] }}
        >
          {greet ? (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h1>made with love by evan solanoy</h1>
            </motion.div>
          ) : (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h1>{quote}</h1>
            </motion.div>
          )}
        </motion.h1>
      </AnimatePresence>
    </motion.div>
  );
}
export default Loader;
