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
      className="m-5 p-1 fixed h-8 w-8 bottom-0 right-0 rounded-full text-white drop-shadow-[2px_2px_3px_rgba(0,0,0,0.25)] bg-violet-500 hover:bg-violet-600 cursor-pointer active:bg-violet-900 transition-all dark:hover:bg-violet-500 dark:bg-violet-600 dark:active:bg-violet-400"
      aria-label="Logout"
      onClick={() => {
        handleUserLogout();
        setCurrentUser(null);
        navigate("/login");
      }}
    />
  );
}

export default Logout;
