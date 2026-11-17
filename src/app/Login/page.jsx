"use client";
import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";

const LoginPage = ({ initialRole, initialRegister }) => {
  const [isActive, setIsActive] = useState(initialRegister);
  const [accountType, setAccountType] = useState(initialRole);
  const [message, setMessage] = useState("");

  const changeMode = (active) => {
    setIsActive(active);
    setMessage("");
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setMessage("Sign-in is not connected yet. Your details have not been sent or saved.");
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setMessage(
      `${
        accountType === "company" ? "Company / HR" : "Job seeker"
      } registration is not connected yet. Your details have not been sent or saved.`
    );
  };

  return (
    <main
      id="main-content"
      className="flex flex-col items-center justify-center min-h-[calc(100svh-89px)] px-4 py-8 sm:py-10 bg-[var(--paper)] text-[var(--ink)]"
    >
      <div
        id="auth-container"
        className={`relative overflow-hidden w-full max-w-[1120px] border border-[var(--line)] rounded-2xl sm:rounded-[20px] bg-[var(--surface)] shadow-xl transition-all duration-700 ${
          accountType === "company"
            ? "h-[680px] max-[650px]:h-[960px]"
            : "h-[650px] max-[650px]:h-[860px]"
        }`}
      >
        {/* Login Form Box */}
        <div
          inert={isActive ? true : undefined}
          aria-hidden={isActive}
          className={`absolute top-0 w-full sm:w-1/2 h-full flex items-center justify-center p-6 sm:p-10 z-10 bg-[var(--surface)] text-[var(--ink)] text-center transition-all duration-700 ease-in-out ${
            isActive
              ? "right-1/2 opacity-0 pointer-events-none max-[650px]:right-0 max-[650px]:bottom-[30%] max-[650px]:opacity-0 max-[650px]:pointer-events-none"
              : "right-0 opacity-100 pointer-events-auto max-[650px]:bottom-0 max-[650px]:right-0 max-[650px]:h-[70%]"
          }`}
        >
          <form onSubmit={handleLoginSubmit} className="w-full max-w-[380px] mx-auto">
            <h1 className="text-3xl sm:text-[36px] font-bold tracking-tight text-[var(--ink)] -mt-2.5 mb-2.5">
              Login
            </h1>

            <div className="relative my-7">
              <input
                type="text"
                name="username"
                aria-label="Username"
                autoComplete="username"
                placeholder="Username"
                required
                className="w-full px-4.5 py-3.5 rounded-lg border border-[var(--line)] bg-[var(--paper)] text-[var(--ink)] text-base placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--green)] focus:ring-offset-2 transition-all"
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
                className="w-full px-4.5 py-3.5 rounded-lg border border-[var(--line)] bg-[var(--paper)] text-[var(--ink)] text-base placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--green)] focus:ring-offset-2 transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full min-h-[50px] rounded-lg bg-[var(--green)] text-[var(--paper)] text-sm font-semibold hover:brightness-95 active:scale-[0.99] transition-all cursor-pointer shadow-sm"
            >
              Login
            </button>
          </form>
        </div>

        {/* Register Form Box */}
        <div
          inert={!isActive ? true : undefined}
          aria-hidden={!isActive}
          className={`absolute top-0 w-full sm:w-1/2 h-full flex items-center justify-center p-6 sm:p-10 z-10 bg-[var(--surface)] text-[var(--ink)] text-center transition-all duration-700 ease-in-out ${
            isActive
              ? "right-1/2 opacity-100 pointer-events-auto max-[650px]:right-0 max-[650px]:bottom-[30%] max-[650px]:opacity-100 max-[650px]:h-[70%]"
              : "right-0 opacity-0 pointer-events-none max-[650px]:bottom-0 max-[650px]:right-0 max-[650px]:opacity-0 max-[650px]:pointer-events-none"
          }`}
        >
          <form onSubmit={handleRegisterSubmit} className="w-full max-w-[380px] mx-auto">
            <h1 className="text-3xl sm:text-[36px] font-bold tracking-tight text-[var(--ink)] -mt-2.5 mb-2.5">
              Registration
            </h1>

            <fieldset className="border-0 p-0 mt-5 mb-2 text-left">
              <legend className="text-xs font-semibold text-[var(--ink)] mb-2.5">
                Who are you registering as?
              </legend>
              <div className="grid grid-cols-2 gap-2.5">
                <label
                  className={`flex items-center gap-2.5 p-2.5 sm:p-3 border rounded-lg cursor-pointer text-xs sm:text-[13px] transition-all ${
                    accountType === "job-seeker"
                      ? "border-[var(--green)] bg-[var(--paper)] font-medium"
                      : "border-[var(--line)] bg-[var(--surface)] text-[var(--ink)]"
                  }`}
                >
                  <input
                    type="radio"
                    name="accountType"
                    value="job-seeker"
                    checked={accountType === "job-seeker"}
                    onChange={() => {
                      setAccountType("job-seeker");
                      setMessage("");
                    }}
                    className="w-4 h-4 accent-[var(--green)] shrink-0"
                  />
                  <span>
                    Job seeker
                    <small className="block text-[10px] text-[var(--muted)] font-normal mt-0.5">
                      Free
                    </small>
                  </span>
                </label>

                <label
                  className={`flex items-center gap-2.5 p-2.5 sm:p-3 border rounded-lg cursor-pointer text-xs sm:text-[13px] transition-all ${
                    accountType === "company"
                      ? "border-[var(--green)] bg-[var(--paper)] font-medium"
                      : "border-[var(--line)] bg-[var(--surface)] text-[var(--ink)]"
                  }`}
                >
                  <input
                    type="radio"
                    name="accountType"
                    value="company"
                    checked={accountType === "company"}
                    onChange={() => {
                      setAccountType("company");
                      setMessage("");
                    }}
                    className="w-4 h-4 accent-[var(--green)] shrink-0"
                  />
                  <span>
                    Company / HR
                    <small className="block text-[10px] text-[var(--muted)] font-normal mt-0.5">
                      For hiring teams
                    </small>
                  </span>
                </label>
              </div>
            </fieldset>

            <p className="text-[11px] text-[var(--muted)] text-left mb-4 leading-relaxed">
              {accountType === "company"
                ? "Register your company to prepare for hiring. Company pricing will be announced before launch."
                : "A free account for CV insights, skill gaps, and application guidance."}
            </p>

            {accountType === "company" && (
              <div className="relative my-3.5 sm:my-4">
                <input
                  type="text"
                  name="companyName"
                  aria-label="Company name"
                  autoComplete="organization"
                  placeholder="Company name"
                  required
                  className="w-full px-4.5 py-3 rounded-lg border border-[var(--line)] bg-[var(--paper)] text-[var(--ink)] text-base placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--green)] focus:ring-offset-2 transition-all"
                />
              </div>
            )}

            <div className="relative my-3.5 sm:my-4">
              <input
                type="text"
                name="username"
                aria-label="Username"
                autoComplete="username"
                placeholder="Username"
                required
                className="w-full px-4.5 py-3 rounded-lg border border-[var(--line)] bg-[var(--paper)] text-[var(--ink)] text-base placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--green)] focus:ring-offset-2 transition-all"
              />
            </div>

            <div className="relative my-3.5 sm:my-4">
              <input
                type="email"
                name="email"
                aria-label="Email"
                autoComplete="email"
                placeholder="Email"
                required
                className="w-full px-4.5 py-3 rounded-lg border border-[var(--line)] bg-[var(--paper)] text-[var(--ink)] text-base placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--green)] focus:ring-offset-2 transition-all"
              />
            </div>

            <div className="relative my-3.5 sm:my-4">
              <input
                type="password"
                name="password"
                aria-label="Password"
                minLength={8}
                autoComplete="new-password"
                placeholder="Password"
                required
                className="w-full px-4.5 py-3 rounded-lg border border-[var(--line)] bg-[var(--paper)] text-[var(--ink)] text-base placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--green)] focus:ring-offset-2 transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full min-h-[50px] mt-2 rounded-lg bg-[var(--green)] text-[var(--paper)] text-sm font-semibold hover:brightness-95 active:scale-[0.99] transition-all cursor-pointer shadow-sm"
            >
              {accountType === "company" ? "Register company" : "Register for free"}
            </button>
          </form>
        </div>

        {/* Sliding Curtain Overlay Layer */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-20">
          {/* Animated Sliding Background Curtain */}
          <div
            className={`absolute bg-[var(--green)] transition-all duration-1000 ease-in-out ${
              /* Desktop: horizontal slide with 150px border radius */
              isActive
                ? "min-[651px]:left-[50%] max-[650px]:top-[70%]"
                : "min-[651px]:left-[-250%] max-[650px]:top-[-270%]"
            } min-[651px]:top-0 min-[651px]:w-[300%] min-[651px]:h-full min-[651px]:rounded-[150px] max-[650px]:left-0 max-[650px]:w-full max-[650px]:h-[300%] max-[650px]:rounded-[20vw]`}
          />

          {/* Left Panel */}
          <div
            inert={isActive ? true : undefined}
            aria-hidden={isActive}
            className={`absolute flex flex-col justify-center items-center pointer-events-auto text-[var(--paper)] text-center transition-all duration-700 ease-in-out z-30 ${
              /* Desktop position */
              isActive
                ? "min-[651px]:-left-1/2 min-[651px]:opacity-0 max-[650px]:-top-[30%] max-[650px]:opacity-0"
                : "min-[651px]:left-0 min-[651px]:opacity-100 max-[650px]:top-0 max-[650px]:opacity-100"
            } min-[651px]:w-1/2 min-[651px]:h-full min-[651px]:p-8 max-[650px]:w-full max-[650px]:h-[30%] max-[650px]:p-5`}
          >
            <h1 className="text-3xl sm:text-[36px] max-[400px]:text-[28px] font-bold leading-tight tracking-tight">
              Hello, Welcome!
            </h1>
            <p className="text-sm sm:text-[14.5px] mt-2.5 mb-4 sm:mb-5 opacity-90">
              Don&apos;t have an account?
            </p>
            <button
              type="button"
              onClick={() => changeMode(true)}
              className="w-36 sm:w-40 min-h-[44px] sm:min-h-[46px] border border-current rounded-lg bg-transparent text-inherit text-sm font-semibold hover:bg-[var(--paper)] hover:text-[var(--green)] transition-all cursor-pointer"
            >
              Register
            </button>
          </div>

          {/* Right Panel */}
          <div
            inert={!isActive ? true : undefined}
            aria-hidden={!isActive}
            className={`absolute flex flex-col justify-center items-center pointer-events-auto text-[var(--paper)] text-center transition-all duration-700 ease-in-out z-30 ${
              /* Desktop position */
              isActive
                ? "min-[651px]:right-0 min-[651px]:opacity-100 max-[650px]:bottom-0 max-[650px]:opacity-100"
                : "min-[651px]:-right-1/2 min-[651px]:opacity-0 max-[650px]:-bottom-[30%] max-[650px]:opacity-0"
            } min-[651px]:w-1/2 min-[651px]:h-full min-[651px]:p-8 max-[650px]:w-full max-[650px]:h-[30%] max-[650px]:p-5`}
          >
            <h1 className="text-3xl sm:text-[36px] max-[400px]:text-[28px] font-bold leading-tight tracking-tight">
              Welcome Back!
            </h1>
            <p className="text-sm sm:text-[14.5px] mt-2.5 mb-4 sm:mb-5 opacity-90">
              Already have an account?
            </p>
            <button
              type="button"
              onClick={() => changeMode(false)}
              className="w-36 sm:w-40 min-h-[44px] sm:min-h-[46px] border border-current rounded-lg bg-transparent text-inherit text-sm font-semibold hover:bg-[var(--paper)] hover:text-[var(--green)] transition-all cursor-pointer"
            >
              Login
            </button>
          </div>
        </div>
      </div>

      <p
        className="text-xs text-[var(--muted)] text-center max-w-[650px] mt-5 px-4 leading-relaxed"
        role="status"
      >
        {message || "Preview only — account sign-in and registration are not available yet."}
      </p>
    </main>
  );
};

function RegistrationRoute() {
  const params = useSearchParams();
  const role = params.get("role") === "company" ? "company" : "job-seeker";
  const register = params.get("mode") === "register";
  return (
    <LoginPage
      key={`${role}-${register}`}
      initialRole={role}
      initialRegister={register}
    />
  );
}

export default function LoginRoute() {
  return (
    <Suspense
      fallback={
        <main
          id="main-content"
          className="flex items-center justify-center min-h-[calc(100svh-89px)]"
        >
          <p className="text-sm text-[var(--muted)]" role="status">
            Loading account options…
          </p>
        </main>
      }
    >
      <RegistrationRoute />
    </Suspense>
  );
}
