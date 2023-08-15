import useMousePosition from "../../utils/useMousePosition";
import styles from "./Cursor.module.scss"
import { motion } from "framer-motion";


function Cursor({ size }) {

  const { x, y } = useMousePosition();
  const sizes = 30;


  return (
    <motion.div className={styles.cursor}
      animate={{ x: x - sizes / 2, y: y - sizes / 2, scale: size }}
      transition={{ type: "tween", ease: "backOut" }}


    ></motion.div>
  )
}

export default Cursor;
