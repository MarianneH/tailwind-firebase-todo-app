import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link
      to="/"
      className="absolute top-4 left-4 aspect-square w-10 text-violet-900"
    >
      <img src="logo.svg" alt="AsGoodAsDone Logo" />
    </Link>
  );
}

export default Logo;
