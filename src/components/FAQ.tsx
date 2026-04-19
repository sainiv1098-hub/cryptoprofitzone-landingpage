"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "Is Crypto Profit Zone safe to install?",
    a: "Yes. The app is signed and distributed as a verified Android APK. Your phone may ask you to enable installs from unknown sources the first time — that's standard for any sideloaded app. All transactions happen over HTTPS with email-verified accounts.",
  },
  {
    q: "Which devices does it work on?",
    a: "Crypto Profit Zone currently runs on Android phones and tablets. iOS is not supported yet. Older Android versions (5.1+) should work; Android 9+ is recommended for the best experience.",
  },
  {
    q: "How fast are withdrawals?",
    a: "Approval times depend on your tier. Blue-tier withdrawals are processed within ~10 hours, while Platinum-tier agents see clearance in as little as 40 minutes. Higher turnover = faster payouts.",
  },
  {
    q: "What's the referral program?",
    a: "Every account gets a unique referral code. Share it with new agents — when they sign up and start processing transactions, you earn a lifetime commission on their approved volume, paid out on a weekly cycle.",
  },
  {
    q: "Do I need to pay anything to start?",
    a: "No — the app itself is free. You'll only move your own transaction funds, and you keep the commissions and referral income you earn.",
  },
  {
    q: "Can I withdraw to USDT?",
    a: "Yes. The app supports both UPI/bank withdrawals and crypto payouts via BEP-20 and TRC-20 networks. Pick the rail that's cheapest and fastest for you.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-emerald-400 font-semibold tracking-[0.2em] text-xs uppercase mb-3">
              Questions
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Everything you{" "}
              <span className="text-gradient-crypto">want to know</span>
            </h2>
          </div>
        </Reveal>

        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => {
            const open = openIdx === i;
            return (
              <Reveal key={f.q} delay={i * 60}>
                <div
                  className={`rounded-2xl border transition-all duration-300 ${
                    open
                      ? "border-cyan-500/40 bg-cyan-500/5"
                      : "border-white/10 bg-white/[0.02] hover:border-white/20"
                  }`}
                >
                  <button
                    onClick={() => setOpenIdx(open ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="text-sm sm:text-base font-semibold text-white">{f.q}</span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        open ? "bg-cyan-500 rotate-45" : "bg-white/10"
                      }`}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm text-slate-300 leading-relaxed">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
