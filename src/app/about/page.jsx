import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Workspace from 'public/Web.webp'

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={Workspace} alt="workspace" className={styles.img} fill priority/>
        <div className={styles.imgText}>
          <h2 className={styles.imgTitle}>
            Custom Solutions
          </h2>
          <h3 className={styles.imgDesc}>
            Outside the box thinking to drive performance and results.
          </h3>
        </div>
      </div>
      <div className={styles.textContainer}>
      <div className={styles.item}>
        <h1 className={styles.title}>Kevin Bellock | Web Developer</h1>
        <p className={styles.desc}>Hello there, I am Kevin Bellock, and am thrilled to connect with you. As a dedicated Software Engineer specializing in Web Development with a focus on React, I am here to turn your digital dreams into reality. With each line of code I write, I am driven by a passion for creating seamless and captivating user experiences that leave a lasting impression.<br /><br />My journey in the world of technology began with a strong foundation in Information Technology, where I fine-tuned my problem-solving skills and gained a deep understanding of system architecture and network infrastructure. This background uniquely positions me to craft robust and efficient web solutions that not only look great but also function flawlessly under the hood.<br /><br />But what truly sets me apart is my commitment to customer service. I understand that technology is ultimately about people, and I bring this mindset into every project. I believe in clear communication, collaborative teamwork, and going that extra mile to ensure your vision is not only met but exceeded. So whether you are a startup with a bold idea or an established business looking to enhance your online presence, I am here to partner with you and make it happen. Lets turn your ideas into a digital masterpiece together.</p>
      </div>
      <div className={styles.item}>
        <h2 className={styles.title}>Why Get A Custom Website?</h2>
        <p className={styles.desc}>Hiring a professional to build a Next.js website with a Firestore backend for your company is a strategic decision that can significantly benefit your business. Next.js offers several advantages, such as lightning-fast page load times, excellent SEO capabilities, and a smooth user experience. Combined with Firestore, a flexible NoSQL database from Google, you can ensure seamless data management and real-time updates. This dynamic combination allows you to create a responsive and scalable web application, essential for staying competitive in the digital age. By investing in a qualified developer, you not only save time and resources but also gain a modern, efficient, and reliable online platform that can help you engage customers, improve brand visibility, and ultimately drive growth for your company.</p>
      </div>
    </div>
    </div>
  )
}

export default About
