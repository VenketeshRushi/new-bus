import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../Styles/landing.module.css";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

function Search() {
  const [source, setsource] = useState("");
  const [destination, setdestination] = useState("");
  const [date, setdate] = useState("");
  const [img, setimg] = useState(require(`../Images/heroimage2.png`));
  const [savingi, setsavingi] = useState(0);
  const [hover, sethover] = useState(false);

  const imgarr = [
    require("../Images/pexels-photo-3935702.jpeg"),
    require("../Images/pexels-photo-1157386.jpeg"),
    require("../Images/pexels-photo-4452209.jpeg"),
    require("../Images/heroimage2.png"),
  ];

  useEffect(() => {
    let i = 0;
    setInterval(() => {
      if (i === 4) {
        i = 0;
        setsavingi(0);
        setimg(imgarr[i]);
      }
      console.log(savingi);
      setsavingi(i);
      setimg(imgarr[i]);
      i++;
    }, 3000);
  }, []);

  function handleclicked() {
    if (date === "" || destination === "" || date === "") {
      alert("please fill all the fields");
    }
  }

  async function getcityinfo(q) {
    let res = await axios.post("http://localhost:8080/cities", { q });
    console.log(res);
  }

  function handelChnage(e) {
    console.log(e.target.value);
    // setTimeout(() => {
    //   getcityinfo(source);
    // }, 500);
  }
  function handelhover() {
    sethover(true);
  }

  function handelhoverout() {
    sethover(false);
  }

  function handleright() {
    console.log(savingi);
    if (savingi ===  3|| savingi >= 4 || savingi == 3) {
      setsavingi((savingi) => savingi - savingi);
      setimg(imgarr[savingi]);
      return;
    }
    setsavingi((savingi) => savingi + 1);
    setimg(imgarr[savingi]);
  }

  function handleleft() {
    console.log(savingi);
    if (savingi === 0 || savingi <= 0) {
      setsavingi(3);
      setimg(imgarr[savingi]);
      return;
    }
    if (savingi >= 4) {
      setsavingi(0);
      setimg(imgarr[savingi]);
      return;
    }
    setsavingi((savingi) => savingi - 1);
    setimg(imgarr[savingi]);
  }
  return (
    <>
      <div
        className={styles.Carousel}
        onMouseOver={handelhover}
        onMouseLeave={handelhoverout}
      >
        <div>
          <img src={img} alt="" />
        </div>
      </div>

      <div className={styles.data}>
        <input
          type="text"
          placeholder="Source"
          onChange={(e) => handelChnage(e)}
        />
        <input
          type="text"
          placeholder="Destination"
          onChange={(e) => setdestination(e.target.value)}
        />
        <input type="date" onChange={(e) => setdate(e.target.value)} />
        <button onClick={handleclicked}>Search</button>
      </div>
      <button
        className={styles.left}
        disabled={!hover}
        onMouseOver={handelhover}
        onClick={() => handleleft()}
      >
        <AiOutlineLeft />
      </button>
      <button
        className={styles.right}
        disabled={!hover}
        onClick={() => handleright()}
        onMouseOver={handelhover}
      >
        <AiOutlineRight />
      </button>

      <div>
        <div>
          <p>save upto rs 150</p>
          <img src="" alt="" />
          <p>Use code FIRST</p>
        </div>
        <div>
          {" "}
          <p>save upto rs 150</p>
          <img src="" alt="" />
          <p></p>
        </div>
        <div>
          {" "}
          <p>save upto rs 150</p>
          <img src="" alt="" />
          <p></p>
        </div>
      </div>
    </>
  );
}

export default Search;
