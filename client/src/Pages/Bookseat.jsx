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
  let arr = Array(30)
    .fill()
    .map((ele, i) => i + 1);

  const [data, setdata] = useState([]);
  const [bookedSeates, setbookedSeates] = useState([]);

  const ticket = useSelector((state) => state.ticket.ticketNo);
  console.log("hieel", ticket);

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
      setdata(res.data);
      let info = res.data[0].seats;
      let date = searchParams.get("date");
      let ans = info.filter((ele) => {
        let x = ele.split("@");
        if (x[0] == date) {
          let z = x[1].split(",");
          setbookedSeates([...z]);
          return z;
        }
      });
      console.log("ans", ans);
      console.log("bookedSeats", bookedSeates);
    } catch (error) {
      console.log(error);
    }
  }
  function handleClicked(ele) {
    if (ticket.length > 0) {
      sessionStorage.setItem("busData", JSON.stringify(data));
      navigate({
        pathname: `/details/${param.id}`,
        search: `?&date=${searchParams.get("date")}&ticket=${[
          ...ticket,
        ]}&amount=${ticket.length * ele}`,
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
              {bookedSeates.includes("1") ? (
                <EachDeckSeat id={1} color={"red"} disable={true} />
              ) : (
                <EachDeckSeat id={1} color={"gray"} disable={false} />
              )}
              {bookedSeates.includes("2") ? (
                <EachDeckSeat id={2} color={"red"} disable={true} />
              ) : (
                <EachDeckSeat id={2} color={"gray"} disable={false} />
              )}
              {bookedSeates.includes("3") ? (
                <EachDeckSeat id={3} color={"red"} disable={true} />
              ) : (
                <EachDeckSeat id={3} color={"gray"} disable={false} />
              )}
              {bookedSeates.includes("4") ? (
                <EachDeckSeat id={4} color={"red"} disable={true} />
              ) : (
                <EachDeckSeat id={4} color={"gray"} disable={false} />
              )}
              {bookedSeates.includes("5") ? (
                <EachDeckSeat id={5} color={"red"} disable={true} />
              ) : (
                <EachDeckSeat id={5} color={"gray"} disable={false} />
              )}
            </div>
            <div className={styles.maincontainer1}>
              <div className={styles.doublerow}>
                {bookedSeates.includes("11") ? (
                  <EachDeckSeat id={11} color={"red"} disable={true} />
                ) : (
                  <EachDeckSeat id={11} color={"gray"} disable={false} />
                )}
                {bookedSeates.includes("12") ? (
                  <EachDeckSeat id={12} color={"red"} disable={true} />
                ) : (
                  <EachDeckSeat id={12} color={"gray"} disable={false} />
                )}
                {bookedSeates.includes("13") ? (
                  <EachDeckSeat id={13} color={"red"} disable={true} />
                ) : (
                  <EachDeckSeat id={13} color={"gray"} disable={false} />
                )}
                {bookedSeates.includes("14") ? (
                  <EachDeckSeat id={14} color={"red"} disable={true} />
                ) : (
                  <EachDeckSeat id={14} color={"gray"} disable={false} />
                )}
                {bookedSeates.includes("15") ? (
                  <EachDeckSeat id={15} color={"red"} disable={true} />
                ) : (
                  <EachDeckSeat id={15} color={"gray"} disable={false} />
                )}
              </div>
              <div className={styles.doublerow}>
                {bookedSeates.includes("16") ? (
                  <EachDeckSeat id={16} color={"red"} disable={true} />
                ) : (
                  <EachDeckSeat id={16} color={"gray"} disable={false} />
                )}
                {bookedSeates.includes("17") ? (
                  <EachDeckSeat id={17} color={"red"} disable={true} />
                ) : (
                  <EachDeckSeat id={17} color={"gray"} disable={false} />
                )}
                {bookedSeates.includes("18") ? (
                  <EachDeckSeat id={18} color={"red"} disable={true} />
                ) : (
                  <EachDeckSeat id={18} color={"gray"} disable={false} />
                )}
                {bookedSeates.includes("19") ? (
                  <EachDeckSeat id={19} color={"red"} disable={true} />
                ) : (
                  <EachDeckSeat id={19} color={"gray"} disable={false} />
                )}
                {bookedSeates.includes("20") ? (
                  <EachDeckSeat id={20} color={"red"} disable={true} />
                ) : (
                  <EachDeckSeat id={20} color={"gray"} disable={false} />
                )}
              </div>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "left", marginTop: "25px", width: "100%" }}>
          <h4>Upper Deck</h4>
          <div className={styles.maincontainer}>
            <div className={styles.singlerow}>
              {bookedSeates.includes("6") ? (
                <EachDeckSeat id={6} color={"red"} disable={true} />
              ) : (
                <EachDeckSeat id={6} color={"gray"} disable={false} />
              )}
              {bookedSeates.includes("7") ? (
                <EachDeckSeat id={7} color={"red"} disable={true} />
              ) : (
                <EachDeckSeat id={7} color={"gray"} disable={false} />
              )}
              {bookedSeates.includes("8") ? (
                <EachDeckSeat id={8} color={"red"} disable={true} />
              ) : (
                <EachDeckSeat id={8} color={"gray"} disable={false} />
              )}
              {bookedSeates.includes("9") ? (
                <EachDeckSeat id={9} color={"red"} disable={true} />
              ) : (
                <EachDeckSeat id={9} color={"gray"} disable={false} />
              )}
              {bookedSeates.includes("10") ? (
                <EachDeckSeat id={10} color={"red"} disable={true} />
              ) : (
                <EachDeckSeat id={10} color={"gray"} disable={false} />
              )}
            </div>
            <div className={styles.maincontainer1}>
              <div className={styles.doublerow}>
                {bookedSeates.includes("21") ? (
                  <EachDeckSeat id={21} color={"red"} disable={true} />
                ) : (
                  <EachDeckSeat id={21} color={"gray"} disable={false} />
                )}
                {bookedSeates.includes("22") ? (
                  <EachDeckSeat id={22} color={"red"} disable={true} />
                ) : (
                  <EachDeckSeat id={22} color={"gray"} disable={false} />
                )}
                {bookedSeates.includes("23") ? (
                  <EachDeckSeat id={23} color={"red"} disable={true} />
                ) : (
                  <EachDeckSeat id={23} color={"gray"} disable={false} />
                )}
                {bookedSeates.includes("24") ? (
                  <EachDeckSeat id={24} color={"red"} disable={true} />
                ) : (
                  <EachDeckSeat id={24} color={"gray"} disable={false} />
                )}
                {bookedSeates.includes("25") ? (
                  <EachDeckSeat id={25} color={"red"} disable={true} />
                ) : (
                  <EachDeckSeat id={25} color={"gray"} disable={false} />
                )}
              </div>
              <div className={styles.doublerow}>
                {bookedSeates.includes("26") ? (
                  <EachDeckSeat id={26} color={"red"} disable={true} />
                ) : (
                  <EachDeckSeat id={26} color={"gray"} disable={false} />
                )}
                {bookedSeates.includes("27") ? (
                  <EachDeckSeat id={27} color={"red"} disable={true} />
                ) : (
                  <EachDeckSeat id={27} color={"gray"} disable={false} />
                )}
                {bookedSeates.includes("28") ? (
                  <EachDeckSeat id={28} color={"red"} disable={true} />
                ) : (
                  <EachDeckSeat id={28} color={"gray"} disable={false} />
                )}
                {bookedSeates.includes("29") ? (
                  <EachDeckSeat id={29} color={"red"} disable={true} />
                ) : (
                  <EachDeckSeat id={29} color={"gray"} disable={false} />
                )}
                {bookedSeates.includes("30") ? (
                  <EachDeckSeat id={30} color={"red"} disable={true} />
                ) : (
                  <EachDeckSeat id={30} color={"gray"} disable={false} />
                )}
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
                  {ticket?.map((ele, i) => {
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
              <button
                className={styles.btn}
                onClick={() => handleClicked(ele.price)}
              >
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
