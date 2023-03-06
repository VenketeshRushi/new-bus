import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <AllRoutes />
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;
