import Image from 'next/image';
import styles from '@/app/styles/Home.module.css';

const Home = () => {
  return (
    <section className={styles.container}>  
      <h1 className={styles.title}>Welcome to Travel Explore Agency</h1>
      <p className={styles.description}>
        At Travel Explore Agency, we make your travel dreams come true by offering comprehensive travel solutions. Our experienced team provides you with tailor-made travel services in:
      </p>
      <div className={styles.services}>
        <div className={styles.serviceCard}>
          <Image
              className="object-cover object-center  rounded mx-auto w-[300px] h-[400px]"
              alt="Destination Planning"
              src="/distination.jpg"
              width={150}
              height={150}
          />
          <h3 className={styles.serviceTitle}>Destination Planning</h3>
          <p className={styles.serviceDescription}>
            Discover the perfect destinations tailored to your preferences and travel style.
          </p>
        </div>
        <div className={styles.serviceCard}>
          <Image
              className="object-cover object-center rounded mx-auto w-[300px] h-[400px]"
              alt="Travel Packages"
              src="/traval.jpg"
              width={150}
              height={150}
          />
          <h3 className={styles.serviceTitle}>Customized Travel Packages</h3>
          <p className={styles.serviceDescription}>
            Enjoy personalized travel packages that include flights, hotels, and activities at the best prices.
          </p>
        </div>
        <div className={styles.serviceCard}>
          <Image
              className="object-cover object-center rounded mx-auto w-[300px] h-[400px]"
              alt="Hotel Booking"
              src="/hotal.jpg"
              width={150}
              height={150}
          />
          <h3 className={styles.serviceTitle}>Hotel Booking</h3>
          <p className={styles.serviceDescription}>
            Book the best hotels worldwide with exclusive deals for your stay.
          </p>
        </div>
        <div className={styles.serviceCard}>
          <Image
              className="object-cover object-center rounded mx-auto w-[300px] h-[400px]"
              alt="Travel Consultancy"
              src="/consulting.jpg"
              width={150}
              height={150}
          />
          <h3 className={styles.serviceTitle}>Travel Consultancy</h3>
          <p className={styles.serviceDescription}>
            Get expert travel advice and support throughout your journey for a stress-free experience.
          </p>
        </div>
      </div>
      <p className={styles.cta}>
        Ready to plan your dream vacation? <strong>Contact us today!</strong>
      </p> 
      <h1>⭐🌙Created By NIRMA QURESHI</h1>
    </section>
  );
};

export default Home;
