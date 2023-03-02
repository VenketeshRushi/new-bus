import styles from "../../Styles/landing.module.css";
function Reviews() {
  return (
    <>
      <h2
        style={{
          marginBottom: "28px",
          color: "#4a4a4a",
          textAlign: "center",
          fontWeight: 800,
          fontSize:"30px",
        }}
      >
        Customer Reviews
      </h2>
      <div className={styles.reviewmain}>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={require("../../Images/pexels-photo-2381069.webp")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Kathrin Brown</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={require("../../Images/pexels-photo-3778680.webp")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">John Buch</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={require("../../Images/pexels-photo-2381069.webp")}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Kira Adavani</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviews;
