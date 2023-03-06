import styles from "../Styles/landing.module.css";

function Footer() {
  return (
    <>
      <footer
        style={{
          paddingTop: "15px",
          backgroundColor: "#222222",
          color: "white",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div>
                <h3>
                  <span style={{ color: "#dc3545" }}>Red</span>Bus
                </h3>
                <p className="mb-30 footer-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                  soluta facilis eos quia optio iusto odit atque eum tempore,
                  quisquam officiis vero veniam hic,
                </p>
              </div>
            </div>
            <div className="col-xl-2 offset-xl-1 col-lg-2 col-md-6">
              <div className="">
                <h4>Book</h4>
                <ul className="list-unstyled">
                  <li>
                    <p className="text-decoration-none">Bus Ticket</p>
                  </li>
                  <li>
                    <p className="text-decoration-none">Bus hire</p>
                  </li>
                  <li>
                    <p className="text-decoration-none">Tempo Travellers</p>
                  </li>
                  <li>
                    <p className="text-decoration-none">Car Rentals</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div>
                <h4>About</h4>
                <ul className="list-unstyled">
                  <li>
                    <p className="text-decoration-none">About us</p>
                  </li>
                  <li>
                    <p className="text-decoration-none">Contact us</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div>
                <h4>Info</h4>
                <ul className="list-unstyled">
                  <li>
                    <p>T & C</p>
                  </li>
                  <li>
                    <p>
                      <p>Privacy Policy</p>
                    </p>
                  </li>
                  <li>
                    <p>Cookie Policy</p>
                  </li>
                  <li>
                    <p>FAQ</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="copyright">
              <p className={styles.companyinfo}>
                2023 ibibogroup All rights reserved company.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
