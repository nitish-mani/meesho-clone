import { useEffect, useState } from "react";
import "./cart.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useNavigate } from "react-router-dom";
export default function Cart({ data, remove, userAuth }) {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const [isLoged, setIsLoged] = useState(false);
  const [click, setClick] = useState(false);
  useEffect(() => {
    if (data.length) {
      const sum = data.reduce((prev, curr) => {
        return prev + curr.price;
      }, 0);
      // console.log(sum);
      setTotal(sum);
    }
  }, [data.length]);
  // console.log(data);
  useEffect(() => {
    const f = setTimeout(() => {
      setIsLoged(false);
      // setClick(false);
    }, 6000);
    // clearTimeout(f);
  }, [click]);

  return (
    <>
      <div
        style={{
          opacity: isLoged ? "1" : "0",
          // width: "500px",
          height: "30px",
          color: "pink",
          fontWeight: "bold",
          // opacity: "1",
          backgroundColor: "black",
          textAlign: "center",
          transition: "3s",
        }}
      >
        Please Login to Your Account
      </div>

      <>
        {" "}
        {data.length ? (
          <div className="parentCart">
            <div>
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
                Total Product Price :{" "}
                {data.length === 0 ? 0 : total?.toFixed(2)}
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
                    setClick(true);
                    setIsLoged(true);
                    // navigate("/login");
                    return;
                  }

                  navigate("/payment");
                }}
              >
                Buy Now
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              opacity: !data.length ? "1" : "0",
              // width: "500px",
              height: "30px",
              color: "pink",
              fontWeight: "bold",
              // opacity: "1",
              backgroundColor: "black",
              textAlign: "center",
              transition: "3s",
            }}
          >
            Cart Is Empty
          </div>
        )}
      </>
      <div
        style={{
          opacity: click ? "1" : "0",
          width: "100px",
          height: "30px",
          borderRadius: "5px",
          backgroundColor: "black",
          color: "white",
          padding: "2px",
          fontWeight: "bold",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
          marginTop: "100px",
          cursor: "pointer",
          transition: "3s",
        }}
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </div>
    </>
  );
}
