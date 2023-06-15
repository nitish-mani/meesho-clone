import { useNavigate } from "react-router-dom";
import Card from "../component/card/Card";
import "./search.css";
export default function Search({ data, sd }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="home">
        {data.map((item) => {
          if (item.title.toLowerCase().includes(sd) || sd !== "") {
            return (
              <div
                key={item.id}
                onClick={() => {
                  navigate(`/detail/${item.id}`);
                  // console.log(item.id);
                }}
              >
                <Card item={item}></Card>
              </div>
            );
          } else {
            //   return <h1>Product Not Found...</h1>;
            navigate("/");
          }
        })}
      </div>
    </>
  );
}
