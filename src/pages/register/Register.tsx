import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../component/Button";
import InputField from "../../component/InputField";
import { useAuthContext } from "../../context/AuthContext";
import Login from "../login";
import { handleUserRegistration } from "./handleUserRegistration";

function Register() {
  const [registrationFailed, setRegistrationFailed] = useState(false);
  const { currentUser } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) navigate("/todos");
  }, [currentUser, navigate]);

  return (
    <div className="flex flex-col items-center mt-4 h-screen justify-center">
      <h1>Welcome! Register here</h1>
      <div className="text-white">Go ahead and register now!</div>
      <form
        className="flex flex-col items-center w-2/3"
        onSubmit={(e) =>
          handleUserRegistration(e).then((result) =>
            setRegistrationFailed(result)
          )
        }
      >
        <InputField
          type="text"
          name="username"
          id="username"
          placeholder="user name"
        />
        <InputField type="email" name="email" id="email" placeholder="email" />
        <InputField
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
        <InputField
          type="password"
          name="password_repeat"
          id="password_repeat"
          placeholder="repeat password"
        />
        {registrationFailed && (
          <div className="text-red-500 mt-2">Something went wrong</div>
        )}
        <Button>Register</Button>
      </form>
      <Link
        to="/login"
        className="dark:text-white mt-3 hover:shadow-white hover:underline"
      >
        Are you a returning productivity nerd?
      </Link>
    </div>
  );
}

export default Register;
