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

export const metadata = {
  title: "ChakriKhuji | A better match for your next move",
  description: "Explore your strengths, understand skill gaps, and prepare for your next opportunity with ChakriKhuji.",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
