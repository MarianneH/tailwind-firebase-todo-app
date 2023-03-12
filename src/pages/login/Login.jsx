import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../component/Button";
import InputField from "../../component/InputField";
import { useAuthContext } from "../../context/AuthContext";
import { handleUserLogin } from "./handleUserLogin";

function Login() {
  const [loginFailed, setLoginFailed] = useState(false);
  const { setCurrentUser, currentUser } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) navigate("/todos");
  }, [currentUser, navigate]);

  return (
    <div className="flex flex-col items-center mt-4">
      <h1 className="text-3xl">Welcome Back!</h1>
      <div>It's time to log in.</div>
      <form
        className="flex flex-col items-center w-2/3"
        onSubmit={(e) =>
          handleUserLogin(e).then((result) => {
            setLoginFailed(result[0]);
            setCurrentUser(result[1]);
            console.log("reslt", result[0]);
            if (!result[0]) navigate("/todos");
          })
        }
      >
        <InputField type="email" name="email" id="email" placeholder="email" />
        <InputField
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
        {loginFailed && (
          <div className="text-red-500 mt-2">Something went wrong</div>
        )}
        <Button>Login</Button>
      </form>
    </div>
  );
}

export default Login;
