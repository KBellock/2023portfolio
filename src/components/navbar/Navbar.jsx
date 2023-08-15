"use client"
import React from 'react'
import Link from 'next/link'

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
    <div>
      {links.map((link) => (
        <Link key={link.id} href={link.url}>
            {link.title}
        </Link>
        ))}
    </div>
  )
}

export default Navbar
