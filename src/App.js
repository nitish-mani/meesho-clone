// import logo from "./logo.svg";
import "./App.css";
import Nav_bar1 from "./component/nav_bar1/nav_bar.component";
import NavBar2 from "./component/nav-bar2/nav-bar2.component";

import Home from "./component/home/home";
import axios from "axios";
import DataApi from "./context/dataApi";
import { useEffect, useState } from "react";
import DetailCard from "./component/detail_card/detailCard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./component/cart/cart";
import OrderPage from "./component/orderPage/orderPage";
import Login from "./component/login/login";
// import "./Dashboard.css";
import Payment from "./component/payment/payment";
import Bank from "./component/bank/bank";
import Ccard from "./component/ccard/ccard";
import { logInWithEmailAndPassword } from "./component/firebase/firebase";
function App() {
  const [data, setData] = useState([]);
  // const cart = useContext(cartContext);
  const [cartD, setCartD] = useState([]);
  const [userAuth, setUserAuth] = useState({});
  // const navigate = useNavigate();

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Nav_bar1
            cartD={cartD}
            userAuth={userAuth}
            userAuthHandler={(d) => setUserAuth(d)}
          />
          <NavBar2 />
        </>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "detail/:id",
          element: (
            <>
              <DetailCard
                update={(data) => {
                  setCartD([...cartD, data]);
                  localStorage.setItem(data.id, true);
                }}
              />
            </>
          ),
        },
        {
          path: "cart",
          element: (
            <Cart data={cartD} remove={remove} userAuth={userAuth}></Cart>
          ),
        },
        {
          path: "order",
          element: <OrderPage />,
        },
        {
          path: "login",
          element: (
            <Login userAuthHandler={(authDetail) => setUserAuth(authDetail)} />
          ),
        },
        {
          path: "payment",
          element: <Payment />,
        },
        {
          path: "bank",
          element: <Bank />,
        },
        {
          path: "ccard",
          element: <Ccard cartD={cartD} setCartD={setCartD} />,
        },
      ],
    },
  ]);

  // console.log(cartData);
  function remove(id) {
    const newCartD = cartD.filter((item) => {
      return item.id !== id;
    });
    setCartD(newCartD);
    localStorage.removeItem(id);
  }

  useEffect(() => {
    axios
      .get(
        "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products?limit=10&page=2"
      )
      .then((res) => {
        setData((data) =>
          res.data.map((val) => {
            val.addedToCart = localStorage.getItem(val.id) ? true : false;

            return val;
          })
        );
      });
    const email = localStorage.getItem("email");
    const pass = localStorage.getItem("pass");
    if (email && pass) {
      logInWithEmailAndPassword(email, pass).then((res) =>
        setUserAuth({ email: res.user.email })
      );
    }
  }, []);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = Number(localStorage.key(i));

      arr.push(...data.filter((item) => item.id === key));
    }

    setCartD(() => [...arr]);
  }, [cartD.length, data.length]);

  return (
    <>
      <DataApi.Provider value={data}>
        <RouterProvider router={router}></RouterProvider>
      </DataApi.Provider>
    </>
  );
}

export default App;
