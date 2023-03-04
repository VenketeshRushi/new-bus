import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../Styles/login.module.css";
import { useDispatch } from "react-redux";
import axios from "axios";
import { error, success } from "../Utils/notification";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function Signup() {
  const initialData = {
    email: "",
    password: "",
  };
  const [signUpcreds, setsignUpcreds] = useState(initialData);
  const [showpassword, setshowpassword] = useState(false);
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
      error("Plaese Fill Details");
    } else {
      try {
        let response = await axios.post(
          "http://localhost:8080/user/signup",
          signUpcreds
        );
        console.log(response);
        if (response.data.status === "Failed") {
          error(response.data.message);
        } else {
          navigate("/signin");
          success(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <div className={styles.login}>
        <h1 className="h3 mb-3 fw-normal">Sign Up</h1>
        <div>
          <p style={{ textAlign: "left", marginBottom: "0px" }}>Email</p>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email address"
            name="email"
            onChange={hanldeChange}
          />
        </div>
        <p style={{ textAlign: "left", marginBottom: "0px" }}>Password</p>
        <div className="form-floating">
          <div class="input-group mb-3">
            <input
              type={showpassword ? "text" : "password"}
              className="form-control"
              placeholder="Enter Your Password"
              name="password"
              onChange={hanldeChange}
            />
            <span
              class="input-group-text"
              style={{ cursor: "pointer" }}
              onClick={() => setshowpassword(!showpassword)}
            >
              {showpassword ? <AiFillEye /> : <AiFillEyeInvisible />}
            </span>
          </div>
        </div>
        <div>
          <p>
            Already a user ? <Link to={"/signin"}>SignIn</Link>
          </p>
        </div>
        <button className="w-100 btn btn-lg btn-primary" onClick={handleSubmit}>
          Sign up
        </button>
      </div>
    </>
  );
}

export default Signup;
