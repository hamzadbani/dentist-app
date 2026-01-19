import React from 'react';

const Logo = ({ className = "h-10 w-auto" }) => (
    <svg
        viewBox="0 0 100 100"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M50 10C35 10 25 25 25 45C25 65 35 90 50 90C65 90 75 65 75 45C75 25 65 10 50 10Z"
            className="fill-sky-500"
        />
        <path
            d="M35 45C35 45 42 55 50 55C58 55 65 45 65 45"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
        />
        <circle cx="40" cy="35" r="3" fill="white" />
        <circle cx="60" cy="35" r="3" fill="white" />
    </svg>
);

export default Logo;
