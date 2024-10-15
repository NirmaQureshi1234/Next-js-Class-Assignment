import styles from '@/app/styles/Tours.module.css';

const Tours = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Exclusive Travel Tours</h1>
      <p className={styles.intro}>
        At Travel Explore Agency, we offer a variety of handpicked tours tailored to different travel preferences. Whether you`&apos;`re looking for adventure, relaxation, or cultural immersion, we have the perfect tour for you.
      </p>
      
      <div className={styles.tourSection}>
        <h2 className={styles.subTitle}>Adventure Tours</h2>
        <p className={styles.description}>
          Embark on thrilling adventures across the globe. Our adventure tours are designed for thrill-seekers who want to explore untamed landscapes, from mountain hiking in the Himalayas to desert safaris in Morocco. Experience nature at its rawest and most beautiful.
        </p>
      </div>

      <div className={styles.tourSection}>
        <h2 className={styles.subTitle}>Cultural Exploration Tours</h2>
        <p className={styles.description}>
          Discover the rich history and culture of various destinations with our immersive cultural tours. Walk through ancient ruins, experience local traditions, and learn about the history that shaped civilizations. Popular destinations include Greece, Egypt, and Peru.
        </p>
      </div>

      <div className={styles.tourSection}>
        <h2 className={styles.subTitle}>Relaxation and Wellness Tours</h2>
        <p className={styles.description}>
          Take a break from the fast pace of life with our relaxation and wellness tours. From spa retreats in Bali to yoga getaways in India, our tours focus on rejuvenating the mind, body, and soul. These tours are perfect for travelers looking for tranquility and self-care.
        </p>
      </div>

      <p className={styles.cta}>
        Ready to book your next adventure? <strong>Contact us today</strong> and let us help you plan the perfect trip!
      </p>
    </section>
  );
};

export default Tours;
