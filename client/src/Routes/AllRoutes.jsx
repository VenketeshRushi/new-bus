import Footer from "../Pages/Footer";
import Navbar from "../Pages/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import SelectBus from "../Pages/SelectBus";
import Details from "../Pages/Details";

function AllRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/selectbus" element={<SelectBus />}></Route>
        <Route path="/details/:id" element={<Details />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default AllRoutes;
