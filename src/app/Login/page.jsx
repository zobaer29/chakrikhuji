"use client";
import { useState } from "react";
import Navbar from "@/components/navbar";
import "./AuthForm.css";

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
    <main id="main-content" className="auth-page auth-themed-page">
      <div
        id="auth-container"
        className={`auth-container relative overflow-hidden ${
          isActive ? "active" : ""
        }`}
      >
        {/* Login Form */}
        <div inert={isActive} aria-hidden={isActive} className="form-box login">
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
                className="auth-input"
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
                className="auth-input"
              />
            </div>


            <button
              type="submit"
              className="auth-submit"
            >
              Login
            </button>


          </form>
        </div>

        {/* Register Form */}
        <div inert={!isActive} aria-hidden={!isActive} className="form-box register">
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
                className="auth-input"
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
                className="auth-input"
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
                className="auth-input"
              />
            </div>

            <button
              type="submit"
              className="auth-submit"
            >
              Register
            </button>


          </form>
        </div>

        {/* Toggle Overlay Box */}
        <div className="toggle-box absolute w-full h-full pointer-events-none">
          {/* Left Panel */}
          <div inert={isActive} aria-hidden={isActive} className="toggle-panel toggle-left">
            <h1 className="text-[36px] max-[400px]:text-[30px] font-bold">
              Hello, Welcome!
            </h1>
            <p className="text-[14.5px] mt-3 mb-5">Don&apos;t have an account?</p>
            <button
              type="button"
              onClick={() => changeMode(true)}
              className="auth-mode-button"
            >
              Register
            </button>
          </div>

          {/* Right Panel */}
          <div inert={!isActive} aria-hidden={!isActive} className="toggle-panel toggle-right">
            <h1 className="text-[36px] max-[400px]:text-[30px] font-bold">
              Welcome Back!
            </h1>
            <p className="text-[14.5px] mt-3 mb-5">Already have an account?</p>
            <button
              type="button"
              onClick={() => changeMode(false)}
              className="auth-mode-button"
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