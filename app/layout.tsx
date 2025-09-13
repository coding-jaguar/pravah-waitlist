import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "./components/ui/sonner";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pravah waitlist",
  description: "dont chase momentum, let it chase you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 md:fixed md:left-4 md:top-4 md:z-50"
        >
          <Image
            src="/images/pravah-logo.png"
            alt="Pravah"
            width={200}
            height={200}
            className="rounded"
          />
          <span className="sr-only">Pravah</span>
        </Link>
        {children}
        <Toaster richColors position="top-center" expand closeButton />
      </body>
    </html>
  );
}
