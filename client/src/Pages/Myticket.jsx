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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    let userid = Cookies.get("userid");
    getdata(userid);
  }, []);

  async function getdata(id) {
    try {
      let res = await axios.post("http://localhost:8080/order/myticket", {
        id,
      });
      console.log(res);
      setdata(res.data);
    } catch (error1) {
      Cookies.remove("jwttoken");
      Cookies.remove("userid");
      dispatch(logoutAPI());
      navigate("/");
      error("Session Expired Please Sign In Again");
      console.log(error1);
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
      <div>
        <div className={styles.busdata}>
          {" "}
          {data.map((ele) => {
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
                <h6>Email : {ele?.busDetails.busDetails}</h6>
                <h6>Phone : {ele?.busDetails.busDetails}</h6>
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
                <button
                  className={styles.btn}
                  onClick={() => handledelete(ele)}
                >
                  Cancel
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Myticket;
