import { useState } from "react";
import "./orderPage.css";

export default function OrderPage() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="orderPage">
      <h1>Payment Successful</h1>
      <h3>Order has been Delivered</h3>
    </div>
  );
}
