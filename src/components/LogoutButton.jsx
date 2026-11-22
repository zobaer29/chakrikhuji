"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { authClient } from "@/lib/auth-client";

export default function LogoutButton({ className, children = "Logout", onLogoutStart }) {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  const logout = async () => {
    if (pending) return;
    setPending(true);
    onLogoutStart?.();
    try {
      const result = await authClient.signOut();
      if (result.error) throw new Error(result.error.message || "Please try again.");
      router.replace("/");
      router.refresh();
    } catch (error) {
      await Swal.fire({
        icon: "error",
        title: "Logout failed",
        text: error.message || "Unable to connect. Please try again.",
        background: "var(--surface)",
        color: "var(--ink)",
        confirmButtonColor: "var(--green)",
        heightAuto: false,
      });
    } finally {
      setPending(false);
    }
  };

  return (
    <button type="button" className={className} onClick={logout} disabled={pending} aria-busy={pending}>
      {pending ? "Logging out…" : children}
    </button>
  );
}
