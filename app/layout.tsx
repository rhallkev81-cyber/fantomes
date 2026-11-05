import type { Metadata, Viewport } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fantomes-puce.vercel.app"),
  title: "Fantômes — Débusque les abonnements que tu paies sans t'en servir",
  description:
    "Dépose ton relevé : on retrouve les prélèvements oubliés, classés par coût annuel, avec la lettre de résiliation prête. 19 €, une seule fois.",
  openGraph: {
    title: "Fantômes — Débusque les abonnements oubliés",
    description:
      "Les petits prélèvements qui tournent depuis des années, retrouvés et classés par coût annuel.",
    locale: "fr_FR",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body
        className="bg-[#F6F0E4] text-[#1C1A17]"
        style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}