import axios from "axios";
import logo from "../../Images/logo.png";
import { error, success } from "../../Utils/notification";
import { sendOrderRequest } from "./sendOrderRequest";

export const initPayment = (
  busdata,
  creds,
  orderDetails,
  date,
  ticket,
  busid,
  userid,
  amount,
  token,
  dispatch,
  navigate
) => {
  const { name, age, gender, mobile, email } = creds;

  const options = {
    key: "rzp_test_EpEUZjh3akkK9N",
    order_id: orderDetails.id,
    amount: orderDetails.amount,
    currency: orderDetails.currency,
    image: logo,
    name: "Blue Bus",
    description: "Thanks For Booking, Happy Journey!",

    prefill: {
      name: `${name}`,
      email: email,
      contact: mobile,
      age: age,
      gender: gender,
    },

    handler: async function (response) {
      try {
        const { data } = await axios.post(
          "http://localhost:8080/api/payment/verify",
          response
        );

        success(data.message);

        sendOrderRequest(
          busdata,
          creds,
          orderDetails.id,
          response,   
          date,
          ticket,
          busid,
          userid,
          amount,
          token,
          dispatch,
          navigate
        );
        
      } catch (error) {
        console.log(error);
        return { status: false };
      }
    },

    theme: { color: "#5266FA" },
  };

  const rzp = new window.Razorpay(options);

  //If payment failed
  rzp.on("payment.failed", (response) => {
    console.log(response.error);
    error("Payment failed, please try again");
    return { status: false };
  });

  //Open razorpay window
  rzp.open();
};
