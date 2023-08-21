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
        <p className={styles.desc}>Imagine a dynamic and high-performing online presence that seamlessly engages your audience and drives your business forward. That is precisely what a Next.js website coupled with a headless CMS and MongoDB can offer your business.

Next.js, a cutting-edge React framework, brings speed, responsiveness, and search engine optimization (SEO) benefits to the table. This means lightning-fast page loads and smooth user experiences, which are crucial for retaining visitors and reducing bounce rates. With Next.js, your website can adapt to various devices and screen sizes, ensuring a consistent and visually appealing interface across smartphones, tablets, and desktops. Moreover, its server-side rendering capabilities enhance SEO, making your content more discoverable by search engines and driving organic traffic to your site.<br /><br />

Integrating a headless CMS, such as Contentful or Strapi, empowers your team to effortlessly manage and update content without needing to delve into the technical intricacies. This separation of content and presentation enables efficient content creation and modification, streamlining your workflow and allowing your team to focus on what matters most, crafting compelling narratives and engaging experiences for your audience.<br /><br />

Now, lets talk about MongoDB a powerful and flexible NoSQL database. MongoDBs document-based structure allows for seamless scalability, ensuring your website can effortlessly handle increasing amounts of data and traffic. This scalability translates to a more reliable and responsive user experience, even during traffic spikes or rapid growth periods. Additionally, MongoDBs ability to handle diverse data types enables you to efficiently store and retrieve various content elements, from images and videos to complex product data.<br /><br />

In summary, a Next.js website with a headless CMS and MongoDB is a game-changer for your business. It brings speed, SEO optimization, and responsive design to the forefront, enhancing user experiences and driving conversions. The streamlined content management process accelerates your teams efficiency, while MongoDBs scalability ensures your website remains robust and reliable as your business flourishes. It is a powerful combination that empowers your business to thrive in the digital landscape.</p>
      </div>
      </div>
    </div>
  )
}

export default About
