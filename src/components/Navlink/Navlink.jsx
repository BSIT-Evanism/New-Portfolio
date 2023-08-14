import { NavLink } from "react-router-dom"
import styles from './Navlink.module.scss'
import { useLocation } from "react-router-dom"
import { motion } from "framer-motion";

function Navlink({ navTitle, navDirect }) {

  const { pathname } = useLocation();

  return (
    <>
      <NavLink className={styles.link} style={({ isActive }) => {
        return isActive ? { color: "gray" } : {}
      }} to={navDirect}>{navTitle}

        {pathname === navDirect &&
          <motion.div className={styles.marker}
            layoutId="rect"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.5 }}

          ></motion.div>
        }

      </NavLink>


    </>
  )
}

export default Navlink;
