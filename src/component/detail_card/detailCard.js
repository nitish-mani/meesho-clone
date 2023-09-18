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

  const navigate = useNavigate();

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
          <div
            style={{
              width: "150px",
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
              navigate("/");
            }}
          >
            Add More Item
          </div>
        </div>
      </div>
    </>
  );
}
