import Image from "next/image";
import DownloadButton from "./DownloadButton";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      {/* Animated background orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-32 w-[32rem] h-[32rem] rounded-full bg-cyan-500/20 blur-[120px] animate-float-slow" />
        <div className="absolute bottom-0 -right-24 w-[28rem] h-[28rem] rounded-full bg-violet-600/25 blur-[110px] animate-float-slower" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20rem] h-[20rem] rounded-full bg-emerald-500/10 blur-[90px] animate-float-slow" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 -z-10 bg-grid opacity-30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-[#050814]/60 to-[#050814]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Copy */}
          <div className="text-center lg:text-left animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs sm:text-sm font-medium mb-6">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              Live · Trusted by thousands of agents
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
              Fast, secure{" "}
              <span className="text-gradient-crypto">USDT payouts</span>{" "}
              — earn with every transaction.
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Crypto Profit Zone is the platform for agents who want{" "}
              <span className="text-white font-semibold">lightning-quick deposits & withdrawals</span>,
              multi-tier rewards, and lifetime referral commissions — all in a single, beautifully simple app.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
              <DownloadButton size="lg" label="Get Started" />
              <a
                href="#features"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-white/15 text-slate-200 hover:bg-white/5 transition-colors text-sm sm:text-base font-medium"
              >
                Explore features
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Android APK
              </div>
              <div className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Bank-grade security
              </div>
              <div className="hidden sm:flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Free to use
              </div>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="relative flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="relative">
              {/* Glow behind phone */}
              <div className="absolute inset-0 -z-10 blur-3xl">
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-gradient-to-br from-cyan-500/50 to-violet-500/50" />
              </div>

              {/* Phone frame */}
              <div className="relative w-[260px] sm:w-[300px] h-[540px] sm:h-[620px] rounded-[44px] bg-gradient-to-b from-slate-800 to-slate-900 p-3 shadow-[0_30px_80px_-20px_rgba(139,92,246,0.5)] ring-1 ring-white/10">
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-b-2xl z-10" />
                <div className="w-full h-full bg-[#0b1120] rounded-[34px] overflow-hidden relative">
                  {/* Phone status bar */}
                  <div className="flex items-center justify-between px-5 pt-3 text-[10px] text-slate-400 font-medium">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M2 22h20v-2H2zm2-5h2v2H4zm4-4h2v6H8zm4-4h2v10h-2zm4-4h2v14h-2z"/></svg>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="8" width="18" height="10" rx="2" /></svg>
                    </div>
                  </div>

                  {/* App header */}
                  <div className="px-4 pt-4 pb-3 flex items-center gap-2 border-b border-white/5">
                    <Image
                      src="/cryptozonelogo.jpeg"
                      alt=""
                      width={26}
                      height={26}
                      className="w-7 h-7 rounded-md object-cover"
                    />
                    <span className="text-sm font-bold">
                      Crypto <span className="text-cyan-400">Profit Zone</span>
                    </span>
                  </div>

                  {/* Balance card */}
                  <div className="mx-3 mt-4 p-4 rounded-2xl bg-gradient-to-br from-indigo-600/30 via-violet-600/20 to-cyan-500/20 border border-white/10">
                    <p className="text-[10px] text-slate-300 uppercase tracking-wider">Net Balance</p>
                    <p className="text-white font-bold text-2xl mt-1">₹2,45,680.00</p>
                    <div className="mt-3 grid grid-cols-3 gap-2 text-[9px]">
                      <div className="bg-white/5 rounded-lg p-2 text-center">
                        <p className="text-emerald-400 font-bold text-sm">+14%</p>
                        <p className="text-slate-400">Today</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-2 text-center">
                        <p className="text-white font-bold text-sm">48</p>
                        <p className="text-slate-400">Deposits</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-2 text-center">
                        <p className="text-white font-bold text-sm">12</p>
                        <p className="text-slate-400">Withdrawals</p>
                      </div>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="mx-3 mt-3 grid grid-cols-2 gap-2">
                    <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-3 text-center">
                      <div className="w-8 h-8 mx-auto rounded-full bg-emerald-500/20 flex items-center justify-center mb-1 text-emerald-400">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
                      </div>
                      <p className="text-[10px] font-semibold">Deposit</p>
                    </div>
                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-3 text-center">
                      <div className="w-8 h-8 mx-auto rounded-full bg-amber-500/20 flex items-center justify-center mb-1 text-amber-400">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
                      </div>
                      <p className="text-[10px] font-semibold">Withdraw</p>
                    </div>
                  </div>

                  {/* Tier progress */}
                  <div className="mx-3 mt-3 p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="flex justify-between text-[9px] mb-1">
                      <span className="text-cyan-400 font-bold">BLUE TIER</span>
                      <span className="text-slate-400">Silver</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full w-2/3 bg-gradient-to-r from-cyan-400 to-violet-500" />
                    </div>
                    <p className="text-[9px] text-slate-400 mt-2">66% to next tier — keep going!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
