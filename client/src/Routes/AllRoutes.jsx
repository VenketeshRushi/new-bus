import Footer from "../Pages/Footer";
import Navbar from "../Pages/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import SelectBus from "../Pages/SelectBus";

function AllRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/selectbus/:from_id/:to_id" element={<SelectBus />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default AllRoutes;
