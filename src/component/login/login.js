import { useEffect, useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
// import { signInWithEmailAndPassword, signInWithGoogle } from "firebase";
// import { useAuthState } from "react-firebase-hooks/auth";

import { logInWithEmailAndPassword } from "../firebase/firebase";

export default function Login({ userAuth, userAuthHandler }) {
  const [userId, setUserId] = useState("");
  const [pass, setPass] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLog, setIsLog] = useState(false);
  const [isLog1, setIsLog1] = useState(false);
  const navigate = useNavigate();

  const fnl = async () => {
    const res = await logInWithEmailAndPassword(userId, pass)
      .then((userCr) => {
        // console.log(userCr.user);
        setIsLoggedIn(true);
        setIsLog1(true);
        userAuthHandler({ email: userCr.user.email });
        localStorage.setItem("email", userId);
        localStorage.setItem("pass", pass);
      })
      .catch((err) => {
        // console.log(err);
        setIsLog(true);
      });
    // console.log(useAuthState);
  };

  useEffect(() => {
    setTimeout(() => {
      if (isLoggedIn) {
        navigate("/");
        setIsLog(false);
        setIsLog1(false);
      }
    }, 3000);
  }, [isLog1]);

  // if (userAuth) {
  //   return navigate("/");
  // }
  return (
    <>
      {isLoggedIn ? (
        <div
          style={{
            opacity: isLog1 ? "1" : "0",
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
          You are logged In successfullY
        </div>
      ) : (
        <div
          style={{
            opacity: isLog ? "1" : "0",
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
          Wrong user Id or password
        </div>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="form"
      >
        <label>User Id</label>
        <input
          placeholder="user Id"
          onChange={(e) => {
            setUserId(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          placeholder="password"
          type="password"
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
        <button
          className="res"
          onClick={() => {
            fnl();
            // setIsLog(true);
          }}
        >
          Login
        </button>
        {/* <button
          className="res"
          type="submit"
          onClick={async () => {
            try {
              const res = await registerWithEmailAndPassword(userId, pass);
              localStorage.setItem("email", userId);
              localStorage.setItem("pass", pass);
              userAuthHandler({ email: res.user.email });
              navigate("/");
            } catch (err) {
              console.log(err);
            }
          }}
        >
          Sign Up
        </button> */}
      </form>
      <div
        style={{
          // opacity: click ? "1" : "0",
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
          navigate("/signup");
        }}
      >
        SignUp
      </div>
      {/* {console.log(userId, pass)} */}
    </>
  );
}
