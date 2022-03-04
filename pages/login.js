import Image from "next/image";
import React from "react";
import loginBg from "../assets/images/loginBg.png";
import logo from "../assets/images/logo.png";
import { useRouter } from "next/router";
import { FaTimes } from "react-icons/fa";

export default function Login() {
  const router = useRouter();
  return (
    <div
      className="h-screen w-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${loginBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="w-1/3">
        <div
          className="border__primary border-2 rounded-full h-10 w-10 flex items-center justify-center my-4 mx-auto cursor-pointer"
          onClick={() => router.push("/")}
        >
          <FaTimes class="text__primary"></FaTimes>
        </div>
        <div className="bg-white rounded-3xl w-full flex flex-col items-center justify-center py-8">
          <Image
            src={logo}
            alt=""
            width="200"
            height="100"
            objectFit="contain"
          ></Image>
          <h1 className="font-bold" style={{ color: "#4D4F5C" }}>
            LOGIN
          </h1>

          <div className="w-3/4 mb-8 mt-8">
            <label className="block pl-4" style={{ color: "#4D4F5C" }}>
              Email
            </label>
            <input
              autocomplete="off"
              style={{ border: "1px solid #E8E8E8" }}
              className="rounded-full p-3 px-4 mt-2 w-full outline-none"
              type="email"
            ></input>
          </div>
          <div className="w-3/4">
            <label className="block pl-4" style={{ color: "#4D4F5C" }}>
              Password
            </label>
            <input
              autocomplete="off"
              style={{ border: "1px solid #E8E8E8" }}
              className="rounded-full p-3 px-4 mt-2 w-full outline-none"
              type="password"
            ></input>
          </div>

          <div className="flex justify-between w-3/4 mt-4">
            <p>Remember Me</p>
            <p className="text__primary underline">Forgot Password</p>
          </div>

          <button className="mt-8 mb-4 bg__primary w-3/4 rounded-full text-white p-3 px-4">
            LOGIN
          </button>
          <div className="flex gap-2">
            <p>Don't have an account?</p>
            <p
              className="text__primary underline cursor-pointer"
              onClick={() => router.push("/register")}
            >
              Create an account
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
