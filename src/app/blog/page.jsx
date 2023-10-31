"use client"
import React from "react";
import { useEffect } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { addPost, getPosts } from "../../utils/firebase"





const Blog = () => {

 /* const LoadData = () => {
    useEffect(() => {
      console.log("hello")
      const data = getPosts();
      console.log(data)
    }, []);
  }

  LoadData();
  */
  return (
<>

    <div className={styles.mainContainer}>
     {/* {data.map((item) => (
        <Link href={`/blog/${item._id}`} className={styles.container} key={item.id}>
          <div className={styles.imageContainer}>
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className={styles.image}
              priority
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
     */}
    </div>
    </>
  );
};



export default Blog;


