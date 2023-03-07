import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

function Myticket() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    let userid = Cookies.get("userid");
    getdata(userid);
  }, []);

  async function getdata(id) {
    try {
      let res = await axios.post("http://localhost:8080/order/myticket", id);
      setdata(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  return <>MYTICKET</>;
}
export default Myticket;
