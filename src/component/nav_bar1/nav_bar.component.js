import "./nev-bar.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import StayCurrentPortraitOutlinedIcon from "@mui/icons-material/StayCurrentPortraitOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Link, Outlet, useNavigate } from "react-router-dom";
import cartContext from "../../context/authContext";
import { useContext, useState } from "react";
export default function Nav_bar1({ cartD, userAuth, userAuthHandler }) {
  const navigate = useNavigate();
  const cartData = useContext(cartContext);
  const [crtData, setcrtData] = useState(null);
  return (
    <>
      <div className="nav-bar">
        <div className="par-1"><div onClick={() => navigate("/")} className="nav-logo">
          <img
            className="nav-bar-child1"
            src="https://tse1.mm.bing.net/th?id=OIP.VzYfA6NwN8IRR6bQj8t_wQHaCX&pid=Api&P=0&h=180"
            alt="logo"
          />
        </div>
        <div className="input-container ">
          <div className="placeholder">
            <SearchIcon sx={{ color: "#aaa" }} />
          </div>
          <input type="text" placeholder="Search" />
        </div>
        </div>
       <div className="par-2">
       <div className="nav-bar-link">
          <div className="nav-bar-child2 brd hover">
            <StayCurrentPortraitOutlinedIcon />
            Download App
          </div>
          <div className="nav-bar-child2 brd ">Become Supplier</div>
          <div
            className="nav-bar-child2 hover cart12"
            onClick={() => {
              if (!userAuth.email) {
                navigate("/login");
              }
            }}
          >
            <div>
              <PersonOutlineOutlinedIcon />
            </div>
            {userAuth.email ? userAuth.email.split("@")[0] : "Profile"}
            {userAuth.email ? (
              <button
                onClick={() => {
                  userAuthHandler({});
                }}
              >
                LogOut
              </button>
            ) : (
              ""
            )}
          </div>
          <div
            onClick={() => {
              navigate("/cart");
            }}
            className="nav-bar-child2 cart12"
          >
            <div>
              <ShoppingCartIcon />
            </div>

            {cartD ? `Cart (${cartD.length})` : "Cart"}
          </div>
        </div>
       </div>
      </div>
      <hr />
      {/* <Outlet></Outlet> */}
    </>
  );
}
