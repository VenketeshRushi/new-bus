import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "../Styles/login.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { loginAPI } from "../Redux/authentication/auth.action";
import { error } from "../Utils/notification";

function Signin() {
  const isAuthenticated = useSelector(
    (state) => state.auth.data.isAuthenticated
  );
  const { state } = useLocation();
  useEffect(() => {
    if (isAuthenticated) {
      if (state.from) {
        console.log(state.from);
        navigate(state.from, { replace: true });
      } else {
        navigate("/");
      }
    }
  }, [isAuthenticated]);

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

  const handleSubmit = async () => {
    if (signUpcreds.email === "" || signUpcreds.password === "") {
      return error("Please enter all required fields");
    }
    dispatch(loginAPI(signUpcreds, navigate));
  };

  return (
    <>
      <div className={styles.login}>
        <h1 className="h3 mb-3 fw-bold">Sign In</h1>
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
          <div className="input-group mb-3">
            <input
              type={showpassword ? "text" : "password"}
              className="form-control"
              placeholder="Enter Your Password"
              name="password"
              onChange={hanldeChange}
            />
            <span
              className="input-group-text"
              style={{ cursor: "pointer" }}
              onClick={() => setshowpassword(!showpassword)}
            >
              {showpassword ? <AiFillEye /> : <AiFillEyeInvisible />}
            </span>
          </div>
        </div>
        <p style={{ textAlign: "right", marginTop: "-10px" }}>
          <Link>Forgot Password</Link>
        </p>
        <button
          className="w-100  btn btn-lg btn-primary"
          onClick={handleSubmit}
        >
          Sign In
        </button>
        <div style={{ textAlign: "center", marginTop: "15px" }}>
          <p>
            Dont Have Account?{" "}
            <Link
              to={"/signup"}
              style={{
                paddingLeft: 10,
                textDecoration: "none",
              }}
            >
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signin;
