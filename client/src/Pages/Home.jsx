import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { default as Awards } from "../Components/Landing/Awards";
import { default as Growing } from "../Components/Landing/Growing";
import { default as Info } from "../Components/Landing/Info";
import { default as Reviews } from "../Components/Landing/Reviwes";
import { default as Safety } from "../Components/Landing/Safety";
import { default as Section } from "../Components/Landing/Section";
import { default as Services } from "../Components/Landing/Services";
import { default as Slider } from "../Components/Landing/Slider";
import { removeall } from "../Redux/ticket/ticket.action";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(removeall());
  }, []);
  return (
    <>
      <Slider />
      <Info />
      <Safety />
      <Services />
      <Awards />
      <Reviews />
      <Growing />
      <Section />
    </>
  );
}
export default Home;
