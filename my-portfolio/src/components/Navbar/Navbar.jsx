import React,{useState} from 'react'
import styles from './Navbar.module.css'
import { getImageUrl } from '../../utils'
import {Ladder, List, ListTask, MenuAppFill, XLg} from "react-bootstrap-icons"

const Navbar = () => {
    const [menuOpen,setMenuOpen] =useState(false);

  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href ="/">Portfolio</a>
        <div className={styles.menu}>
            <button
            className={styles.menuBtn}
            onClick={()=>setMenuOpen(!menuOpen)}>
            {menuOpen ? <XLg width="2rem" height="1.5rem"/>: <List width="2rem" height="1.5rem"/>}
            </button>
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={()=>setMenuOpen(false)}>
                <li>
                <a href="#about">About</a></li>
                <li>
                <a href="#experience">Experience</a></li>
                <li>
                <a href="#projects">Projects</a></li>
                <li>
                <a href="#Contact">Contact</a></li>
                </ul>
        </div>
    </nav>
  )
}

export default Navbar