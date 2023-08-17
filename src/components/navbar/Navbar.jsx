"use client"
import React from 'react'
import Link from 'next/link'
import styles from './navbar.module.css'

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
  return (
    <div className={styles.container}>
        <div>
            <Link href="/" className={styles.logo}>Kevin Bellock</Link>
        </div>
        <div className={styles.links}>
      {links.map((link) => (
        <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
        </Link>
        ))}
        <button className={styles.logout}
        onClick={() => {console.log('logout')}}
        >Logout</button>
        </div>
    </div>
  )
}

export default Navbar
