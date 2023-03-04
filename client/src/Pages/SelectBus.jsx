import { useEffect, useState, useReducer } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "../Styles/selectbus.module.css";
import axios from "axios";
import { AiTwotoneStar } from "react-icons/ai";
import { BiArrowFromLeft } from "react-icons/bi";
import { saveData } from "../Redux/filter/filter.actiontypes";
import { removeall } from "../Redux/ticket/ticket.action";
function SelectBus() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [backupdata, setBackupData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(removeall());
  }, []);

  const initialData = {
    SEATER: false,
    SLEEPER: false,
    AC: false,
    NONAC: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "seater":
        return {
          ...state,
          SEATER: !state.SEATER,
        };
      case "sleeper":
        return {
          ...state,
          SLEEPER: !state.SLEEPER,
        };
      case "ac":
        return {
          ...state,
          AC: !state.AC,
        };
      case "nonac":
        return {
          ...state,
          NONAC: !state.NONAC,
        };
      default:
        return state;
    }
  };

  const [change, setChange] = useState(initialData);

  const [state, dispatch] = useReducer(reducer, initialData);

  useEffect(() => {
    let from = searchParams.get("from");
    let to = searchParams.get("to");
    let date = searchParams.get("date");
    getdata(from, to, date);
  }, []);
  async function getdata(from, to, date) {
    console.log(from, to, date);
    try {
      let res = await axios.post("http://localhost:8080/bus/getall", {
        from,
        to,
        date,
      });
      setData(res.data);
      setBackupData(res.data);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  function handlechange(e) {
    const { name } = e.target;
    if (name === "SEATER") {
      dispatch({ type: "seater" });
    } else if (name === "SLEEPER") {
      dispatch({ type: "sleeper" });
    } else if (name === "AC") {
      dispatch({ type: "AC" });
    } else if (name === "NONAC") {
      dispatch({ type: "NONAC" });
    }
  }

  async function handlebook(ele) {
    navigate({
      pathname: `/bookticket/${ele._id}`,
      search: `?&date=${searchParams.get("date")}`,
    });
  }

  return (
    <>
      <div className={styles.main}>
        <div className={styles.filter}>
          <h5
            style={{
              textAlign: "left",
              marginLeft: "25px",
            }}
          >
            FILTERS
          </h5>
          <hr />
          <div className={styles.compartment}>
            <p>BUS TYPES</p>
            <div>
              <input
                checked={change.SEATER}
                name="SEATER"
                onChange={handlechange}
                // onChange={() => dispatch({ type: "seater" })}
                type="checkbox"
              />
              <label>SEATER</label>
            </div>
            <div>
              <input
                checked={change.SLEEPER}
                name="SLEEPER"
                onChange={handlechange}
                // onChange={() => dispatch({ type: "sleeper" })}
                type="checkbox"
              />
              <label>SLEEPER</label>
            </div>
            <div>
              <input
                checked={change.AC}
                name="AC"
                onChange={handlechange}
                // onChange={() => dispatch({ type: "ac" })}
                type="checkbox"
              />
              <label>AC</label>
            </div>
            <div>
              <input
                checked={change.NONAC}
                name="NONAC"
                onChange={handlechange}
                // onChange={() => dispatch({ type: "nonac" })}
                type="checkbox"
              />
              <label>NON-AC</label>
            </div>
            {/* <button onClick={() => handleclicked()}>Apply</button> */}
          </div>
          <hr />
          <div className={styles.compartment}>
            <p>DEPARTURE TIME</p>
            <div>
              <input type="checkbox" />
              <label>Before 6 am</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>6 am to 12 pm</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>12pm to 6 pm</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>After 6 pm</label>
            </div>
          </div>
          <hr />
          <div className={styles.compartment}>
            <p>ARRIVAL TIME</p>
            <div>
              <input type="checkbox" />
              <label>Before 6 am</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>6 am to 12 pm</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>12pm to 6 pm</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>After 6 pm</label>
            </div>
          </div>
          <hr />
        </div>
        <div className={styles.busdata}>
          {data?.map((ele) => {
            return (
              <div>
                <h5>
                  {ele.companyname.charAt(0).toUpperCase() +
                    ele.companyname.slice(1)}{" "}
                  Travels
                </h5>
                <div>
                  {" "}
                  <p>{ele.from}</p>
                  <p>
                    <BiArrowFromLeft />
                  </p>
                  <p>{ele.to}</p>
                </div>
                <div>
                  {" "}
                  <p>{ele.aminites1}</p>
                  <p>{ele.aminites2}</p>
                </div>
                <hr />
                <h6>Arrival Time : {ele.arrival}</h6>
                <h6>Departure Time : {ele.departure}</h6>
                <hr />
                <h6>Email : {ele.email}</h6>
                <h6>Phone : {ele.phone}</h6>
                <hr />
                <div>
                  {" "}
                  <h5>Price : ₹ {ele.price}</h5>
                  <h5>
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <AiTwotoneStar
                          key={i}
                          color={i < ele.rating ? "#FFED00" : "gray"}
                        />
                      ))}
                  </h5>
                </div>
                <button onClick={() => handlebook(ele)}>View Seats</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default SelectBus;
