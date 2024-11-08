import React from "react";

const UserIcon = ({ color = "black" }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.7701 20.6421C6.88374 21.7653 1.93782 24.0588 4.95022 26.9288C6.42175 28.3307 8.06066 29.3333 10.1212 29.3333H21.8788C23.9393 29.3333 25.5783 28.3307 27.0497 26.9288C30.0621 24.0588 25.1163 21.7653 23.2299 20.6421C18.8064 18.0081 13.1936 18.0081 8.7701 20.6421Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 8.66663C22 11.9803 19.3137 14.6666 16 14.6666C12.6863 14.6666 10 11.9803 10 8.66663C10 5.35292 12.6863 2.66663 16 2.66663C19.3137 2.66663 22 5.35292 22 8.66663Z"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default UserIcon;
