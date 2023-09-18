import { useContext, useEffect, useState } from "react";
import dataApi from "../../context/dataApi";
import { useNavigate, useParams } from "react-router-dom";
import "./detailCard.css";
import StarIcon from "@mui/icons-material/Star";
// import CartContext from "../../context/authContext";

export default function DetailCard({ update }) {
  const { id } = useParams();
  const data = useContext(dataApi);
  const [data1, setData1] = useState(null);
  const [added, setAdded] = useState(false);
  // const cartData = useContext(CartContext);
  const Navigate = useNavigate();
  useEffect(() => {
    setData1(data.find((item) => item.id === Number(id)));
  }, [id, data]);
  useEffect(() => {
    setTimeout(() => {
      setAdded(false);
    }, 3000);
  }, [localStorage.getItem(id)]);

  return (
    <>
      <div
        style={{
          opacity: added ? "1" : "0",
          // width: "500px",
          paddingTop: "13px",
          height: "50px",
          color: "pink",
          fontWeight: "bold",
          // opacity: "1",
          backgroundColor: "black",
          textAlign: "center",
          transition: "3s",
          fontSize: "20px",
        }}
      >
        Item Added to Cart
      </div>
      <div className="detailCard">
        <div className="detailImg">
          <img src={data1?.image} alt={data1?.title} />
          <button
            className="button"
            onClick={() => {
              if (localStorage.getItem(id)) {
                return Navigate("/cart");
              }
              update(data1);
              setAdded(true);
            }}
          >
            {localStorage.getItem(id) ? "Go To Cart" : "Add To Cart"}
          </button>
        </div>
        <div className="detailData">
          <p>{data1?.description}</p>
          <h3>Price : {data1?.price} Rs</h3>
          <div className="rating">
            {data1?.rating.rate}
            <StarIcon color="white" sx={{ width: "1.1rem" }} />
          </div>
        </div>
      </div>
    </>
  );
}
