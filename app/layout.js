import './globals.css';
import Navbar from '@/components/Navbar';
import { Orbitron } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-orbitron',
  display: 'swap', // ✅ No render-blocking font load
});

export const metadata = {
  title: 'RD-Blog',
  description: 'An industry-level blog page',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ Inline critical styles (very small snippet) */}
        <style>{`
          body { overflow-x: hidden; }
        `}</style>
      </head>
      <body className={`${orbitron.variable} antialiased`}>
        <head>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8914479693209883"
            crossorigin="anonymous"></script>
        </head>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
