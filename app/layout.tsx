import Providers from "./providers";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HomeAway",
  description: "Feel at home, away from home.",
};

// Disable React DevTools in production
if (process.env.NODE_ENV === 'production') {
  if (typeof window !== 'undefined' && window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {};
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Providers>
            <Navbar />
            <main className="container py-10"> {children}</main>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
