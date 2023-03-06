function Section() {
  return (
    <>
      <div
        style={{
          paddingTop: "15px",
          backgroundColor: "#e5e5e5",
          color: "grey",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div>
                <h4 style={{ color: "black" }}>Bus Hire Cities</h4>
                <ul className="list-unstyled">
                  <li>
                    <p className="text-decoration-none">
                      Bus Hire in Ahmedabad
                    </p>
                  </li>
                  <li>
                    <p className="text-decoration-none">Bus Hire in Mumbai</p>
                  </li>
                  <li>
                    <p className="text-decoration-none">Bus Hire in Banglore</p>
                  </li>
                  <li>
                    <p className="text-decoration-none">Bus Hire in Chennai</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div>
                <h4 style={{ visibility: "collapse" }}>Bus Hire Cities</h4>
                <ul className="list-unstyled">
                  <li>
                    <p className="text-decoration-none">Bus Hire in Pune</p>
                  </li>
                  <li>
                    <p className="text-decoration-none">
                      Bus Hire in Hyderabad
                    </p>
                  </li>
                  <li>
                    <p className="text-decoration-none">Bus Hire in Delhi</p>
                  </li>
                  <li>
                    <p className="text-decoration-none">Bus Hire in Surat</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div>
                <h4 style={{ color: "black" }}>Tempo Traveller in Cities</h4>
                <ul className="list-unstyled">
                  <li>
                    <p className="text-decoration-none">
                      Tempo travellers in Banglore
                    </p>
                  </li>
                  <li>
                    <p className="text-decoration-none">
                      Tempo travellers in Ahmedabad
                    </p>
                  </li>
                  <li>
                    <p className="text-decoration-none">
                      Tempo travellers in Coimbatore
                    </p>
                  </li>
                  <li>
                    <p className="text-decoration-none">
                      Tempo travellers in Vadodara
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div>
                <h4 style={{ visibility: "collapse", marginBottom: "-30px" }}>
                  Tempo travellers in other cities
                </h4>
                <ul className="list-unstyled">
                  <li>
                    <p className="text-decoration-none">
                      Tempo travellers in Banglore
                    </p>
                  </li>
                  <li>
                    <p className="text-decoration-none">
                      Tempo travellers in Ahmedabad
                    </p>
                  </li>
                  <li>
                    <p className="text-decoration-none">
                      Tempo travellers in Coimbatore
                    </p>
                  </li>
                  <li>
                    <p className="text-decoration-none">
                      Tempo travellers in Vadodara
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Section;
