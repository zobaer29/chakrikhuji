"use client";
import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import "./AuthForm.css";

const LoginPage = ({ initialRole, initialRegister }) => {
  const [isActive, setIsActive] = useState(initialRegister);
  const [accountType, setAccountType] = useState(initialRole);
  const [message, setMessage] = useState("");
  const changeMode = (active) => { setIsActive(active); setMessage(""); };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setMessage("Sign-in is not connected yet. Your details have not been sent or saved.");
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setMessage(`${accountType === "company" ? "Company / HR" : "Job seeker"} registration is not connected yet. Your details have not been sent or saved.`);
  };

  return (
    <>
    <main id="main-content" className="auth-page auth-themed-page">
      <div
        id="auth-container"
        className={`auth-container relative overflow-hidden ${accountType === "company" ? "company-registration" : ""} ${
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
            <fieldset className="account-type-picker">
              <legend>Who are you registering as?</legend>
              <div className="account-type-options">
                <label><input type="radio" name="accountType" value="job-seeker" checked={accountType === "job-seeker"} onChange={() => { setAccountType("job-seeker"); setMessage(""); }} /><span>Job seeker<small>Free</small></span></label>
                <label><input type="radio" name="accountType" value="company" checked={accountType === "company"} onChange={() => { setAccountType("company"); setMessage(""); }} /><span>Company / HR<small>For hiring teams</small></span></label>
              </div>
            </fieldset>
            <p className="account-type-note">{accountType === "company" ? "Register your company to prepare for hiring. Company pricing will be announced before launch." : "A free account for CV insights, skill gaps, and application guidance."}</p>
            {accountType === "company" && <div className="relative my-6"><input type="text" name="companyName" aria-label="Company name" autoComplete="organization" placeholder="Company name" required className="auth-input" /></div>}

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
              {accountType === "company" ? "Register company" : "Register for free"}
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

function RegistrationRoute() {
  const params = useSearchParams();
  const role = params.get("role") === "company" ? "company" : "job-seeker";
  const register = params.get("mode") === "register";
  return <LoginPage key={`${role}-${register}`} initialRole={role} initialRegister={register} />;
}

export default function LoginRoute() {
  return <Suspense fallback={<main id="main-content" className="auth-page"><p role="status">Loading account options…</p></main>}><RegistrationRoute /></Suspense>;
}