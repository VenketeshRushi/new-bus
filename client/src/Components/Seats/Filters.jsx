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
    DTB6: false,
    DT612: false,
    DT126: false,
    DTA6: false,
    ATB6: false,
    AT612: false,
    AT126: false,
    ATA6: false,
  };
  const [change, setChange] = useState(initialData1);
  function handlechange(e) {
    setChange({
      ...change,
      [e.target.name]: !change[e.target.name],
    });
    //console.log("handlechange", change);
  }
  //console.log("outside of functions", change);
  function handleapply() {
    //console.log("handlebutton", change);
    dispatch(filterdata(change));
  }
  return (
    <div>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              BUS TYPES
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
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
                  <input
                    checked={change.DTB6}
                    name="DTB6"
                    onChange={handlechange}
                    type="checkbox"
                  />
                  <label>Before 6 am</label>
                </div>
                <div>
                  <input
                    checked={change.DT612}
                    name="DT612"
                    onChange={handlechange}
                    type="checkbox"
                  />
                  <label>6 am to 12 pm</label>
                </div>
                <div>
                  <input
                    checked={change.DT126}
                    name="DT126"
                    onChange={handlechange}
                    type="checkbox"
                  />
                  <label>12pm to 6 pm</label>
                </div>
                <div>
                  <input
                    checked={change.DTA6}
                    name="DTA6"
                    onChange={handlechange}
                    type="checkbox"
                  />
                  <label>After 6 pm</label>
                </div>
                <button className={styles.btn} onClick={handleapply}>
                  Apply
                </button>
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
                  <input
                    checked={change.ATB6}
                    name="ATB6"
                    onChange={handlechange}
                    type="checkbox"
                  />
                  <label>Before 6 am</label>
                </div>
                <div>
                  <input
                    checked={change.AT612}
                    name="AT612"
                    onChange={handlechange}
                    type="checkbox"
                  />
                  <label>6 am to 12 pm</label>
                </div>
                <div>
                  <input
                    checked={change.AT126}
                    name="AT126"
                    onChange={handlechange}
                    type="checkbox"
                  />
                  <label>12pm to 6 pm</label>
                </div>
                <div>
                  <input
                    checked={change.ATA6}
                    name="ATA6"
                    onChange={handlechange}
                    type="checkbox"
                  />
                  <label>After 6 pm</label>
                </div>
                <button className={styles.btn} onClick={handleapply}>
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Filters;

