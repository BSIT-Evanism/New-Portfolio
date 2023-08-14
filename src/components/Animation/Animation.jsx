import { motion } from "framer-motion"
import styles from './Animation.module.scss'

function Animation({ children }) {
  return (
    <motion.div
      className={styles.home}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, x: 10 }}
      exit={{ opacity: 0 }}
      whileHover={{ scale: 1.2 }}
    >
      {children}
    </motion.div>

  )
}

export default Animation;
