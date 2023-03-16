import Button from "../component/Button";
import React from "react";
import { Link } from "react-router-dom";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

function Home() {
  return (
    <div className="height-screen flex flex-col items-center mt-20 mx-4 ">
      <h2 className="text-xl md:text-2xl text-center mb-6 text-violet-700">
        AsGoodAsDone helps you getting hyperfocused
      </h2>
      <h1 className="text-5xl md:text-6xl lg:text-7xl text-center mb-6">
        Get things done that matter!
      </h1>
      <ul className="bg-violet-300 p-3 rounded-md text-lg mb-3">
        <li>
          <IoCheckmarkDoneSharp className="inline text-violet-600" /> do what
          matters
        </li>
        <li>
          <IoCheckmarkDoneSharp className="inline text-violet-600" /> manage
          tasks
        </li>
        <li>
          <IoCheckmarkDoneSharp className="inline text-violet-600" /> see what's
          urgent
        </li>
        <li>
          <IoCheckmarkDoneSharp className="inline text-violet-600" /> activate
          hyperfocus mode ;)
        </li>
      </ul>
      <Link
        to="/register"
        className="dark:text-white mt-3 hover:shadow-white hover:underline"
      >
        <Button>Sign up now! →</Button>
      </Link>
      <img
        src={
          window.innerWidth < 600
            ? "/todoscreenshot_m.png"
            : window.innerWidth < 1200
            ? "/todoscreenshot_t.png"
            : "/todoscreenshot_d.png"
        }
        alt=""
        className="-z-10 -mt-6 md:-mt-20 w-11/12 max-w-6xl"
      />
    </div>
  );
}

export default Home;
