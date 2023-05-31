import "./card.css";
import StarIcon from "@mui/icons-material/Star";

export default function Card({ item }) {
  return (
    <>
      <div onClick={() => {}} className="card">
        <div className="img-container">
          <img src={item.image} />
        </div>
        <h3>{item.title}</h3>
        <h2>Rs.{item.price}</h2>
        <div className="rating">
          {item.rating.rate}
          <StarIcon color="white" sx={{ width: "1.1rem" }} />
        </div>
      </div>
    </>
  );
}
