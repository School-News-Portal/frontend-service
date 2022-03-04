import Image from "next/image";
import React from "react";
import loginBg from "../assets/images/loginBg.png";
import logo from "../assets/images/logo.png";
import { useRouter } from "next/router";

export default function Register() {
  const router = useRouter();
  return (
    <div
      className="min-h-screen w-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${loginBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "fixed",
      }}
    >
      <div className="w-1/2">
        <div className="bg-white rounded-3xl w-full flex flex-col items-center justify-center py-8">
          <Image
            src={logo}
            alt=""
            width="200"
            height="100"
            objectFit="contain"
          ></Image>
          <h1 className="font-bold" style={{ color: "#4D4F5C" }}>
            CREATE ACCOUNT
          </h1>

          <div className="w-3/4 mt-8">
            <label className="block pl-4" style={{ color: "#4D4F5C" }}>
              Name
            </label>
            <input
              autocomplete="off"
              style={{ border: "1px solid #E8E8E8" }}
              className="rounded-full p-3 px-4 mt-2 w-full outline-none"
              type="text"
            ></input>
          </div>
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

          <div className="flex items-center gap-2 w-3/4 mt-4">
            <input type="checkbox"></input> I accept the
            <p className="text__primary underline font-bold ml-4">
              Terms & Conditions
            </p>
          </div>

          <button className="mt-8 mb-4 bg__primary w-3/4 rounded-full text-white p-3 px-4">
            REGISTER
          </button>
          <div className="flex gap-2">
            <p>Already have an account?</p>
            <p
              className="text__primary underline cursor-pointer"
              onClick={() => router.push("/login")}
            >
              Login
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
