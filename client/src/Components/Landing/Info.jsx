import styles from "../../Styles/landing.module.css";
function Info() {
  return (
    <>
      <div className={styles.infogrid}>
        <div className={styles.coupon}>
          <span>save upto rs 150</span>
          <span className={styles.offerImage}>
            <img
              src="https://st.redbus.in/Images/INDOFFER/safetyplus/274_147.png"
              alt="coupon-1"
            />
          </span>
          <span>Use code FIRST</span>
        </div>
        <div className={styles.coupon}>
          <span>save upto rs 150</span>
          <span className={styles.offerImage}>
            <img
              src="https://s1.rdbuz.com/images/MobileOffers/amazon/offertile..png"
              alt="coupon-1"
            />
          </span>
          <span>Use code FIRST</span>
        </div>
        <div className={styles.coupon}>
          <span>save upto rs 150</span>
          <span className={styles.offerImage}>
            <img
              src="https://st.redbus.in/Images/APSRTC/new/APSRTC_1.png"
              alt="coupon-1"
            />
          </span>
          <span>Use code FIRST</span>
        </div>
      </div>
    </>
  );
}

export default Info;
