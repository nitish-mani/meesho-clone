import { useEffect, useState } from "react";
import "./cart.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useNavigate } from "react-router-dom";
export default function Cart({ data, remove, setCartD, userAuth }) {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    if (data.length) {
      const sum = data.reduce((prev, curr) => {
        return prev + curr.price;
      }, 0);
      // console.log(sum);
      setTotal(sum);
    }
  }, [data.length]);
  console.log(data);

  const navigate = useNavigate();
  return (
    <div className="parentCart">
      <div>
        {" "}
        {data.map((d) => {
          return (
            <div key={d.id} className="cart">
              <div className="img">
                <img src={d.image} alt={d.title} />
              </div>
              <h4>{d.title}</h4>
              <h2>Price : {d.price}</h2>
              <button
                onClick={() => {
                  remove(d.id);
                }}
              >
                <DeleteForeverIcon sx={{ color: "#fff" }} />
              </button>
            </div>
          );
        })}
      </div>
      <div className="cart2">
        <div>
          Total Product Price : {data.length === 0 ? 0 : total?.toFixed(2)}
        </div>
        <div
          className="buy-now hover1"
          onClick={() => {
            if (!data.length) {
              // alert("kuchh to kharidiye Maharaj.");
              return;
            }
            if (!userAuth.email) {
              // alert("Areyy! Login karna bhool gye kya?");
              navigate("/login");
              return;
            }

            navigate("/payment");
          }}
        >
          Buy Now
        </div>
      </div>
    </div>
  );
}
