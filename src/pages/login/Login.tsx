import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
    <div className="flex flex-col items-center mt-4 h-screen justify-center">
      <h1>Welcome Back!</h1>
      <div className="dark:text-white mb-4">It's time to log in.</div>
      <form
        className="flex flex-col items-center w-3/4 max-w-lg"
        onSubmit={(e) =>
          handleUserLogin(e).then((result) => {
            setLoginFailed(result.failed);
            setCurrentUser(result.user);
            if (!result.failed) navigate("/todos");
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
      <Link
        to="/register"
        className="dark:text-white mt-3 hover:shadow-white hover:underline"
      >
        Are you new here?
      </Link>
    </div>
  );
}

export default Login;
