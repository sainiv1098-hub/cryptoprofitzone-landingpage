"use client";

import { useState } from "react";

const APK_URL = "/crypto-profit-zone.apk";

interface DownloadButtonProps {
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  label?: string;
  className?: string;
}

export default function DownloadButton({
  size = "lg",
  fullWidth = false,
  label = "Install the App",
  className = "",
}: DownloadButtonProps) {
  const [showIosWarning, setShowIosWarning] = useState(false);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    const ua = navigator.userAgent.toLowerCase();
    const isIos = /iphone|ipad|ipod/.test(ua);
    if (isIos) {
      e.preventDefault();
      setShowIosWarning(true);
      setTimeout(() => setShowIosWarning(false), 4500);
    }
  }

  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base sm:text-lg",
  }[size];

  return (
    <div className={`relative ${fullWidth ? "w-full" : "inline-block"} ${className}`}>
      <a
        href={APK_URL}
        onClick={handleClick}
        download
        className={`group relative inline-flex ${
          fullWidth ? "w-full" : ""
        } items-center justify-center gap-2.5 ${sizeClasses} font-semibold rounded-full text-white overflow-hidden transition-transform active:scale-[0.98] animate-glow-ring`}
      >
        <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-indigo-500 to-violet-500 transition-transform duration-500 group-hover:scale-110" />
        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 transition-opacity duration-500" />

        <span className="relative flex items-center gap-2.5 whitespace-nowrap">
          <svg
            className="w-5 h-5 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3v12" />
            <path d="m7 10 5 5 5-5" />
            <path d="M5 21h14" />
          </svg>
          {label}
        </span>
      </a>

      {showIosWarning && (
        <div
          role="alert"
          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-max max-w-[90vw] bg-amber-500/10 border border-amber-500/40 text-amber-200 text-xs sm:text-sm px-4 py-2.5 rounded-xl backdrop-blur-sm z-10 animate-fade-up"
        >
          This app is for Android devices only. Please open on an Android phone.
        </div>
      )}
    </div>
  );
}
