import { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  preload: false,
});

export const metadata: Metadata = {
  title: "Inusidian",
  description: "SRS for dogs",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Inusidian",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
