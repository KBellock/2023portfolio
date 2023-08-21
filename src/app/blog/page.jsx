import React from 'react'
import styles from './page.module.css'
import { notFound } from 'next/navigation'

const getData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  
  if (!res.ok) {
    notFound()
  }

  return res.json();
}

const Blog = async () => {

  const data = await getData();
  return (
    <div className={styles.container}>
      
    </div>
  )
}

export default Blog


