"use client"
import React from 'react'
import styles from './pagetitle.module.css'
import {useContext} from 'react'
import { ThemeContext } from '@/context/ThemeContext'

function PageTitle() {
    const {mode} = useContext(ThemeContext)
  return (
    <>
      <h1 className={mode === 'light' ? styles.title : styles.titleDark}>Elevating Brands with Enhanced Web Performance</h1>
    </>
  )
}

export default PageTitle
