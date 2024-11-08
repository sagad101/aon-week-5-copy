import React from "react";

const UserIcon2 = ({ color = "black" }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.3334 29.3333H8.78785C6.72734 29.3333 5.08843 28.3306 3.6169 26.9287C0.604509 24.0587 5.55042 21.7653 7.43678 20.6421C10.0408 19.0915 13.057 18.4538 16 18.7287"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.6667 8.66663C20.6667 11.9803 17.9804 14.6666 14.6667 14.6666C11.353 14.6666 8.66669 11.9803 8.66669 8.66663C8.66669 5.35292 11.353 2.66663 14.6667 2.66663C17.9804 2.66663 20.6667 5.35292 20.6667 8.66663Z"
        stroke={color}
        strokeWidth="2"
      />
      <path
        d="M27.2 27.2L29.3334 29.3333M28.2667 23.4666C28.2667 20.8157 26.1176 18.6666 23.4667 18.6666C20.8158 18.6666 18.6667 20.8157 18.6667 23.4666C18.6667 26.1176 20.8158 28.2666 23.4667 28.2666C26.1176 28.2666 28.2667 26.1176 28.2667 23.4666Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UserIcon2;
