import React, { useState } from "react";
import Button from "../../component/Button";
import InputField from "../../component/InputField";
import { handleUserRegistration } from "./handleUserRegistration";

function Register() {
  const [registrationFailed, setRegistrationFailed] = useState(false);

  return (
    <div className="flex flex-col items-center mt-4">
      <h1 className="text-3xl">Welcome! Register here</h1>
      <div>Go ahead and register now!</div>
      <form
        action=""
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
    </div>
  );
}

export default Register;
