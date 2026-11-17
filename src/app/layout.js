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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){var theme;try{theme=localStorage.getItem('chakrikhuji-theme')}catch(e){}if(theme!=='light'&&theme!=='dark'){theme=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=theme})()` }} />
      </head>
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Navbar />
        <div className="site-content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
