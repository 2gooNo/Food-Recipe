"use client";

export function LogOut() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      id="sign-out"
      className="w-[20px]"
    >
      <rect width="256" height="256" fill="none"></rect>
      <polyline
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
        points="174.011 86 216 128 174.011 170"
      ></polyline>
      <line
        x1="104"
        x2="215.971"
        y1="128"
        y2="128"
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      ></line>
      <path
        fill="none"
        stroke="#000"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
        d="M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56"
      ></path>
    </svg>
  );
}
