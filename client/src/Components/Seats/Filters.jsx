import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterdata } from "../../Redux/filter/filter.action";
import styles from "../../Styles/selectbus.module.css";
function Filters() {
  const dispatch = useDispatch();
  const initialData1 = {
    SEATER: false,
    SLEEPER: false,
    AC: false,
    NONAC: false,
  };
  const [change, setChange] = useState(initialData1);
  function handlechange(e) {
    setChange({
      ...change,
      [e.target.name]: !change[e.target.name],
    });
  }

  function handleapply() {
    dispatch(filterdata(change));
  }
  return (
    <div>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              BUS TYPES
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className={styles.compartment}>
                <div>
                  <input
                    checked={change.SEATER}
                    name="SEATER"
                    onChange={handlechange}
                    type="checkbox"
                  />
                  <label>SEATER</label>
                </div>
                <div>
                  <input
                    checked={change.SLEEPER}
                    name="SLEEPER"
                    onChange={handlechange}
                    type="checkbox"
                  />
                  <label>SLEEPER</label>
                </div>
                <div>
                  <input
                    checked={change.AC}
                    name="AC"
                    onChange={handlechange}
                    type="checkbox"
                  />
                  <label>AC</label>
                </div>
                <div>
                  <input
                    checked={change.NONAC}
                    name="NONAC"
                    onChange={handlechange}
                    type="checkbox"
                  />
                  <label>NON-AC</label>
                </div>
                <button className={styles.btn} onClick={handleapply}>
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              DEPARTURE TIME
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              {" "}
              <div className={styles.compartment}>
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
                <button className={styles.btn}>Apply</button>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              ARRIVAL TIME
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              {" "}
              <div className={styles.compartment}>
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
                <button className={styles.btn}>Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Filters;

// <div className={styles.compartment}>
// <p>BUS TYPES</p>
// <div>
//   <input
//     checked={change.SEATER}
//     name="SEATER"
//     onChange={handlechange}
//     type="checkbox"
//   />
//   <label>SEATER</label>
// </div>
// <div>
//   <input
//     checked={change.SLEEPER}
//     name="SLEEPER"
//     onChange={handlechange}
//     type="checkbox"
//   />
//   <label>SLEEPER</label>
// </div>
// <div>
//   <input
//     checked={change.AC}
//     name="AC"
//     onChange={handlechange}
//     type="checkbox"
//   />
//   <label>AC</label>
// </div>
// <div>
//   <input
//     checked={change.NONAC}
//     name="NONAC"
//     onChange={handlechange}
//     type="checkbox"
//   />
//   <label>NON-AC</label>
// </div>
// {/* <button onClick={() => handleclicked()}>Apply</button> */}
// </div>
// <hr />
// <div className={styles.compartment}>
// <p>DEPARTURE TIME</p>
// <div>
//   <input type="checkbox" />
//   <label>Before 6 am</label>
// </div>
// <div>
//   <input type="checkbox" />
//   <label>6 am to 12 pm</label>
// </div>
// <div>
//   <input type="checkbox" />
//   <label>12pm to 6 pm</label>
// </div>
// <div>
//   <input type="checkbox" />
//   <label>After 6 pm</label>
// </div>
// </div>
// <hr />
// <div className={styles.compartment}>
// <p>ARRIVAL TIME</p>
// <div>
//   <input type="checkbox" />
//   <label>Before 6 am</label>
// </div>
// <div>
//   <input type="checkbox" />
//   <label>6 am to 12 pm</label>
// </div>
// <div>
//   <input type="checkbox" />
//   <label>12pm to 6 pm</label>
// </div>
// <div>
//   <input type="checkbox" />
//   <label>After 6 pm</label>
// </div>
// </div>
// <hr />

// let obj = {
//  "1": false,
//  "2": false,
//  "3": false,
//  "4": false,
//  "5": false,
//  "6": false,
//  "7": false,
//  "8": false,
//  "9": false,
//   "10": false,
//   "11": false,
//   "12": false,
//   "13": false,
//   "14": false,
//   "15": false,
//   "16": false,
//   "17": false,
//   "18": false,
//   "19": false,
//   "20": false,
//   "21": false,
//   "22": false,
//   "23": false,
//   "24": false,
//   "25": false,
//   "26": false,
//   "27": false,
//   "28": false,
//   "29": false,
//   "30": false,
// };
