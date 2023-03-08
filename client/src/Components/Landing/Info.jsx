import styles from "../../Styles/landing.module.css";
function Info() {
  return (
    <>
      <div className={styles.infogrid}>
        <div className={styles.coupon}>
          <span>save upto rs 150</span>
          <span className={styles.offerImage}>
            <img src={require("../../Images/274_147.png")} alt="coupon-1" />
          </span>
          <span>Use code FIRST</span>
        </div>
        <div className={styles.coupon}>
          <span>save upto rs 150</span>
          <span className={styles.offerImage}>
            <img src={require("../../Images/offertile..png")} alt="coupon-1" />
          </span>
          <span>Use code FIRST</span>
        </div>
        <div className={styles.coupon}>
          <span>save upto rs 150</span>
          <span className={styles.offerImage}>
            <img src={require("../../Images/APSRTC_1.png")} alt="coupon-1" />
          </span>
          <span>Use code FIRST</span>
        </div>
      </div>
    </>
  );
}

export default Info;
