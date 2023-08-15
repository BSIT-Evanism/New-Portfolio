import { useState } from 'react';
import Cursor from '../Cursor/Cursor';
import styles from './NavBar.module.scss'
import { NavLink } from "react-router-dom"
import { useEffect } from 'react';
import Navlink from '../Navlink/Navlink';

function Navbar() {

  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    console.log(isHovered)
  }, [isHovered])

  const size = isHovered ? 30 : 1;

  const devtitle = "made with love by evan solanoy"

  const links = [
    { id: 1, title: "Home", dir: "/" },
    { id: 2, title: "About", dir: "/about" },
    { id: 3, title: "Projects", dir: "/projects" }
  ]


  return (

    <>
      <Cursor size={size} />
      <nav onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <NavLink className={styles.homelink} to="/">
          <marquee className={styles.title}>{devtitle}</marquee>
        </NavLink>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <Navlink navTitle={link.title} navDirect={link.dir} />
            </li>
          ))}
        </ul>
          <marquee className={styles.title}>{devtitle}</marquee>
      </nav>
    </>

  )
}

export default Navbar;
