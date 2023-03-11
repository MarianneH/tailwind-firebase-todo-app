import React from "react";
import { handleUserRegistration } from "./handleUserRegistration";

function Register() {
  return (
    <div>
      <form
        action=""
        className="flex flex-col"
        onSubmit={(e) => handleUserRegistration(e)}
      >
        <input
          type="text"
          name="username"
          id="username"
          placeholder="user name"
        />
        <input type="email" name="email" id="email" placeholder="email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
        <input
          type="password"
          name="password_repeat"
          id="password_repeat"
          placeholder="repeat password"
        />
        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;
