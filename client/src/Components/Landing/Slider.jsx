import { useState } from "react";
import styles from "../../Styles/landing.module.css";
import Alert from "./Alert";
function Slider() {
  const [hover, sethover] = useState(false);
  const [source, setsource] = useState("");
  const [destination, setdestination] = useState("");
  const [date, setdate] = useState("");
  const [show, setShow] = useState(true);

  function handelhover() {
    sethover(true);
  }

  function handelhoverout() {
    sethover(false);
  }

  function handleclicked() {
    if (date === "" || destination === "" || source === "") {
      setShow(true);
      console.log("hi");
    }
    getcityinfo(source, destination, date);
  }

  async function getcityinfo(q) {
    let res = await axios.post("http://localhost:8080/city", {
      source,
      destination,
      date,
    });
    console.log(res);
  }

  function handelChnage(e) {
    console.log(e.target.value);
    // setTimeout(() => {
    //   getcityinfo(source);
    // }, 500);
  }

  return (
    <>
      {show ? (
        <Alert
          variant={"info"}
          data={"Fill All The Details"}
          setShow={setShow}
          show={show}
        />
      ) : null}
      <div className={styles.Carousel}>
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
              {" "}
              <img
                src={require("../../Images/pexels-photo-1157386.jpeg")}
                className="object-fit-cover"
                style={{ height: "70vh", width: "100%" }}
                alt="..."
                onMouseOver={handelhover}
                onMouseLeave={handelhoverout}
              />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              {" "}
              <img
                src={require("../../Images/pexels-photo-3935702.jpeg")}
                className="object-fit-cover"
                alt="..."
                style={{ height: "70vh", width: "100%" }}
                onMouseOver={handelhover}
                onMouseLeave={handelhoverout}
              />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              {" "}
              <img
                src={require("../../Images/pexels-photo-4452209.jpeg")}
                className="object-fit-cover"
                alt="..."
                style={{ height: "70vh", width: "100%" }}
                onMouseOver={handelhover}
                onMouseLeave={handelhoverout}
              />
            </div>
          </div>
          {hover ? (
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
          ) : (
            <span className="visually-hidden">Previous</span>
          )}
          {hover ? (
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          ) : (
            <span className="visually-hidden">Next</span>
          )}
        </div>
        <div className={styles.data}>
          <input
            type="text"
            placeholder="Source"
            value={source}
            onChange={(e) => setsource(e.target.value)}
          />
          <input
            type="text"
            placeholder="Destination"
            value={destination}
            onChange={(e) => setdestination(e.target.value)}
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setdate(e.target.value)}
          />
          <button onClick={handleclicked}>Search</button>
        </div>
      </div>
    </>
  );
}
export default Slider;
