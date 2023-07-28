import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { logoutAPI } from "../Redux/authentication/auth.action";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { error, success } from "../Utils/notification";
import styles from "../Styles/myticket.module.css";
import { BiArrowFromLeft } from "react-icons/bi";

function Myticket() {
  const [data, setdata] = useState([]);
  const [today, settoday] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [past, setPast] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    let userid = Cookies.get("userid");
    getdata(userid);
    getdataToday();
    getdataUpcoming();
    getdataPast();
    success("IMP NOTE ;- You Can Cancel Ticket One Day Before Journey ");
  }, []);

  async function getdata(id) {
    try {
      let res = await axios.post("http://localhost:8080/order/myticket", {
        id,
      });
      // console.log(res);
      setdata(res.data);
    } catch (error1) {
      Cookies.remove("jwttoken");
      Cookies.remove("userid");
      Cookies.remove("usergender");
      dispatch(logoutAPI());

      error("Session Expired Please Sign In Again");
      console.log(error1);
    }
  }

  async function getdataToday() {
    let id = Cookies.get("userid");
    try {
      let res = await axios.post("http://localhost:8080/order/myticket/today", {
        id,
      });
      // console.log("today", res);
      settoday(res.data);
    } catch (error) {
      console.log(error);
      error("Session Expired Please Sign In Again");
      dispatch(logoutAPI());
      navigate("/");

      Cookies.remove("jwttoken");
      Cookies.remove("userid");
      Cookies.remove("usergender");
    }
  }

  async function getdataUpcoming() {
    let id = Cookies.get("userid");
    try {
      let res = await axios.post(
        "http://localhost:8080/order/myticket/upcoming",
        {
          id,
        }
      );
      // console.log("upcoming", res);
      setUpcoming(res.data);
    } catch (error) {
      console.log(error);
      error("Session Expired Please Sign In Again");
      dispatch(logoutAPI());
      navigate("/");
      Cookies.remove("jwttoken");
      Cookies.remove("userid");
      Cookies.remove("usergender");
    }
  }

  async function getdataPast() {
    let id = Cookies.get("userid");
    try {
      let res = await axios.post("http://localhost:8080/order/myticket/past", {
        id,
      });
      // console.log("past", res);
      setPast(res.data);
    } catch (error) {
      console.log(error);
      error("Session Expired Please Sign In Again");
      dispatch(logoutAPI());
      navigate("/");
      Cookies.remove("jwttoken");
      Cookies.remove("userid");
      Cookies.remove("usergender");
    }
  }

  async function handledelete(ele) {
    let userid = ele.user;
    let userid1 = Cookies.get("userid");
    try {
      let res = await axios.delete(
        `http://localhost:8080/order/oneorder/:${userid}`
      );
      getdata(userid1);
      success("Ticket Cancelled Successfully");
    } catch (error1) {
      error(error1.message);
    }
  }
  return (
    <>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            className="nav-link active"
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
            onClick={getdataToday}
          >
            Today's Tickets
          </button>
          <button
            className="nav-link"
            id="nav-profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-profile"
            type="button"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            Upcoming Tickets
          </button>
          <button
            className="nav-link"
            id="nav-contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-contact"
            type="button"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            Past Tickets
          </button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <div>
            <div className={styles.busdata}>
              {" "}
              {today?.map((ele) => {
                return (
                  <div>
                    <h5>
                      {ele?.busDetails.name.charAt(0).toUpperCase() +
                        ele?.busDetails.name.slice(1)}{" "}
                      Travels
                    </h5>
                    <div>
                      {" "}
                      <p>{ele?.busDetails.from}</p>
                      <p>
                        <BiArrowFromLeft />
                      </p>
                      <p>{ele?.busDetails.to}</p>
                    </div>
                    <hr />
                    <h6>Arrival Time : {ele.busDetails.arrival}</h6>
                    <h6>Departure Time : {ele.busDetails.departure}</h6>
                    <hr />
                    <h6>Email : {ele?.busDetails.contactemail}</h6>
                    <h6>Phone : {ele?.busDetails.contactphone}</h6>
                    <hr />
                    <h6>
                      Date Of Journey : {ele?.ticketSummary.date.split("T")[0]}
                    </h6>
                    <hr />
                    <div className={styles.seatno}>
                      <span className={styles.seatlb}>Seat No.</span>
                      <div className={styles.selectedseats}>
                        <span>{ele.ticketSummary.ticket}</span>
                      </div>
                    </div>
                    <hr />
                    <div className={styles.fair}>Fare Details</div>
                    <div className={styles.summarycontainer}>
                      <span className={styles.fareslb}>Amount</span>
                      <span className={styles.summaryvalue}>
                        <span className={styles.summarycurrency}>INR</span>
                        <span>{ele.ticketSummary.amount}</span>
                      </span>
                    </div>
                    <div></div>
                    {JSON.stringify(new Date()).split("T")[0].split('"')[1] ===
                    ele?.ticketSummary.date.split("T")[0] ? (
                      <button className={styles.button49}>HAPPY JOURNEY</button>
                    ) : (
                      <button
                        className={styles.btn}
                        onClick={() => handledelete(ele)}
                      >
                        Cancel Ticket
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
          <div>
            <div className={styles.busdata}>
              {" "}
              {upcoming?.map((ele) => {
                return (
                  <div>
                    <h5>
                      {ele?.busDetails.name.charAt(0).toUpperCase() +
                        ele?.busDetails.name.slice(1)}{" "}
                      Travels
                    </h5>
                    <div>
                      {" "}
                      <p>{ele?.busDetails.from}</p>
                      <p>
                        <BiArrowFromLeft />
                      </p>
                      <p>{ele?.busDetails.to}</p>
                    </div>
                    <hr />
                    <h6>Arrival Time : {ele.busDetails.arrival}</h6>
                    <h6>Departure Time : {ele.busDetails.departure}</h6>
                    <hr />
                    <h6>Email : {ele?.busDetails.contactemail}</h6>
                    <h6>Phone : {ele?.busDetails.contactphone}</h6>
                    <hr />
                    <h6>
                      Date Of Journey : {ele?.ticketSummary.date.split("T")[0]}
                    </h6>
                    <hr />
                    <div className={styles.seatno}>
                      <span className={styles.seatlb}>Seat No.</span>
                      <div className={styles.selectedseats}>
                        <span>{ele.ticketSummary.ticket}</span>
                      </div>
                    </div>
                    <hr />
                    <div className={styles.fair}>Fare Details</div>
                    <div className={styles.summarycontainer}>
                      <span className={styles.fareslb}>Amount</span>
                      <span className={styles.summaryvalue}>
                        <span className={styles.summarycurrency}>INR</span>
                        <span>{ele.ticketSummary.amount}</span>
                      </span>
                    </div>
                    <div></div>
                    {JSON.stringify(new Date()).split("T")[0].split('"')[1] ===
                    ele?.ticketSummary.date.split("T")[0] ? (
                      <button className={styles.button49}>HAPPY JOURNEY</button>
                    ) : (
                      <button
                        className={styles.btn}
                        onClick={() => handledelete(ele)}
                      >
                        Cancel Ticket
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="nav-contact"
          role="tabpanel"
          aria-labelledby="nav-contact-tab"
        >
          <div>
            <div className={styles.busdata}>
              {" "}
              {past?.map((ele) => {
                return (
                  <div>
                    <h5>
                      {ele?.busDetails.name.charAt(0).toUpperCase() +
                        ele?.busDetails.name.slice(1)}{" "}
                      Travels
                    </h5>
                    <div>
                      {" "}
                      <p>{ele?.busDetails.from}</p>
                      <p>
                        <BiArrowFromLeft />
                      </p>
                      <p>{ele?.busDetails.to}</p>
                    </div>
                    <hr />
                    <h6>Arrival Time : {ele.busDetails.arrival}</h6>
                    <h6>Departure Time : {ele.busDetails.departure}</h6>
                    <hr />
                    <h6>Email : {ele?.busDetails.contactemail}</h6>
                    <h6>Phone : {ele?.busDetails.contactphone}</h6>
                    <hr />
                    <h6>
                      Date Of Journey : {ele?.ticketSummary.date.split("T")[0]}
                    </h6>
                    <hr />
                    <div className={styles.seatno}>
                      <span className={styles.seatlb}>Seat No.</span>
                      <div className={styles.selectedseats}>
                        <span>{ele.ticketSummary.ticket}</span>
                      </div>
                    </div>
                    <hr />
                    <div className={styles.fair}>Fare Details</div>
                    <div className={styles.summarycontainer}>
                      <span className={styles.fareslb}>Amount</span>
                      <span className={styles.summaryvalue}>
                        <span className={styles.summarycurrency}>INR</span>
                        <span>{ele.ticketSummary.amount}</span>
                      </span>
                    </div>
                    <div></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Myticket;
