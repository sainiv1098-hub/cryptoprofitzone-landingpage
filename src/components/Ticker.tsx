const tickerItems = [
  { sym: "USDT", price: "$1.00", chg: "+0.01%" },
  { sym: "BTC", price: "$68,420", chg: "+2.4%" },
  { sym: "ETH", price: "$3,980", chg: "+1.8%" },
  { sym: "BNB", price: "$612", chg: "+0.9%" },
  { sym: "TRX", price: "$0.138", chg: "+3.2%" },
  { sym: "SOL", price: "$184", chg: "+4.1%" },
  { sym: "XRP", price: "$0.62", chg: "-0.5%" },
  { sym: "USDC", price: "$1.00", chg: "+0.00%" },
];

export default function Ticker() {
  const items = [...tickerItems, ...tickerItems];

  return (
    <div className="relative border-y border-white/5 bg-black/20 py-3 overflow-hidden">
      <div className="flex gap-10 animate-ticker whitespace-nowrap w-max">
        {items.map((item, i) => {
          const up = !item.chg.startsWith("-");
          return (
            <div key={i} className="flex items-center gap-2 text-sm">
              <span className="font-mono font-bold text-white">{item.sym}</span>
              <span className="text-slate-300">{item.price}</span>
              <span className={up ? "text-emerald-400" : "text-rose-400"}>
                {item.chg}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
