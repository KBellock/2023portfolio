import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

function About() {
  return (
    <div className={styles.container}>
      <div classname={styles.imgContainer}>
        <Image />
      </div>
    </div>
  )
}

export default About
