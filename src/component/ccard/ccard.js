import { useState } from "react";
import "./ccard.css";
import { useNavigate } from "react-router-dom";

export default function Ccard({ setCartD, cartD }) {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const navigate = useNavigate();
  return (
    <div className="ccard">
      <h3>Enter Card Number</h3>
      <input
        onChange={(e) => {
          if (e.target.value.length === 4 || e.target.value.length === 9) {
            console.log(e.target.value);
            e.target.value = e.target.value + " ";
            setCardNumber(e.target.value);
          }
          setCardNumber(e.target.value);
        }}
        value={cardNumber}
        required
        placeholder="**** **** **** ****"
      />
      <h3>Expiry</h3>
      <input
        placeholder="mm / yy"
        required
        onChange={(e) => {
          setExpiry(e.target.value);
        }}
      />
      <h3>CVV</h3>
      <input
        placeholder="cvv"
        required
        onChange={(e) => {
          setCvv(e.target.value);
        }}
      />
      <div
        className="makepay"
        onClick={() => {
          if (cardNumber && expiry && cvv) {
            navigate("/order");
            cartD.map((i) => {
              localStorage.removeItem(i.id);
            });
            // console.log(cartD);
            setCartD("");
          } else alert("Input Details");
        }}
      >
        Make Payment
      </div>
    </div>
  );
}
