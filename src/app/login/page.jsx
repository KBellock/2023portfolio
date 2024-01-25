"use client"
import React, { useState } from 'react';
import styles from './page.module.css';
//import  auth  from '../../utils/firebase'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //login logic
    try {
        await auth().signInWithEmailAndPassword(email, password);
        console.log('Logged in successfully');
      } catch (error) {
        console.error('Error logging in:', error);
      }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h2 className={styles.loginTitle}>Login</h2>
        <p>( Only For Admin )</p>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <input
            type="email"
            className={styles.loginInput}
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            className={styles.loginInput}
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="submit" className={styles.loginButton}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

