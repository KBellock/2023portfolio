import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import LinkedIn from '/public/LinkedIn.webp'
import Link from 'next/link'

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
      ©2023 Kevin Bellock All rights reserved.
      </div>
      <div className={styles.social}>
        <Link href="https://www.linkedin.com/in/kevin-bellock-b595301b4/">
          <Image width={60} height={60} src={LinkedIn} alt="Kevin B"/>
        </Link>
      </div>
    </div>
  )
}

export default Footer
