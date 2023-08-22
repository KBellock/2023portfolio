import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'
import Button from "@/components/button/Button"

export const metadata = {
  title: 'Kevin Bellock | 2023 Portfolio',
  description: 'Built with Next 13and MongoDB',
}

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Performance Focused Web Development</h1>
        <p className={styles.description}>Building for the modern web with a results driven focus on SEO and performance</p>
        <Button url="/portfolio" text="See my Work"/>
      </div>
      <div className={styles.item}> 
        <Image src={Hero} alt="Hero Image" className={styles.img}/>
      </div>
    </div>
  )
}
