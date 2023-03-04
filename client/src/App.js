import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import { ToastContainer } from "react-toastify";
import Bookseat from "./Pages/Bookseat";


function App() {
  return (
    <div className="App">
      <AllRoutes />
      {/* <Bookseat/> */}
      <ToastContainer autoClose={3000} />
    </div>
  );
}

export default App;
