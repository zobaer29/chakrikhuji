"use client";
import { useState } from "react";
import Navbar from "@/components/navbar";
import "./AuthForm.css"; // নিচের CSS ফাইলটি ইম্পোর্ট করুন

const LoginPage = () => {
  const [isActive, setIsActive] = useState(false);
  const [message, setMessage] = useState("");
  const changeMode = (active) => { setIsActive(active); setMessage(""); };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setMessage("Sign-in is not connected yet. Your details have not been sent or saved.");
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setMessage("Registration is not connected yet. Your details have not been sent or saved.");
  };

  return (
    <>
    <Navbar />
    <main className="auth-page">
      <div
        id="auth-container"
        className={`auth-container relative w-[850px] h-[550px] bg-white m-5 rounded-[30px] shadow-[0_0_30px_rgba(0,0,0,0.2)] overflow-hidden ${
          isActive ? "active" : ""
        }`}
      >
        {/* Login Form */}
        <div inert={isActive} aria-hidden={isActive} className="form-box login absolute right-0 w-1/2 h-full bg-white flex items-center text-[#333] text-center p-10 max-[400px]:p-5 z-10 visible">
          <form onSubmit={handleLoginSubmit} className="w-full">
            <h1 className="text-[36px] font-bold -mt-2.5 mb-2.5">Login</h1>

            <div className="relative my-7">
              <input
                type="text"
                name="username"
                aria-label="Username"
                autoComplete="username"
                placeholder="Username"
                required
                className="w-full py-[13px] pr-[50px] pl-[20px] bg-[#eee] rounded-lg border-none outline-none text-[16px] text-[#333] font-medium placeholder-[#888] placeholder:font-normal"
              />
            </div>

            <div className="relative my-7">
              <input
                type="password"
                name="password"
                aria-label="Password"
                minLength={8}
                autoComplete="current-password"
                placeholder="Password"
                required
                className="w-full py-[13px] pr-[50px] pl-[20px] bg-[#eee] rounded-lg border-none outline-none text-[16px] text-[#333] font-medium placeholder-[#888] placeholder:font-normal"
              />
            </div>


            <button
              type="submit"
              className="w-full h-12 bg-[#ff4500] hover:bg-[#e03d00] transition-colors rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.1)] border-none cursor-pointer text-[16px] text-white font-semibold"
            >
              Login
            </button>


          </form>
        </div>

        {/* Register Form */}
        <div inert={!isActive} aria-hidden={!isActive} className="form-box register absolute right-0 w-1/2 h-full bg-white flex items-center text-[#333] text-center p-10 max-[400px]:p-5 z-10 invisible">
          <form onSubmit={handleRegisterSubmit} className="w-full">
            <h1 className="text-[36px] font-bold -mt-2.5 mb-2.5">Registration</h1>

            <div className="relative my-6">
              <input
                type="text"
                name="username"
                aria-label="Username"
                autoComplete="username"
                placeholder="Username"
                required
                className="w-full py-[13px] pr-[50px] pl-[20px] bg-[#eee] rounded-lg border-none outline-none text-[16px] text-[#333] font-medium placeholder-[#888] placeholder:font-normal"
              />
            </div>

            <div className="relative my-6">
              <input
                type="email"
                name="email"
                aria-label="Email"
                autoComplete="email"
                placeholder="Email"
                required
                className="w-full py-[13px] pr-[50px] pl-[20px] bg-[#eee] rounded-lg border-none outline-none text-[16px] text-[#333] font-medium placeholder-[#888] placeholder:font-normal"
              />
            </div>

            <div className="relative my-6">
              <input
                type="password"
                name="password"
                aria-label="Password"
                minLength={8}
                autoComplete="new-password"
                placeholder="Password"
                required
                className="w-full py-[13px] pr-[50px] pl-[20px] bg-[#eee] rounded-lg border-none outline-none text-[16px] text-[#333] font-medium placeholder-[#888] placeholder:font-normal"
              />
            </div>

            <button
              type="submit"
              className="w-full h-12 bg-[#ff4500] hover:bg-[#e03d00] transition-colors rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.1)] border-none cursor-pointer text-[16px] text-white font-semibold"
            >
              Register
            </button>


          </form>
        </div>

        {/* Toggle Overlay Box */}
        <div className="toggle-box absolute w-full h-full pointer-events-none">
          {/* Left Panel */}
          <div className="toggle-panel toggle-left absolute w-1/2 h-full text-white flex flex-col justify-center items-center z-30 pointer-events-auto">
            <h1 className="text-[36px] max-[400px]:text-[30px] font-bold">
              Hello, Welcome!
            </h1>
            <p className="text-[14.5px] mt-3 mb-5">Don&apos;t have an account?</p>
            <button
              type="button"
              onClick={() => changeMode(true)}
              className="w-40 h-[46px] bg-transparent hover:bg-white hover:text-[#ff4500] transition-colors border-2 border-white rounded-lg cursor-pointer text-[16px] font-semibold"
            >
              Register
            </button>
          </div>

          {/* Right Panel */}
          <div className="toggle-panel toggle-right absolute w-1/2 h-full text-white flex flex-col justify-center items-center z-30 pointer-events-auto">
            <h1 className="text-[36px] max-[400px]:text-[30px] font-bold">
              Welcome Back!
            </h1>
            <p className="text-[14.5px] mt-3 mb-5">Already have an account?</p>
            <button
              type="button"
              onClick={() => changeMode(false)}
              className="w-40 h-[46px] bg-transparent hover:bg-white hover:text-[#ff4500] transition-colors border-2 border-white rounded-lg cursor-pointer text-[16px] font-semibold"
            >
              Login
            </button>
          </div>
        </div>
      </div>
      <p className="auth-notice" role="status">{message || "Preview only — account sign-in and registration are not available yet."}</p>
    </main>
    </>
  );
};

export default LoginPage;