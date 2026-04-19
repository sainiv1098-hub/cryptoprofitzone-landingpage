import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050814",
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://abcpay.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Crypto Profit Zone — Fast, Secure, Trusted Crypto Payments",
  description:
    "Deposit, withdraw, and earn with Crypto Profit Zone. Multi-tier rewards, referral commissions, lightning-fast USDT payouts. Install the app now.",
  manifest: "/manifest.json",
  icons: {
    icon: "/icons/icon-192x192.png",
    apple: "/icons/icon-192x192.png",
  },
  openGraph: {
    title: "Crypto Profit Zone",
    description:
      "Fast, secure crypto payments with multi-tier referral rewards. Install now.",
    images: ["/cryptozonelogo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050814] text-slate-100 overflow-x-hidden">
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function () {
                  navigator.serviceWorker.register('/sw.js').then(function (reg) {
                    console.log('[PWA] SW registered, scope:', reg.scope);
                  }).catch(function (err) {
                    console.error('[PWA] SW registration failed:', err);
                  });
                });
              } else {
                console.warn('[PWA] Service workers not supported in this browser.');
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
