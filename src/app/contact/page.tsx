'use client'; 

import React from 'react';
import styles from '@/app/styles/Contact.module.css';

const TravelContact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    alert('Thank you for your inquiry! We will get back to you shortly.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Contact Our Travel Agency</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input className={styles.input} type="text" id="name" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input className={styles.input} type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="destination">Preferred Destination</label>
          <input className={styles.input} type="text" id="destination" required />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea className={styles.textarea} id="message" rows={4} required></textarea>
        </div>
        <button className={styles.button} type="submit">Send Inquiry</button>
      </form>
    </section>
  );
};

export default TravelContact;
