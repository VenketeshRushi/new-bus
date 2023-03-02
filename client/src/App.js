import "./App.css";
import Navbar from "./Pages/Navbar";
import Slider from "./Components/Landing/Slider";
import Safety from "./Components/Landing/Safety";
import Coupon from "./Components/Landing/Coupon";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Coupon />
      <Safety />
    </div>
  );
}

export default App;
