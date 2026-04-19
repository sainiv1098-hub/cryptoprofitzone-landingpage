import Reveal from "./Reveal";

const stats = [
  { value: "₹2,500Cr+", label: "Processed volume" },
  { value: "50,000+", label: "Active agents" },
  { value: "< 40s", label: "Avg. approval" },
  { value: "99.98%", label: "Uptime" },
];

export default function Stats() {
  return (
    <section className="relative py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="rounded-3xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 p-8 sm:p-10 backdrop-blur-sm">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient-crypto tracking-tight">
                    {s.value}
                  </p>
                  <p className="mt-2 text-sm text-slate-400">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
