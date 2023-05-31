import { Outlet } from "react-router-dom";
import "./nav-bar2.css";

export default function NavBar2() {
  return (
    <>
      <div className="nav-bar2">
        <div>View All</div>
        <div>Women Western</div>
        <div>Jewellery & Accessories</div>
        <div>Men</div>
        <div>Beauty & Health</div>
        <div>Bath & Body</div>
        <div>Bags & Footwear</div>
        <div>Home & Kitchen</div>
        <div>Kids</div>
        <div>Electronics</div>
      </div>
      <hr />
      <Outlet></Outlet>
    </>
  );
}
