import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { handleUserLogout } from "./handleUserLogout";

function Logout() {
  const { setCurrentUser } = useAuthContext();
  const navigate = useNavigate();
  return (
    <AiOutlineLogout
      className="m-5 p-1 absolute h-8 w-8 bottom-0 right-0 rounded-full text-white  bg-violet-500"
      onClick={() => {
        handleUserLogout();
        setCurrentUser(null);
        navigate("/login");
      }}
    />
  );
}

export default Logout;