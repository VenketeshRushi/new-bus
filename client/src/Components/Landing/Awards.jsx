import styles from "../../Styles/landing.module.css";
const Awards = () => {
  return (
    <div>
      <div className={styles.awardsContainer}>
        <div className={styles.awardHeading}>AWARDS AND RECOGNITION</div>
        <div className={styles.awardmain}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              height: "200px",
              alignItems: "center",
            }}
          >
            <img src={require("../../Images/Business_Standard1.png")} alt="" />
            <div className={styles.awardsPara}>Most Innovative Company</div>
          </div>
          <div>
            <img src={require("../../Images/Brand_Trust_Report.png")} alt="" />
            <div className={styles.awardsPara}>Most Trusted Brand</div>
          </div>
          <div>
            <img src={require("../../Images/Eye_for_Travel1.png")} alt="" />
            <div className={styles.awardsPara}>Mobile Innovation Award</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
