// import { useState } from "react";
import { useEffect, useRef, useState } from "react";
import "./orderPage.css";

// console.log(new Date().getMilliseconds());

export default function OrderPage() {
  // const [isVisible, setIsVisible] = useState(true);
  const date = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();

  const [successful, setSuccessful] = useState(true);
  // const [secc, setSecc] = useState(0);
  // const reff = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      setSuccessful(false);
    }, 5000);
  }, []);

  return (
    <div className="orderPage">
      {successful ? (
        <>
          <h1>Confirming Your Payment..... </h1>
        </>
      ) : (
        <>
          <h1>Payment Successful</h1>
          <h3>
            Order will be Delivered on {`${date + 3} / ${month} / ${year} .`}
          </h3>
        </>
      )}
    </div>
  );
}
