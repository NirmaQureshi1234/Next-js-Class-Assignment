import Image from 'next/image';
import styles from '@/app/styles/Distination.module.css';


const Destinations = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Explore Our Top Travel Destinations</h1>
      <p className={styles.description}>
        Whether you`&apos;`re seeking adventure, relaxation, or cultural experiences, we have the perfect destination for you.
      </p>
      <div className={styles.destinationGrid}>
        <div className={styles.destinationCard}>
          <Image
            src="/maldives.jpg" 
            alt="Maldives"
            width={300}
            height={200}
            className={styles.destinationImage}
          />
          <h3 className={styles.destinationTitle}>Maldives</h3>
          <p className={styles.destinationDescription}>
            Experience tropical bliss in the serene islands of Maldives, perfect for luxury and relaxation.
          </p>
        </div>
        <div className={styles.destinationCard}>
          <Image
            src="/paris.jpg"
            alt="Paris"
            width={300}
            height={200}
            className={styles.destinationImage}
          />
          <h3 className={styles.destinationTitle}>Paris</h3>
          <p className={styles.destinationDescription}>
            Discover the city of love with its iconic landmarks, art, and world-class cuisine.
          </p>
        </div>
        <div className={styles.destinationCard}>
          <Image
            src="/japan.jpg"
            alt="Japan"
            width={300}
            height={200}
            className={styles.destinationImage}
          />
          <h3 className={styles.destinationTitle}>Japan</h3>
          <p className={styles.destinationDescription}>
            Immerse yourself in the blend of ancient tradition and modern marvels across Japan.
          </p>
        </div>
        <div className={styles.destinationCard}>
          <Image
            src="/egypt.jpg"
            alt="Egypt"
            width={300}
            height={200}
            className={styles.destinationImage}
          />
          <h3 className={styles.destinationTitle}>Egypt</h3>
          <p className={styles.destinationDescription}>
            Explore the ancient wonders of Egypt, from the pyramids to the Nile River.
          </p>
        </div>
      </div>
     
    </section>
  );
};

export default Destinations;
