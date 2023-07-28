import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import styles from "../Styles/details.module.css";
import { validateEmail, validateMobile } from "../Utils/formValidator";
import { error } from "../Utils/notification";
import Cookies from "js-cookie";
import axios from "axios";
import { initPayment } from "./payment/razorpay";

function Details() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  let [searchParams, setSearchParams] = useSearchParams();

  const initialData = {
    name: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
  };
  const [creds, setcreds] = useState(initialData);

  function hanldeChange(e) {
    setcreds({
      ...creds,
      [e.target.name]: e.target.value,
    });
  }

  async function handleclick(e) {
    e.preventDefault();
    let busid = params.id;
    let date = searchParams.get("date");
    let ticket = searchParams.get("ticket");
    let amount = searchParams.get("amount");
    let token = Cookies.get("jwttoken");
    let userid = Cookies.get("userid");
    // console.log(date, ticket, busid, amount, token, userid);

    if (
      creds.name === "" ||
      creds.age === "" ||
      creds.gender === "" ||
      creds.email === "" ||
      creds.phone === ""
    ) {
      return error("Please fill all details");
    }

    const isEmail = validateEmail(creds.email);
    if (!isEmail.status) {
      return error(isEmail.message);
    }

    const isMobile = validateMobile(creds.phone);
    if (!isMobile.status) {
      return error(isMobile.message);
    }

    const { data } = await axios.post(
      "http://localhost:8080/api/payment/ticket",
      {
        amount: amount,
      }
    );

    let busdata = JSON.parse(sessionStorage.getItem("busData"));

    initPayment(
      busdata,
      creds,
      data,
      date,
      ticket,
      busid,
      userid,
      amount,
      token,
      dispatch,
      navigate
    );
  }
  return (
    <div className={styles.details}>
      <form onSubmit={(e) => handleclick(e)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            name="name"
            onChange={hanldeChange}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            age
          </label>
          <input
            name="age"
            onChange={hanldeChange}
            type="number"
            className="form-control"
          />
        </div>
        <div className="form-floating mb-3">
          <select
            className="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
            name="gender"
            onChange={hanldeChange}
          >
            <option selected>Select Your Gender</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
          </select>
          <label htmlFor="floatingSelect">Gender</label>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            onChange={hanldeChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone No
          </label>
          <input
            name="phone"
            onChange={hanldeChange}
            type="number"
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
export default Details;
