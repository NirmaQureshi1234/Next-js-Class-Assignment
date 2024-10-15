import styles from '@/app/styles/Booking.module.css';

const Confirmation = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Booking Confirmation</h1>
      <p className={styles.intro}>
        Congratulations! Your trip has been successfully booked. We`&apos;`re excited to help you embark on this adventure.
      </p>

      <div className={styles.confirmationDetails}>
        <h2 className={styles.subTitle}>Confirmation Details</h2>
        <p className={styles.stepDescription}>
          You will receive a confirmation email with all the details regarding your booking. If you have any questions, feel free to reach out to us.
        </p>
        <p className={styles.cta}>
          <strong>Need help?</strong> Contact our support team for any assistance.
        </p>
      </div>
    </section>
  );
};

export default Confirmation;
