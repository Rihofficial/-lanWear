import React, { useContext, useState } from "react";
import { ShopContext } from "./context/ShopContext";
import login from "../assets/login.png";

export const Login = () => {
  const { token, setToken, navigate } = useContext(ShopContext);
  const [currSate, setCurrSate] = useState("Sign Up");

  return (
    <div className="absolute top-0 left-0 h-full w-full z-50 bg-white">
      {/* container */}
      <div className="flex h-full w-full">
        {/* image */}
        <div className="w-1/2 hidden sm:block">
          <img
            src={login}
            alt="loginImg"
            className="object-cover h-full w-full"
          />
        </div>
        {/* Form side */}
        <div className="flex w-full sm:w-1/2 items-center justify-center text-[90%]">
          <form className="flex flex-col items-center w-[90%] sm:max-w-md m-auto gap-y-5 ">
            <div className="w-full mb-4">
              <h3 className="bold-36">{currSate}</h3>
            </div>
            {currSate === "Sign Up" && (
              <div className="w-full">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-3 py-1.5 ring-1  ring-slate-900/10 rounded bg-primary mt-1"
                  required
                />
              </div>
            )}
            <div className="w-full">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                placeholder="Email"
                className="w-full px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-primary mt-1"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                placeholder="Password"
                className="w-full px-3 py-1.5 ring-1  ring-slate-900/10 rounded bg-primary mt-1"
                required
              />
            </div>
            <button className="btn-dark w-full mt-5 !py-[8px] !rounded">
              {" "}
              {currSate === "Sign Up" ? "Sign Up" : "Login"}
            </button>
            <div className="w-full flex flex-col gap-y-3">
              <div className="underline medium-15">Forgot your password?</div>
              {currSate === "Login" ? (
                <div className=" medium-15">
                  Dont have an account?
                  <span
                    onClick={() => setCurrSate("Sign Up")}
                    className=" gap-2 cursor-pointer underline"
                  >
                    {" "}
                    Create account
                  </span>
                </div>
              ) : (
                <div className="medium-15">
                  Already have an account?
                  <span
                    onClick={() => setCurrSate("Login")}
                    className="gap-2 cursor-pointer underline  "
                  >
                    {" "}
                    Login
                  </span>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
