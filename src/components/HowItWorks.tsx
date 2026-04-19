import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Install the app",
    desc: "Download the latest APK and install it on any Android device. Takes under 30 seconds.",
  },
  {
    n: "02",
    title: "Sign up & verify",
    desc: "Create an account with your phone number, add your email for OTP verification, and set up your bank or wallet details.",
  },
  {
    n: "03",
    title: "Deposit securely",
    desc: "Top up via UPI, bank, or crypto (BEP-20 / TRC-20). Deposits are auto-matched and approved by our admin team.",
  },
  {
    n: "04",
    title: "Earn & withdraw",
    desc: "Climb the tier ladder, rack up referral commissions, and withdraw anytime — directly to your bank or wallet.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden">
      <div className="absolute -top-1/3 right-0 w-[36rem] h-[36rem] rounded-full bg-violet-600/10 blur-[140px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] rounded-full bg-cyan-500/10 blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-violet-400 font-semibold tracking-[0.2em] text-xs uppercase mb-3">
              Get started
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Four steps, one{" "}
              <span className="text-gradient-crypto">smart app</span>
            </h2>
            <p className="mt-4 text-slate-400 text-base sm:text-lg">
              From download to your first payout in minutes.
            </p>
          </div>
        </Reveal>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Decorative connector */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120}>
              <div className="relative h-full rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/5 p-6 hover:border-cyan-500/30 transition-colors">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 flex items-center justify-center font-mono font-bold text-lg text-cyan-300 mb-4 backdrop-blur-sm">
                  {s.n}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
