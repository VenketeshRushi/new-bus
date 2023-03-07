import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

export const Private = ({ children }) => {
  const token = useSelector((state) => state.auth.data.token);
   let tokencookies= Cookies.get("jwttoken")
  console.log("token",token,"cookie",tokencookies)
  if (!token || tokencookies == undefined) {
    return <Navigate to={"/signin"} />;
  } else {
    return children;
  }
};
