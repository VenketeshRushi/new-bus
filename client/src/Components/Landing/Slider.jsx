import { useEffect, useState } from "react";
import styles from "../../Styles/landing.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { error } from "../../Utils/notification";

function Slider() {
  const [hover, sethover] = useState(false);
  const [source, setsource] = useState("");
  const [destination, setdestination] = useState("");
  const [date, setdate] = useState("");
  const [showName, setShowNames] = useState(false);
  const [showNamedes, setShowNamesdes] = useState(false);
  const [output, setOutput] = useState([]);
  const [outputdes, setOutputdes] = useState([]);
  const [dateinfo, setdateinfo] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    let mindate = new Date().toISOString().split("T")[0];
    let maxdate = new Date().toISOString().split("T")[0];
    console.log(mindate, maxdate);
    setdate(mindate);
    setdateinfo({
      ...dateinfo,
      mindate: mindate,
      maxdate: maxdate,
    });
  }, []);

  useEffect(() => {
    if (source === "") {
      setShowNames(false);
      return;
    }
    let timerID = setTimeout(() => {
      handleGetRequest();
    }, 1000);

    return () => {
      clearTimeout(timerID);
    };
  }, [source]);

  useEffect(() => {
    if (destination === "") {
      setShowNamesdes(false);
      return;
    }
    let timerID = setTimeout(() => {
      handleGetRequestdes();
    }, 1000);

    return () => {
      clearTimeout(timerID);
    };
  }, [destination]);

  const handleGetRequest = async () => {
    try {
      let res = await axios.post("http://localhost:8080/city", {
        source,
      });
      res = res.data;
      setOutput(res);
      setShowNames(true);
      console.log(output);
    } catch (err) {
      console.log(err);
    }
  };

  const handleGetRequestdes = async () => {
    try {
      let res = await axios.post("http://localhost:8080/city", {
        destination,
      });
      res = res.data;

      setOutputdes(res);
      setShowNamesdes(true);
    } catch (err) {
      console.log(err);
    }
  };

  function handelhover() {
    sethover(true);
  }

  function handelhoverout() {
    sethover(false);
  }

  function handleclicked() {
    if (date === "" || destination === "" || source === "") {
      error("Please Fill All The Details");
      return;
    }
    if (source === destination) {
      error("Source And Destination Can't Be Same");
      return;
    }
    setsource("");
    getcityinfo(source, destination, date);
  }

  async function getcityinfo(source, destination, date) {
    try {
      let res = await axios.post("http://localhost:8080/city/showcity", {
        source,
        destination,
        date,
      });
      if (res.data.status === "success") {
        navigate({
          pathname: "/selectbus",
          search: `?from=${source}&to=${destination}&date=${date}`,
        });
      } else {
        setsource("");
        setdestination("");
        error("City Not Found");
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handlecityclicked(name) {
    setsource(name);
    setShowNames(false);
    setTimeout(() => {
      setShowNames(false);
    }, [1100]);
  }
  function handlecityclicked1(name) {
    setdestination(name);
    setShowNamesdes(false);
    setTimeout(() => {
      setShowNamesdes(false);
    }, [1100]);
  }

  function handledateclicked() {
    setShowNamesdes(false);
    setShowNames(false);
  }
  return (
    <>
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
                src={require("../../Images/Hero01.png")}
                className="object-fit-cover"
                style={{ height: "75vh", width: "100%" }}
                alt="..."
                onMouseOver={handelhover}
                onMouseLeave={handelhoverout}
              />
            </div>
            <div className="carousel-item active" data-bs-interval="3000">
              {" "}
              <img
                src={require("../../Images/photo-1590523277543-a94d2e4eb00b.avif")}
                className="object-fit-cover"
                style={{ height: "75vh", width: "100%" }}
                alt="..."
                onMouseOver={handelhover}
                onMouseLeave={handelhoverout}
              />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              {" "}
              <img
                src={require("../../Images/photo-1544091441-9cca7fbe8923.avif")}
                className="object-fit-cover"
                alt="..."
                style={{ height: "75vh", width: "100%" }}
                onMouseOver={handelhover}
                onMouseLeave={handelhoverout}
              />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              {" "}
              <img
                src={require("../../Images/photo-1600073957488-45273df3d014.avif")}
                className="object-fit-cover"
                alt="..."
                style={{ height: "75vh", width: "100%" }}
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
              onMouseOver={handelhover}
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
              onMouseOver={handelhover}
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
            onChange={(e) => {
              setsource(e.target.value);
              setShowNamesdes(false);
            }}
            className={styles.inputsource}
          />
          {showName && output.length != 0 && (
            <div className={styles.names}>
              {output?.map((item, i) => (
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => handlecityclicked(item.name)}
                  key={i}
                >
                  <h6 style={{ paddingTop: "5px", paddingLeft: "5px" }}>
                    {item.name},{item.state}
                  </h6>
                  <hr />
                </div>
              ))}
            </div>
          )}
          <input
            type="text"
            placeholder="Destination"
            value={destination}
            onChange={(e) => {
              setdestination(e.target.value);
              setShowNames(false);
            }}
            className={styles.inputsource1}
          />
          {showNamedes && outputdes.length != 0 && (
            <div className={styles.names1}>
              {outputdes?.map((item, i) => (
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => handlecityclicked1(item.name)}
                  key={i}
                >
                  <h6 style={{ paddingTop: "5px", paddingLeft: "5px" }}>
                    {item.name},{item.state}
                  </h6>
                  <hr />
                </div>
              ))}
            </div>
          )}
          <input
            type="date"
            value={date}
            min={dateinfo.mindate}
            onChange={(e) => setdate(e.target.value)}
            onClick={() => handledateclicked()}
          />
          <button onClick={handleclicked}>Search</button>
        </div>
        <div className={styles.infodiv}>
          <div>
            {" "}
            <img
              src="https://s3.rdbuz.com/Images/webplatform/measures/safetyplus.svg"
              alt="shield"
            />
          </div>
          <div>
            <h4>Introducing Safety+ Program</h4>
            <p>
              A unique certification program that ensures safety in all buses
            </p>
          </div>
          <div>
            <div>
              {" "}
              <button>know More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Slider;
