import { Outlet, useNavigate } from "react-router-dom";
import "./payment.css";
import { useState } from "react";

export default function Payment() {
  const navigate = useNavigate();
  const [bgcolor, setBgcolor] = useState("");
  const [netbank, setNetbank] = useState("");
  const [card, setCard] = useState("");

  function setcolor() {
    setBgcolor("#b2f2bb");
  }
  return (
    <>
      <div className="payment">
        <h1>Payment Page</h1>
        {/* <div className="bold">Net-Banking</div>
        <div className="bold">UPI</div> */}
        <div className="bold">Cards</div>
        {/* <select
          onChange={(e) => {
            if (!(e.target.value === "Select Bank") && !card)
              setNetbank(e.target.value);
            else {
              setNetbank("");
              alert("You have selected Cards");
            }
          }}
        >
          <option>Select Bank</option>
          <option>SBI</option>
          <option>CBI</option>
          <option>HDFC Bank</option>
          <option>Axis Bank</option>
          <opt>ICICI Bank</opt>
        </select>
        <div className="upi">
          <div className="phonepay">PhonePay</div>
          <div className="paytm">Paytm</div>
          <div className="googlepay">GooglePay</div>
        </div> */}
        <select
          onChange={(e) => {
            if (!(e.target.value === "Select Card") && !netbank)
              setCard(e.target.value);
            else {
              setCard("");
              alert("You have selected Net-Banking");
              setNetbank("Select Bank");
            }
          }}
        >
          <option>Select Card</option>
          <option>Credit Card</option>
          <option>Debit Card</option>
        </select>
        <div className="outlet"></div>

        <div
          className="procede"
          onClick={() => {
            netbank ? navigate("/bank") : navigate("/ccard");
            setcolor();
          }}
        >
          {netbank || card ? "Make Payment" : "Proceed"}
        </div>
      </div>
    </>
  );
}
