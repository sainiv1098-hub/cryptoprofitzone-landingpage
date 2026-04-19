import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-[#030510] px-4 sm:px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/cryptozonelogo.jpeg"
                alt="Crypto Profit Zone"
                width={36}
                height={36}
                className="w-9 h-9 rounded-lg object-cover ring-1 ring-white/10"
              />
              <span className="text-lg font-bold">
                Crypto <span className="text-gradient-crypto">Profit Zone</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Fast, secure, trusted crypto payment app for high-volume agents. Earn with every transaction.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-wider uppercase text-slate-200 mb-4">Product</p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#how" className="hover:text-white transition-colors">How it works</a></li>
              <li><a href="#tiers" className="hover:text-white transition-colors">Tiers</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-wider uppercase text-slate-200 mb-4">Get the app</p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="text-slate-500">Installs as a PWA</li>
              <li className="text-slate-500">Android &middot; iOS &middot; Desktop</li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>&copy; {year} Crypto Profit Zone. All rights reserved.</p>
          <p>Crypto investments carry risk. Transact responsibly.</p>
        </div>
      </div>
    </footer>
  );
}
