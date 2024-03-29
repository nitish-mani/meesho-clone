import { useNavigate } from "react-router-dom";
import "./payment.css";
import { useState } from "react";

export default function Payment() {
  const navigate = useNavigate();
  // const [bgcolor, setBgcolor] = useState("");
  const [netbank, setNetbank] = useState("");
  const [card, setCard] = useState("");

  // function setcolor() {
  //   setBgcolor("#b2f2bb");
  // }
  return (
    <>
      <div className="payment">
        <h1>Payment Page</h1>

        <div className="bold">Cards</div>

        <select
          onChange={(e) => {
            if (!(e.target.value === "Select Card") && !netbank)
              setCard(e.target.value);
            else {
              setCard("");
              // alert("You have selected Net-Banking");
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
          className="procede hover1"
          onClick={() => {
            netbank ? navigate("/bank") : navigate("/ccard");
          }}
        >
          {netbank || card ? "Make Payment" : "Proceed"}
        </div>
      </div>
    </>
  );
}
