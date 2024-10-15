import Link from 'next/link';
import styles from '@/app/styles/Booking.module.css';

const Booking = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Book Your Trip</h1>
      <p className={styles.intro}>
        Planning your next adventure has never been easier! At Travel Explore Agency, we offer a seamless booking experience for all your travel needs.
      </p>
      
      <div className={styles.bookingSteps}>
        {/* ...Booking steps here... */}
      </div>

      <p className={styles.cta}>
        Ready to embark on your next adventure? <strong>Contact us today</strong> to start your booking!
      </p>

      {/* Add a button to navigate to the confirmation page */}
      {/* <Link href="/booking/confirmation">
         Go to Confirmation Page
      </Link> */} 
      <Link href="/booking/confirmation" className={styles.button}>
        Go to Confirmation Page
      </Link>
    </section>
  );
};

export default Booking;
