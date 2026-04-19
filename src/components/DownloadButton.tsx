"use client";

import { useEffect, useRef, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
  prompt(): Promise<void>;
}

type InstallState = "ready" | "installed" | "ios" | "waiting";

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
  const deferredPrompt = useRef<BeforeInstallPromptEvent | null>(null);
  const [state, setState] = useState<InstallState>("waiting");
  const [showIosSheet, setShowIosSheet] = useState(false);
  const [showHelpSheet, setShowHelpSheet] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    const isIos = /iphone|ipad|ipod/.test(ua) && !/crios|fxios/.test(ua);

    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (navigator as Navigator & { standalone?: boolean }).standalone === true;

    if (isStandalone) {
      setState("installed");
      return;
    }

    if (isIos) {
      setState("ios");
      return;
    }

    const onBeforeInstall = (e: Event) => {
      e.preventDefault();
      deferredPrompt.current = e as BeforeInstallPromptEvent;
      setState("ready");
      console.log("[PWA] beforeinstallprompt captured — install button is armed.");
    };

    const onInstalled = () => {
      deferredPrompt.current = null;
      setState("installed");
      setToast("App installed — look for it on your home screen.");
      setTimeout(() => setToast(null), 4000);
    };

    window.addEventListener("beforeinstallprompt", onBeforeInstall);
    window.addEventListener("appinstalled", onInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstall);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  async function handleClick() {
    if (state === "ios") {
      setShowIosSheet(true);
      return;
    }

    if (state === "installed") {
      setToast("App is already installed.");
      setTimeout(() => setToast(null), 3000);
      return;
    }

    const ev = deferredPrompt.current;
    if (!ev) {
      // Log detailed diagnostics so you (the developer) can see why
      // Chrome hasn't fired beforeinstallprompt yet.
      const isSecure = window.isSecureContext;
      const hasSw = "serviceWorker" in navigator;
      const swController = navigator.serviceWorker?.controller;
      console.warn(
        "[PWA] Install prompt not ready.",
        { isSecure, hasSw, swController: !!swController, state }
      );
      setShowHelpSheet(true);
      return;
    }

    try {
      await ev.prompt();
      const { outcome } = await ev.userChoice;
      if (outcome === "accepted") {
        // The `appinstalled` listener will update state + toast.
      } else {
        setToast("Install dismissed. Tap the button anytime to try again.");
        setTimeout(() => setToast(null), 4000);
      }
    } catch (err) {
      console.error("[PWA] prompt() failed:", err);
      setShowHelpSheet(true);
    } finally {
      deferredPrompt.current = null;
    }
  }

  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base sm:text-lg",
  }[size];

  if (state === "installed") {
    return (
      <div className={`relative ${fullWidth ? "w-full" : "inline-block"} ${className}`}>
        <div
          className={`inline-flex ${
            fullWidth ? "w-full" : ""
          } items-center justify-center gap-2.5 ${sizeClasses} font-semibold rounded-full text-emerald-300 bg-emerald-500/10 border border-emerald-500/30`}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
          App installed
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={`relative ${fullWidth ? "w-full" : "inline-block"} ${className}`}>
        <button
          type="button"
          onClick={handleClick}
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
        </button>

        {toast && (
          <div
            role="status"
            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-max max-w-[90vw] bg-slate-900/95 border border-white/10 text-slate-100 text-xs sm:text-sm px-4 py-2.5 rounded-xl backdrop-blur-sm z-10 animate-fade-up shadow-xl"
          >
            {toast}
          </div>
        )}
      </div>

      {showIosSheet && <IosInstructions onClose={() => setShowIosSheet(false)} />}
      {showHelpSheet && (
        <InstallHelpSheet onClose={() => setShowHelpSheet(false)} />
      )}
    </>
  );
}

function IosInstructions({ onClose }: { onClose: () => void }) {
  return (
    <Sheet title="Install on iPhone / iPad" onClose={onClose}>
      <p className="text-slate-400 text-xs mb-4">
        Safari doesn&apos;t offer an install button, so it&apos;s a quick two-step:
      </p>
      <ol className="space-y-3 text-sm text-slate-200">
        <li className="flex gap-3">
          <span className="w-7 h-7 rounded-full bg-cyan-500/20 text-cyan-300 font-bold text-xs flex items-center justify-center shrink-0">1</span>
          <span>
            Tap the <strong>Share</strong> icon
            <span className="inline-block align-middle mx-1.5 text-cyan-300">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v13" />
                <path d="m7 8 5-5 5 5" />
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
              </svg>
            </span>
            in the Safari toolbar.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="w-7 h-7 rounded-full bg-cyan-500/20 text-cyan-300 font-bold text-xs flex items-center justify-center shrink-0">2</span>
          <span>
            Scroll and tap <strong>&quot;Add to Home Screen&quot;</strong>, then <strong>Add</strong>.
          </span>
        </li>
      </ol>
    </Sheet>
  );
}

function InstallHelpSheet({ onClose }: { onClose: () => void }) {
  return (
    <Sheet title="Install via browser menu" onClose={onClose}>
      <p className="text-slate-400 text-xs mb-4">
        Your browser hasn&apos;t offered the automatic install prompt yet. You can still install the app manually in a couple of taps:
      </p>
      <ol className="space-y-3 text-sm text-slate-200">
        <li className="flex gap-3">
          <span className="w-7 h-7 rounded-full bg-cyan-500/20 text-cyan-300 font-bold text-xs flex items-center justify-center shrink-0">1</span>
          <span>
            Tap the <strong>three-dot menu</strong> (⋮) in the top-right of Chrome.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="w-7 h-7 rounded-full bg-cyan-500/20 text-cyan-300 font-bold text-xs flex items-center justify-center shrink-0">2</span>
          <span>
            Tap <strong>&quot;Install app&quot;</strong> or <strong>&quot;Add to Home screen&quot;</strong>.
          </span>
        </li>
        <li className="flex gap-3">
          <span className="w-7 h-7 rounded-full bg-cyan-500/20 text-cyan-300 font-bold text-xs flex items-center justify-center shrink-0">3</span>
          <span>Confirm — the Crypto Profit Zone icon appears on your home screen.</span>
        </li>
      </ol>
      <p className="text-slate-500 text-[11px] mt-5">
        Tip: if the option is missing, refresh the page once and try again — the browser needs a moment to recognise the app.
      </p>
    </Sheet>
  );
}

function Sheet({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-up"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full sm:max-w-md bg-[#0b1126] border-t sm:border border-white/10 rounded-t-3xl sm:rounded-3xl p-6 text-left"
      >
        <div className="flex items-start justify-between gap-3 mb-4">
          <h3 className="text-white font-bold text-lg">{title}</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-slate-300 shrink-0"
            aria-label="Close"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        {children}

        <button
          onClick={onClose}
          className="mt-6 w-full py-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold text-sm active:scale-[0.98]"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
