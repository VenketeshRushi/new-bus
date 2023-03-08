import axios from "axios";
import { removeall } from "../../Redux/ticket/ticket.action";
import { success } from "../../Utils/notification";

export const sendOrderRequest = async (
  busdata,
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

  console.log("Sending order request", busdata);
  let busDetails = {
    name: busdata[0].companyname,
    from: busdata[0].from,
    to: busdata[0].to,
    contactemail: busdata[0].email,
    contactphone: busdata[0].phone,
    arrival: busdata[0].arrival,
    departure: busdata[0].departure,
  };

  const payload = {
    busDetails,
    ticketSummary,
    paymentDetails: {
      orderId,
      razorpayOrderId: response.razorpay_order_id,
      razorpayPaymentId: response.razorpay_payment_id,
    },
    userDetails,
    bus: busid,
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
