import React from 'react'
import Card from '@/components/card/Card'
import websites from './websites'
import styles from './page.module.css'

function Websites() {
  return (
    <div>
      <h1>React Native Projects</h1>
        <div className={styles.cardContainer}>
            {websites.map((website) => (
                <Card application={website} key={website.id} />
            ))}
        </div>
    </div>
  )
}

export default Websites
