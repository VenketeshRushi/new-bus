import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../Styles/login.module.css";
import { useDispatch } from "react-redux";

import axios from "axios";
import { error, success } from "../Utils/notification";
import { ToastContainer } from "react-toastify";

function Signup() {
  const initialData = {
    email: "",
    password: "",
  };
  const [signUpcreds, setsignUpcreds] = useState(initialData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setsignUpcreds({
      ...signUpcreds,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (signUpcreds.email === "" || signUpcreds.password === "") {
      console.log("hi");
      error("Plaese Fill Details");
      console.log("bye");
    } else {
      console.log("no");
    }

    // try {
    //   let response = await axios.post(
    //     "http://localhost:8080/user/signup",
    //     signUpcreds
    //   );
    //   if(response.data.status === "failed"){
    //     error(response.data.message)
    //   }else{
    //     success(response.data.message)
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className={styles.login}>
        <h1 className="h3 mb-3 fw-normal">Sign Up</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            name="email"
            onChange={hanldeChange}
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            name="password"
            onChange={hanldeChange}
          />
          <label for="floatingPassword">Password</label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign up
        </button>
      </form>
    <ToastContainer/>
    </>
  );
}

export default Signup;
