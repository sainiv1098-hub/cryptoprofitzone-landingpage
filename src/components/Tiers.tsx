import Reveal from "./Reveal";

const tiers = [
  {
    name: "Blue",
    subtitle: "Starter Tier",
    stars: 2,
    color: "from-cyan-400 to-sky-500",
    textColor: "text-cyan-300",
    borderColor: "border-cyan-500/30",
    deposit: "0",
    withdrawal: "0",
    dailyLimit: "₹40,000",
    hold: "10 hours",
    withCom: "2.00%",
    depCom: "3.00%",
    eligibility: "Default tier for all new agents. Start here.",
  },
  {
    name: "Silver",
    subtitle: "Consistent Performer",
    stars: 3,
    color: "from-slate-300 to-slate-500",
    textColor: "text-slate-200",
    borderColor: "border-slate-300/30",
    deposit: "10 Lakh",
    withdrawal: "8 Lakh",
    dailyLimit: "₹3,00,000",
    hold: "1.5 hours",
    withCom: "2.25%",
    depCom: "3.00%",
    eligibility: "₹10L deposit + ₹8L withdrawal in last 30 days.",
  },
  {
    name: "Gold",
    subtitle: "Trusted Partner",
    stars: 4,
    color: "from-amber-400 to-yellow-500",
    textColor: "text-amber-300",
    borderColor: "border-amber-500/40",
    deposit: "20 Lakh",
    withdrawal: "16 Lakh",
    dailyLimit: "₹15,00,000",
    hold: "1 hour",
    withCom: "2.25%",
    depCom: "3.00%",
    eligibility: "₹20L deposit + ₹16L withdrawal in last 30 days.",
    popular: true,
  },
  {
    name: "Platinum",
    subtitle: "Elite Performer",
    stars: 5,
    color: "from-fuchsia-400 to-violet-500",
    textColor: "text-fuchsia-300",
    borderColor: "border-fuchsia-500/40",
    deposit: "50 Lakh",
    withdrawal: "25 Lakh",
    dailyLimit: "₹25,00,000",
    hold: "40 mins",
    withCom: "2.40%",
    depCom: "3.15%",
    eligibility: "₹50L deposit + ₹25L withdrawal in last 30 days.",
  },
];

function Star({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`w-3.5 h-3.5 ${filled ? "fill-amber-400 text-amber-400" : "fill-none text-amber-400/30"}`}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default function Tiers() {
  return (
    <section id="tiers" className="relative py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-amber-400 font-semibold tracking-[0.2em] text-xs uppercase mb-3">
              Reward tiers
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              The more you move,{" "}
              <span className="text-gradient-crypto">the more you earn</span>
            </h2>
            <p className="mt-4 text-slate-400 text-base sm:text-lg">
              Every approved deposit and withdrawal in the last 30 days counts toward your next tier. Progress is tracked live in the app.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <div
                className={`relative h-full rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent border ${
                  t.popular ? "border-amber-500/50 shadow-[0_0_40px_-10px_rgba(251,191,36,0.4)]" : "border-white/5"
                } p-6 hover:border-white/20 transition-all duration-300 hover:-translate-y-1`}
              >
                {t.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-black text-[10px] font-bold tracking-wider">
                    MOST CHOSEN
                  </div>
                )}

                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${t.color} mb-4 relative overflow-hidden flex items-center justify-center`}>
                  <span className="font-black text-xl text-white drop-shadow-lg">{t.name[0]}</span>
                  <span className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0" />
                </div>

                <div className="flex items-center gap-2 mb-1">
                  <h3 className={`text-xl font-bold ${t.textColor}`}>{t.name}</h3>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Star key={si} filled={si < t.stars} />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-slate-400 uppercase tracking-wider mb-4">{t.subtitle}</p>

                <div className="space-y-2 text-xs border-t border-white/5 pt-4 mb-4">
                  <Row label="Daily limit" value={t.dailyLimit} />
                  <Row label="Hold time" value={t.hold} />
                  <Row label="Deposit comm." value={t.depCom} />
                  <Row label="Withdrawal comm." value={t.withCom} />
                </div>

                <p className="text-[11px] text-slate-500 italic leading-relaxed">{t.eligibility}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-slate-400">{label}</span>
      <span className="text-white font-semibold">{value}</span>
    </div>
  );
}
