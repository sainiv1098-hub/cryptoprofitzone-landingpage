import Image from "next/image";
import DownloadButton from "./DownloadButton";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="relative rounded-3xl bg-gradient-to-br from-indigo-600/20 via-violet-600/15 to-cyan-500/20 border border-white/10 p-8 sm:p-14 text-center overflow-hidden">
            {/* Decorative orbs */}
            <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-cyan-400/20 blur-3xl animate-float-slow" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-violet-500/20 blur-3xl animate-float-slower" />

            <div className="relative">
              <div className="inline-flex mb-6">
                <div className="w-20 h-20 rounded-2xl ring-2 ring-white/20 overflow-hidden animate-glow-ring">
                  <Image
                    src="/cryptozonelogo.jpeg"
                    alt="Crypto Profit Zone"
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                Ready to start earning?
              </h2>
              <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto mb-8">
                Install Crypto Profit Zone on your Android phone and process your first deposit in minutes.
              </p>

              <div className="flex justify-center">
                <DownloadButton size="lg" label="Get Started" />
              </div>

              <p className="mt-6 text-xs text-slate-400">
                Free &bull; Android only &bull; Signed APK
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
