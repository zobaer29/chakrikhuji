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
    setMessage(
      "Sign-in is not connected yet. Your details have not been sent or saved.",
    );
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setMessage(
      `${
        accountType === "company" ? "Company / HR" : "Job seeker"
      } registration is not connected yet. Your details have not been sent or saved.`,
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
            ? "h-[680px] max-[650px]:h-[920px]"
            : "h-[650px] max-[650px]:h-[760px]"
        }`}
      >
        {/* Login Form Box */}
        <div
          inert={isActive ? true : undefined}
          aria-hidden={isActive}
          className={`absolute w-full sm:w-1/2 flex items-center justify-center p-6 sm:p-10 z-10 bg-[var(--surface)] text-[var(--ink)] text-center transition-all duration-700 ease-in-out max-[650px]:left-0 max-[650px]:w-full max-[650px]:h-[70%] max-[650px]:overflow-y-auto ${
            isActive
              ? "min-[651px]:top-0 min-[651px]:right-1/2 min-[651px]:h-full min-[651px]:opacity-0 min-[651px]:pointer-events-none max-[650px]:top-[100%] max-[650px]:opacity-0 max-[650px]:pointer-events-none"
              : "min-[651px]:top-0 min-[651px]:right-0 min-[651px]:h-full min-[651px]:opacity-100 min-[651px]:pointer-events-auto max-[650px]:top-[30%] max-[650px]:opacity-100 max-[650px]:pointer-events-auto"
          }`}
        >
          <form
            onSubmit={handleLoginSubmit}
            className="w-full max-w-[380px] mx-auto py-2"
          >
            <h1 className="text-3xl sm:text-[36px] font-bold tracking-tight text-[var(--ink)] -mt-2.5 mb-2.5">
              Login
            </h1>

            <div className="relative my-5 sm:my-7">
              <label htmlFor="login-username" className="sr-only">
                Username
              </label>
              <input
                id="login-username"
                type="text"
                name="username"
                aria-label="Username"
                autoComplete="username"
                placeholder="Username"
                required
                className="w-full px-4.5 py-3.5 rounded-lg border border-[var(--line)] bg-[var(--paper)] text-[var(--ink)] text-base placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--orange)] focus:ring-offset-2 focus:ring-offset-[var(--surface)] transition-all"
              />
            </div>

            <div className="relative my-5 sm:my-7">
              <label htmlFor="login-password" className="sr-only">
                Password
              </label>
              <input
                id="login-password"
                type="password"
                name="password"
                aria-label="Password"
                minLength={8}
                autoComplete="current-password"
                placeholder="Password"
                required
                className="w-full px-4.5 py-3.5 rounded-lg border border-[var(--line)] bg-[var(--paper)] text-[var(--ink)] text-base placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--orange)] focus:ring-offset-2 focus:ring-offset-[var(--surface)] transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full min-h-[50px] rounded-lg bg-[var(--green)] text-[var(--paper)] text-sm font-semibold hover:brightness-105 active:scale-[0.99] transition-all cursor-pointer shadow-sm"
            >
              Login
            </button>
          </form>
        </div>

        {/* Register Form Box */}
        <div
          inert={!isActive ? true : undefined}
          aria-hidden={!isActive}
          className={`absolute w-full sm:w-1/2 flex items-center justify-center p-6 sm:p-10 z-10 bg-[var(--surface)] text-[var(--ink)] text-center transition-all duration-700 ease-in-out max-[650px]:left-0 max-[650px]:w-full max-[650px]:h-[70%] max-[650px]:overflow-y-auto ${
            isActive
              ? "min-[651px]:top-0 min-[651px]:right-1/2 min-[651px]:h-full min-[651px]:opacity-100 min-[651px]:pointer-events-auto max-[650px]:top-0 max-[650px]:opacity-100 max-[650px]:pointer-events-auto"
              : "min-[651px]:top-0 min-[651px]:right-0 min-[651px]:h-full min-[651px]:opacity-0 min-[651px]:pointer-events-none max-[650px]:top-[-70%] max-[650px]:opacity-0 max-[650px]:pointer-events-none"
          }`}
        >
          <form
            onSubmit={handleRegisterSubmit}
            className="w-full max-w-[380px] mx-auto py-2"
          >
            <h1 className="text-3xl sm:text-[36px] font-bold tracking-tight text-[var(--ink)] -mt-2.5 mb-2.5">
              Registration
            </h1>

            <fieldset className="border-0 p-0 mt-3 sm:mt-5 mb-2 text-left">
              <legend className="text-xs font-semibold text-[var(--ink)] mb-2.5">
                Who are you registering as?
              </legend>
              <div className="grid grid-cols-2 gap-2.5">
                <label
                  className={`flex items-center gap-2.5 p-2.5 sm:p-3 border rounded-lg cursor-pointer text-xs sm:text-[13px] transition-all ${
                    accountType === "job-seeker"
                      ? "border-[var(--orange)] bg-[var(--paper)] font-medium ring-1 ring-[var(--orange)]/30"
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
                    className="w-4 h-4 accent-[var(--orange)] shrink-0"
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
                      ? "border-[var(--orange)] bg-[var(--paper)] font-medium ring-1 ring-[var(--orange)]/30"
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
                    className="w-4 h-4 accent-[var(--orange)] shrink-0"
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

            <p className="text-[11px] text-[var(--muted)] text-left mb-3 leading-relaxed">
              {accountType === "company"
                ? "Register your company to prepare for hiring. Company pricing will be announced before launch."
                : "A free account for CV insights, skill gaps, and application guidance."}
            </p>

            {accountType === "company" && (
              <div className="relative my-3 sm:my-4">
                <label htmlFor="reg-company" className="sr-only">
                  Company name
                </label>
                <input
                  id="reg-company"
                  type="text"
                  name="companyName"
                  aria-label="Company name"
                  autoComplete="organization"
                  placeholder="Company name"
                  required
                  className="w-full px-4.5 py-3 rounded-lg border border-[var(--line)] bg-[var(--paper)] text-[var(--ink)] text-base placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--orange)] focus:ring-offset-2 focus:ring-offset-[var(--surface)] transition-all"
                />
              </div>
            )}

            <div className="relative my-3 sm:my-4">
              <label htmlFor="reg-username" className="sr-only">
                Username
              </label>
              <input
                id="reg-username"
                type="text"
                name="username"
                aria-label="Username"
                autoComplete="username"
                placeholder="Username"
                required
                className="w-full px-4.5 py-3 rounded-lg border border-[var(--line)] bg-[var(--paper)] text-[var(--ink)] text-base placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--orange)] focus:ring-offset-2 focus:ring-offset-[var(--surface)] transition-all"
              />
            </div>

            <div className="relative my-3 sm:my-4">
              <label htmlFor="reg-email" className="sr-only">
                Email
              </label>
              <input
                id="reg-email"
                type="email"
                name="email"
                aria-label="Email"
                autoComplete="email"
                placeholder="Email"
                required
                className="w-full px-4.5 py-3 rounded-lg border border-[var(--line)] bg-[var(--paper)] text-[var(--ink)] text-base placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--orange)] focus:ring-offset-2 focus:ring-offset-[var(--surface)] transition-all"
              />
            </div>

            <div className="relative my-3 sm:my-4">
              <label htmlFor="reg-password" className="sr-only">
                Password
              </label>
              <input
                id="reg-password"
                type="password"
                name="password"
                aria-label="Password"
                minLength={8}
                autoComplete="new-password"
                placeholder="Password"
                required
                className="w-full px-4.5 py-3 rounded-lg border border-[var(--line)] bg-[var(--paper)] text-[var(--ink)] text-base placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--orange)] focus:ring-offset-2 focus:ring-offset-[var(--surface)] transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full min-h-[50px] mt-2 rounded-lg bg-[var(--green)] text-[var(--paper)] text-sm font-semibold hover:brightness-105 active:scale-[0.99] transition-all cursor-pointer shadow-sm"
            >
              {accountType === "company"
                ? "Register company"
                : "Register for free"}
            </button>
          </form>
        </div>

        {/* Sliding Curtain Overlay Layer */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-20">
          {/* Animated Sliding Background Curtain */}
          <div
            className={`absolute bg-[var(--green)] transition-all duration-1000 ease-in-out ${
              /* Desktop: horizontal slide with 150px border radius; Mobile: vertical slide */
              isActive
                ? "min-[651px]:left-[50%] max-[650px]:top-[70%]"
                : "min-[651px]:left-[-250%] max-[650px]:top-[-270%]"
            } min-[651px]:top-0 min-[651px]:w-[300%] min-[651px]:h-full min-[651px]:rounded-[150px] max-[650px]:left-0 max-[650px]:w-full max-[650px]:h-[300%] max-[650px]:rounded-[20vw]`}
          />

          {/* Left Panel: shown when !isActive (Login mode) */}
          <div
            inert={isActive ? true : undefined}
            aria-hidden={isActive}
            className={`absolute flex flex-col justify-center items-center pointer-events-auto text-[var(--paper)] text-center transition-all duration-700 ease-in-out z-30 ${
              isActive
                ? "min-[651px]:-left-1/2 min-[651px]:opacity-0 max-[650px]:-top-[30%] max-[650px]:opacity-0"
                : "min-[651px]:left-0 min-[651px]:opacity-100 max-[650px]:top-0 max-[650px]:opacity-100"
            } min-[651px]:w-1/2 min-[651px]:h-full min-[651px]:p-8 max-[650px]:left-0 max-[650px]:w-full max-[650px]:h-[30%] max-[650px]:p-5`}
          >
            <h2 className="text-2xl sm:text-3xl min-[651px]:text-[36px] max-[400px]:text-[22px] font-bold leading-tight tracking-tight">
              Hello, Welcome!
            </h2>
            <p className="text-xs sm:text-sm min-[651px]:text-[14.5px] mt-1.5 sm:mt-2.5 mb-3 sm:mb-5 opacity-90">
              Don&apos;t have an account?
            </p>
            <button
              type="button"
              onClick={() => changeMode(true)}
              className="w-36 sm:w-40 min-h-[42px] sm:min-h-[46px] border border-current rounded-lg bg-transparent text-inherit text-xs sm:text-sm font-semibold hover:bg-[var(--paper)] hover:text-[var(--ink)] active:scale-95 transition-all cursor-pointer shadow-xs"
            >
              Register
            </button>
          </div>

          {/* Right Panel: shown when isActive (Register mode) */}
          <div
            inert={!isActive ? true : undefined}
            aria-hidden={!isActive}
            className={`absolute flex flex-col justify-center items-center pointer-events-auto text-[var(--paper)] text-center transition-all duration-700 ease-in-out z-30 ${
              isActive
                ? "min-[651px]:right-0 min-[651px]:opacity-100 max-[650px]:bottom-0 max-[650px]:opacity-100"
                : "min-[651px]:-right-1/2 min-[651px]:opacity-0 max-[650px]:-bottom-[30%] max-[650px]:opacity-0"
            } min-[651px]:w-1/2 min-[651px]:h-full min-[651px]:p-8 max-[650px]:left-0 max-[650px]:w-full max-[650px]:h-[30%] max-[650px]:p-5`}
          >
            <h2 className="text-2xl sm:text-3xl min-[651px]:text-[36px] max-[400px]:text-[22px] font-bold leading-tight tracking-tight">
              Welcome Back!
            </h2>
            <p className="text-xs sm:text-sm min-[651px]:text-[14.5px] mt-1.5 sm:mt-2.5 mb-3 sm:mb-5 opacity-90">
              Already have an account?
            </p>
            <button
              type="button"
              onClick={() => changeMode(false)}
              className="w-36 sm:w-40 min-h-[42px] sm:min-h-[46px] border border-current rounded-lg bg-transparent text-inherit text-xs sm:text-sm font-semibold hover:bg-[var(--paper)] hover:text-[var(--ink)] active:scale-95 transition-all cursor-pointer shadow-xs"
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
        {message ||
          "Preview only — account sign-in and registration are not available yet."}
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
