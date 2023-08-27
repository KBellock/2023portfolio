import React from 'react'
import styles from './page.module.css'


function Layout({children}) {
  return (
    <div>
      <h1 className={styles.maintitle}>My Work - View my Github <a href="https://github.com/KBellock" target="_blank" className='link'>Here</a></h1>
      <h2>THIS PAGE IS UNDER CONSTRUCTION</h2>
      {children}
    </div>
  )
}

export default Layout
