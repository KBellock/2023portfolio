"use client";
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
import Image from 'next/image'
import Kevin from '/public/profilepic.jpeg'

const links = [
    {
        id: 1,
        title: 'Home',
        url: '/'
    },
    {
        id: 2,
        title: 'About',
        url: '/about'
    },
    {
        id: 3,
        title: 'Portfolio',
        url: '/portfolio'
    },
    {
        id: 4,
        title: 'Blog',
        url: '/blog'
    },
    {
        id: 5,
        title: 'Contact',
        url: '/contact'
    }
]

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.container}>
        <div className={styles.logoContainer}>
            <Link href="/" className={styles.logo}>
                <Image src={Kevin} height={20} width={20} className={styles.profileImg}/>
                <span className={styles.name}>Kevin Bellock</span>
            </Link>
        </div>
        <div className={styles.links}>
            <DarkModeToggle />
            {links.map((link) => (
                <Link key={link.id} href={link.url} className={styles.link}>
                    {link.title}
                </Link>
            ))}
        <button className={styles.logout}
        onClick={() => {console.log('logout')}}
        >Logout</button>
        </div>
        <div className={styles.burgerIcon} onClick={toggleMenu}>
            <div className={`${styles.bar} ${isMenuOpen ? styles.open : ''}`}></div>
            <div className={`${styles.bar} ${isMenuOpen ? styles.open : ''}`}></div>
            <div className={`${styles.bar} ${isMenuOpen ? styles.open : ''}`}></div>
        </div>
      {isMenuOpen && <ul className={styles.menu}>
        {links.map((link) => (
            <li className={styles.menuItem} onClick={toggleMenu}>
                <Link key={link.id} href={link.url} className={styles.burgerLink}>
                    {link.title}
                </Link>
            </li>
        ))}
        </ul>}
    </div>
  )
}

export default Navbar
