import { useEffect, useState } from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";
// import { signInWithEmailAndPassword, signInWithGoogle } from "firebase";
// import { useAuthState } from "react-firebase-hooks/auth";

import {
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
} from "../firebase/firebase";

export default function SignUp({ userAuth, userAuthHandler }) {
  const [userId, setUserId] = useState("");
  const [pass, setPass] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const [isSignUp1, setIsSignUp1] = useState(false);

  const fn = async () => {
    try {
      const res = await registerWithEmailAndPassword(userId, pass);
      localStorage.setItem("email", userId);
      localStorage.setItem("pass", pass);
      userAuthHandler({ email: res.user.email });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsSignUp1(true);
      fn();
    }, 3000);
  }, [isSignUp]);

  const navigate = useNavigate();

  // if (userAuth) {
  //   return navigate("/");
  // }
  return (
    <>
      <div
        style={{
          opacity: isSignUp ? "1" : "0",
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
        Your Account has been created
      </div>
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
        {/* <button
          className="log"
          onClick={async () => {
            const res = await logInWithEmailAndPassword(userId, pass);
            if (res.user) {
              userAuthHandler({ email: res.user.email });
              localStorage.setItem("email", userId);
              localStorage.setItem("pass", pass);
              navigate("/");
            }
          }}
        >
          Login
        </button> */}
        <button className="res" type="submit" onClick={() => setIsSignUp(true)}>
          Sign Up
        </button>
      </form>
      {/* {console.log(userId, pass)} */}
      <div
        style={{
          //   opacity: click ? "1" : "0",
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
