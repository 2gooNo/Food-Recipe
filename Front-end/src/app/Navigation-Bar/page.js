"use client";

import { useRouter } from "next/navigation";

export default function NavigationBar() {
  const router = useRouter();

  return (
    <div>
      <div>Logo</div>
      <div>Recipes</div>
      <div>
        <button onClick={() => router.push("/LogInPage")}>Log in </button>
        <button onClick={() => router.push("/SignUpPage")}>Sign Up</button>
      </div>
    </div>
  );
}
