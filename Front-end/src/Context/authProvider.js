"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const offPages = { ["/SignUpPage"]: true, ["/LogInPage"]: true, ["/ChangePassword"]: true };

export const AuthProvider = ({ children }) => {
  const pathname = usePathname();
  const token =
    typeof window === "undefined" ? null : localStorage.getItem("token");

  const router = useRouter();

  useEffect(() => {
    if (!offPages[`${pathname}`]) { 
      if (!token) {
        router.push("/LogInPage");
      }
    }
  }, [token]);
  return <>{children}</>;
};
