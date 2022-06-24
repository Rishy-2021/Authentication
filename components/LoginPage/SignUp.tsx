import { useEffect, useState } from "react";

import { providers, getSession, signIn } from "next-auth/client";

import Router from "next/router";
import Image from "next/image";
import NextAuth from "next-auth";

import image1 from "../../public/images/facebook.png";
import image2 from "../../public/images/google-logo.png";
import image3 from "../../public/images/twitter.png";
import BtnLogin from "./BtnLogin";

const SignUpForm = ({ providers, session }) => {
  useEffect(() => {
    if (session) return Router.push("/");
  }, [session]);

  if (session) return null;

  const [dat, setdat] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setdat({ ...dat, [name]: value });
  };
  const PostData = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const { fullname, email, password } = dat;
    const res = await fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        password,
      }),
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("invalid");
    } else {
      window.alert("Valid");
      console.log("valid");
    }
  };

  return (
    <>
      <div className="flex justify-center items-center bg-white">
        <form className="bg-white">
          <h1 className="text-gray-800 font-bold text-3xl py-3">Sign Up!</h1>
          <div className="flex items-center border-2 py-2.5 px-3 rounded-lg mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="currentColor"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <input
              className="pl-2
                outline-none
                border-none
                w-full
                "
              type="text"
              name="fullname"
              id=""
              placeholder="Name"
              value={dat.fullname}
              onChange={handleInput}
            />
          </div>
          <div className="flex items-center border-2 py-2.5 px-3 rounded-lg mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              className="pl-2
                outline-none
                border-none
                w-full
                "
              type="text"
              id=""
              placeholder="Email Address"
              name="email"
              value={dat.email}
              onChange={handleInput}
            />
          </div>
          <div className="flex items-center border-2 py-2.5 px-3 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none
                w-full "
              type="text"
              id=""
              placeholder="Password"
              name="password"
              value={dat.password}
              onChange={handleInput}
            />
          </div>
          <button
            type="submit"
            className="block w-full mt-4 py-2 rounded-lg text-white font-semibold mb-2 bg-gradient-to-r from-purple-500 to-pink-500"
          >
            Sign Up
          </button>
          <div className="mt-3 flex">
            <label
              htmlFor="remember_me"
              className="inline-flex items-center w-full cursor-pointer"
            >
              <input
                id="remember_me"
                type="checkbox"
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                name="remember"
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>

            {/* <div className="w-full text-right">
              <a
                className="underline text-sm text-gray-600 hover:text-gray-900"
                href="#"
              >
                Forgot password?
              </a>
            </div> */}
          </div>
          <div className="flex mt-7 justify-center gap-4">
            <a
              onClick={() => {
                signIn(providers.google);
              }}
              className="flex item-center justify-center social shadow-md hover:-translate-y-1 ease duration-300 h-13 w-13 hover: hover:text-white rounded-full"
            >
              <Image width={50} height={50} src={image2} />
            </a>
            <a
              onClick={() => signIn(providers.facebook.id)}
              className="flex item-center justify-center social shadow-md hover:-translate-y-1 ease duration-300 h-13 w-13 hover:bg-red-500 hover:text-white rounded-full"
            >
              <Image width={50} height={50} src={image1} />
            </a>
            <a
              onClick={() => signIn(providers.twitter.id)}
              className="flex item-center justify-center social shadow-md hover:-translate-y-1 ease duration-300 h-13 w-13 hover:bg-red-500 hover:text-white rounded-full"
            >
              <Image width={50} height={50} src={image3} />
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

SignUpForm.getInitialProps = async (context) => {
  return {
    providers: await providers(context),
    session: await getSession(context),
  };
};

export default SignUpForm;
