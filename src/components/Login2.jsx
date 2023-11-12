import React from "react";
import LoginImg from "../assets/login.jpg";
import { AiFillFacebook } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'

const Login2 = () => {
  return (
    <div className="relative w-full h-screen bg-zinc-900/90">
      <img
        className="absolute w-full h-full object-cover mix-blend-overlay"
        src={LoginImg}
        alt=""
      />

      <div className="relative flex justify-center items-center h-full">
        <form className="max-w-[360px] w-full mx-auto bg-white p-8"> 
          <h2 className="text-4xl font-bold text-center py-4">BRAND.</h2>
          <div className="flex justify-between py-8">
            <p className="border shadow-lg hover:shadow-xl px-6 py-2 flex items-center"><AiFillFacebook className="mr-1.5"/>Facebook</p>
            <p className="border shadow-lg hover:shadow-xl px-6 py-2 flex items-center"><FcGoogle className="mr-1.5"/>Google</p>
          </div>

          <div className="flex flex-col mb-2">
            <label>Username</label>
            <input className="border bg-gray-100 p-2" type="text" />
          </div>
          <div className="flex flex-col">
            <label>Password</label>
            <input className="border bg-gray-100 p-2" type="password" />
          </div>
          <button className="w-full py-3 mt-8 bg-blue-600 hover:bg-blue-500">Sign In</button>
          <p className="flex items-center mt-3">
            <input className="mr-1.5" type="checkbox" />
            Remember Me
          </p>
          <p className="text-center mt-8">Not a member? Sign up now</p>
        </form>
      </div>
    </div>
  );
};

export default Login2;
