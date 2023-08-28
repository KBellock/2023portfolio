import React from 'react'
import applications from './applications'
import Card from '@/components/card/Card'
import styles from './page.module.css'

function Applications() {
  return (
    <div>
      <h1>React Native Projects</h1>
        <div className={styles.cardContainer}>
            {applications.map((application) => (
                <Card application={application} key={application.id} />
            ))}
        </div>
    </div>
  )
}

export default Applications
