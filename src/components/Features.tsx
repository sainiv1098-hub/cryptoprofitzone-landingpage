import Reveal from "./Reveal";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="m13 2-3 7h4l-3 13" />
      </svg>
    ),
    title: "Lightning-fast payouts",
    desc: "USDT deposits and withdrawals clear in minutes, not hours. Processed hold times as low as 40 minutes for Platinum-tier agents.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 4 7v6c0 4.5 3.5 8.5 8 9 4.5-.5 8-4.5 8-9V7z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "Bank-grade security",
    desc: "Email-verified accounts, hashed credentials, and audited admin workflows. Your balance and data are locked down.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7" />
        <path d="M8.2 13.9 7 22l5-3 5 3-1.2-8.1" />
      </svg>
    ),
    title: "Multi-tier rewards",
    desc: "Climb from Blue to Platinum. Higher tiers mean bigger daily limits, faster clearing, and better commissions.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.9" />
        <path d="M16 3.1a4 4 0 0 1 0 7.8" />
      </svg>
    ),
    title: "Lifetime referral income",
    desc: "Share your unique code and earn a cut of every approved transaction your network processes — paid weekly.",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="3" />
        <path d="M2 10h20" />
        <path d="M6 15h4" />
      </svg>
    ),
    title: "Flexible payment rails",
    desc: "Pay in with UPI, bank transfer, BEP-20 or TRC-20 USDT. Cash out to the rail that works for you.",
    color: "from-sky-500 to-indigo-500",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="m19 9-5 5-4-4-3 3" />
      </svg>
    ),
    title: "Live performance dashboard",
    desc: "Track turnover, commissions, tier progress and payouts in real time. No spreadsheets, no guessing.",
    color: "from-pink-500 to-rose-500",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-cyan-400 font-semibold tracking-[0.2em] text-xs uppercase mb-3">
              Why agents choose us
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Built for the way you{" "}
              <span className="text-gradient-crypto">actually work</span>
            </h2>
            <p className="mt-4 text-slate-400 text-base sm:text-lg">
              A complete toolkit for high-volume payment agents — from instant payouts to transparent, auditable commission flows.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <div className="card-sheen group relative h-full rounded-2xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/5 p-6 hover:border-white/15 transition-all duration-300 hover:-translate-y-1">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center text-white mb-4 shadow-lg`}>
                  <span className="w-6 h-6 inline-block">{f.icon}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{f.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
