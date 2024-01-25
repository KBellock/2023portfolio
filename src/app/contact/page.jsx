"use client"
import React from "react";
import {useState} from "react"
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button"
import { submitForm } from "../../utils/firebase";



const Contact = () => {

const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [message, setMessage] = useState("")
const [submitted, setSubmitted] = useState(false)

const handleNameChange = (event) => {
  setName(event.target.value);
};

const handleEmailChange = (event) => {
  setEmail(event.target.value);
};

const handleMessageChange = (event) => {
  setMessage(event.target.value);
};

const handleSubmit = (event) => {
  event.preventDefault();
  console.log(name, email, message);
  submitForm(name, email, message);
  setName("");
  setEmail("");
  setMessage("");
  setSubmitted(true);
};

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Get in Touch for Web Development Services</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input type="text" placeholder="name" className={styles.input} onChange={handleNameChange}  />
          <input type="text" placeholder="email" className={styles.input} onChange={handleEmailChange} />
          <textarea
            className={styles.textArea}
            placeholder="message"
            onChange={handleMessageChange}
          ></textarea>
         {!submitted && <button onClick={handleSubmit} className={styles.button}>Submit Form</button>}
          {submitted && <p className={styles.submitted}>Thank you for your submission!</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;