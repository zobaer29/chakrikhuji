import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ChakriKhuji | Smarter recruitment. Human-led decisions.",
  description: "Discover ChakriKhuji: AI-powered CV insights for job seekers, candidate matching for HR, and fairness-aware shortlisting with final hiring decisions in human hands.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="color-scheme" content="light dark" />
        <script dangerouslySetInnerHTML={{ __html: `(function(){var theme;try{theme=localStorage.getItem('chakrikhuji-theme')}catch(e){}if(theme!=='light'&&theme!=='dark'){theme=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=theme;document.documentElement.style.colorScheme=theme;})()` }} />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--paper)] text-[var(--ink)]">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-5 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[var(--surface)] focus:text-[var(--ink)] focus:border focus:border-[var(--line)] focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--green)]">Skip to content</a>
        <Navbar />
        <div className="flex-1 min-w-0">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
