import { useNavigate } from "react-router-dom";

export default function LogOut({ setLoginState }) {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          navigate("/");
          // setLoginState("");
        }}
      >
        logOut
      </button>
    </>
  );
}
