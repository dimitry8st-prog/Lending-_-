import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Force Team — клуб единоборств",
  description: "Самбо, боевое самбо и джиу-джитсу для детей от 4 лет и взрослых.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    title: "Force Team — клуб единоборств",
    description: "Самбо, боевое самбо и джиу-джитсу для детей от 4 лет и взрослых.",
    images: ["/bear-sambo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Force Team — клуб единоборств",
    description: "Самбо, боевое самбо и джиу-джитсу для детей от 4 лет и взрослых.",
    images: ["/bear-sambo.png"],
  },
  icons: {
    icon: "/bear-sambo.png",
    shortcut: "/bear-sambo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
