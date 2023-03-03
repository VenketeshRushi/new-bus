import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const Private = ({ children }) => {
  const token = useSelector((state) => state.auth.data.token);
  if (!token) {
    return <Navigate to={"/signin"} />;
  } else {
    return children;
  }
};
