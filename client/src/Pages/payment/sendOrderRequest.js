import axios from "axios";
import { removeall } from "../../Redux/ticket/ticket.action";
import { success } from "../../Utils/notification";

export const sendOrderRequest = async (
  creds,
  orderId,
  response,
  date,
  ticket,
  busid,
  userid,
  amount,
  token,
  dispatch,
  navigate
) => {
  let ticketSummary = {
    date: date,
    ticket: ticket,
    amount: amount,
  };
  let userDetails = creds;
  const payload = {
    ticketSummary,
    paymentDetails: {
      orderId,
      razorpayOrderId: response.razorpay_order_id,
      razorpayPaymentId: response.razorpay_payment_id,
    },
    userDetails,
    bus:busid,
    user: userid,
  };

  try {
    await axios.post("http://localhost:8080/order", payload, {
      headers: { Authorization: `Bearer ${token}` },
    });

    success("Ticket Booked successfully");
    dispatch(removeall());
    navigate("/");
  } catch (err) {
    console.log(err);
  }
};
