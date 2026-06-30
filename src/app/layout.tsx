import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Animexus | Your Premium Anime Destination",
  description: "Explore the world of anime with Animexus. Trending titles, detailed information, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className="antialiased">
          <Toaster richColors closeButton position="top-right" theme="dark" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}




