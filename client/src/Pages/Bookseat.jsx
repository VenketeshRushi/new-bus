import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EachDeckSeat from "../Components/Seats/EachDeckSeat";
import styles from "../Styles/bookseat.module.css";
import axios from "axios";
import { BiArrowFromLeft } from "react-icons/bi";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { error } from "../Utils/notification";
function Bookseat() {
  let [searchParams, setSearchParams] = useSearchParams();
  let param = useParams();
  const navigate = useNavigate();

  const [data, setdata] = useState([]);

  const ticket = useSelector((state) => state.ticket.ticketNo);
  console.log("hieel",ticket);

  useEffect(() => {
    getdata();
  }, []);
  async function getdata() {
    console.log(param.id);
    try {
      let res = await axios.post("http://localhost:8080/bus/one", {
        id: param.id,
      });
      console.log("OK", res.data);
      console.log("before", data);
      setdata(res.data);
      console.log("after", data)
    } catch (error) {
      console.log(error.message);
    }
  }
  function handleClicked(ele) {
    if (ticket.length > 0) {
      navigate({
        pathname: `/details/${param.id}`,
        search: `?&date=${searchParams.get("date")}&ticket=${[...ticket]}&amount=${ticket.length * ele}`,
      }); 
    } else {
      error("Please select Seat First");
    }
  }


  console.log("DATAAAA", data);


  return (
    <div className={styles.main}>
      <div className={styles.seats}>
        <div>
          <h4 style={{ textAlign: "left" }}>Lower Deck</h4>
          <div className={styles.maincontainer}>
            <div className={styles.singlerow}>
              <EachDeckSeat id={1} />
              <EachDeckSeat id={2} />
              <EachDeckSeat id={3} />
              <EachDeckSeat id={4} />
              <EachDeckSeat id={5} />
            </div>
            <div className={styles.maincontainer1}>
              <div className={styles.doublerow}>
                <EachDeckSeat id={11} />
                <EachDeckSeat id={12} />
                <EachDeckSeat id={13} />
                <EachDeckSeat id={14} />
                <EachDeckSeat id={15} />
              </div>
              <div className={styles.doublerow}>
                <EachDeckSeat id={16} />
                <EachDeckSeat id={17} />
                <EachDeckSeat id={18} />
                <EachDeckSeat id={19} />
                <EachDeckSeat id={20} />
              </div>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "left", marginTop: "25px",width:"100%" }}>
          <h4>Upper Deck</h4>
          <div className={styles.maincontainer}>
            <div className={styles.singlerow}>
              <EachDeckSeat id={6} />
              <EachDeckSeat id={7} />
              <EachDeckSeat id={8} />
              <EachDeckSeat id={9} />
              <EachDeckSeat id={10} />
            </div>
            <div className={styles.maincontainer1}>
              <div className={styles.doublerow}>
                <EachDeckSeat id={21} />
                <EachDeckSeat id={22} />
                <EachDeckSeat id={23} />
                <EachDeckSeat id={24} />
                <EachDeckSeat id={25} />
              </div>
              <div className={styles.doublerow}>
                <EachDeckSeat id={26} />
                <EachDeckSeat id={27} />
                <EachDeckSeat id={28} />
                <EachDeckSeat id={29} />
                <EachDeckSeat id={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.busdata}>
        {" "}
        {data.map((ele) => {
          return (
            <div>
              <h5>
                {ele?.companyname.charAt(0).toUpperCase() +
                  ele?.companyname.slice(1)}{" "}
                Travels
              </h5>
              <div>
                {" "}
                <p>{ele?.from}</p>
                <p>
                  <BiArrowFromLeft />
                </p>
                <p>{ele?.to}</p>
              </div>
              <hr />
              <h6>Arrival Time : {ele.arrival}</h6>
              <h6>Departure Time : {ele.departure}</h6>
              <hr />
              <h6>Email : {ele?.email}</h6>
              <h6>Phone : {ele?.phone}</h6>
              <hr />
              <div className={styles.seatno}>
                <span className={styles.seatlb}>Seat No.</span>
                <div className={styles.selectedseats}>
                  {ticket?.map((ele,i) => {
                    return <span key={i}> {ele}, </span>;
                  })} 
                </div>
              </div>
              <hr />
              <div className={styles.fair}>Fare Details</div>
              <div className={styles.summarycontainer}>
                <span className={styles.fareslb}>Amount</span>
                <span className={styles.summaryvalue}>
                  <span className={styles.summarycurrency}>INR</span>
                  <span>{ticket.length * ele.price}</span>
                </span>
              </div>
              <button className={styles.btn} onClick={() => handleClicked(ele.price)}>
                Proceed to book
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Bookseat;
