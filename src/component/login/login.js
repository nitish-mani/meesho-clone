import { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
// import { signInWithEmailAndPassword, signInWithGoogle } from "firebase";
// import { useAuthState } from "react-firebase-hooks/auth";

import {
  auth,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
} from "../firebase/firebase";

export default function Login({ userAuth, userAuthHandler }) {
  const [userId, setUserId] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  if (userAuth) {
    return navigate("/");
  }
  return (
    <>
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
        </button>
        <button
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
              alert(err.code);
            }
          }}
        >
          Sign Up
        </button>
      </form>
      {/* {console.log(userId, pass)} */}
    </>
  );
}
