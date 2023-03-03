import {
  AUTH_LOG_IN_SUCCESS,
  AUTH_LOG_IN_ERROR,
  AUTH_LOG_OUT,
} from "./auth.types";
import axios from "axios";
import Cookies from "js-cookie";
import { error, success } from "../../Utils/notification";

export const loginAPI = (data, navigate) => async (dispatch) => {
  try {
    let response = await axios.post("http://localhost:8080/user/login", data);
    console.log(response);
    if (response.data.status === "Failed") {
      error(response.data.message);
    } else {
      Cookies.set("jwttoken", response.data.message.token, {
        expires: new Date(new Date().getTime() + 60 * 60 * 1000),
      });
      Cookies.set("userid", response.data.message.user._id, {
        expires: new Date(new Date().getTime() + 60 * 60 * 1000),
      });
      dispatch({
        type: AUTH_LOG_IN_SUCCESS,
        payload: response.data,
      });
      success("Sign In successfully");
      navigate("/");
    }
  } catch (error) {
    dispatch({
      type: AUTH_LOG_IN_ERROR,
    });
    console.log(error.response.data.message);
  }
};

export const logoutAPI = () => ({ type: AUTH_LOG_OUT });

export const resetpassword = (data, toast, navigate) => async (dispatch) => {
  try {
    let res = await axios.post(
      "https://blog-app-yz77.onrender.com/user/checkmail",
      {
        data,
      }
    );
    dispatch({
      type: RESET_PASSWORD,
      payload: res.data.email,
    });
    Cookies.set("otp", res.data.otp, {
      expires: new Date(new Date().getTime() + 5 * 60 * 1000),
    });
    setToast(toast, "Reset OTP Sent To Your Email", "success");
    navigate("/resetpassword");
  } catch (error) {
    setToast(toast, error.response.data.message, "error");
  }
};

export const resetpasswordremove = () => ({
  type: RESET_PASSWORD_REMOVE,
});

export const refreshCheck = (navigate) => async (dispatch) => {
  try {
    let refreshtoken = Cookies.get("refreshtoken");
    let response = await axios.post(
      "https://blog-app-yz77.onrender.com/user/refresh",
      {
        headers: {
          Authorization: "Bearer " + refreshtoken,
        },
      }
    );
    console.log(response.data);
    Cookies.set("jwttoken", response.data.jwttoken, {
      expires: new Date(new Date().getTime() + 60 * 60 * 1000),
    });
    Cookies.set("userid", response.data.userid, {
      expires: new Date(new Date().getTime() + 60 * 60 * 1000),
    });
    Cookies.set("role", response.data.role, {
      expires: new Date(new Date().getTime() + 60 * 60 * 1000),
    });
    dispatch({
      type: REFRESH,
      payload: response.data,
    });
    navigate("/blogs");
  } catch (error) {
    dispatch({
      type: REFRESH_REMOVE,
    });
  }
};
