import type { Metadata } from 'next';
import { Caveat, EB_Garamond, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { SiteFooter } from '../components/site-footer';
import { SiteHeader } from '../components/site-header';

const display = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap'
});

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap'
});

const handwritten = Caveat({
  subsets: ['latin'],
  variable: '--font-handwritten',
  display: 'swap'
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'The Fifth Wall',
  applicationName: 'The Fifth Wall',
  description: 'A cinematic personal publishing platform for essays, fragments, cinema notes, and linked thinking.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem('theme');
                if (theme !== 'light' && theme !== 'dark') {
                  theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
                }
                document.documentElement.dataset.theme = theme;
                document.documentElement.style.colorScheme = theme;
              } catch (_) {}
            `
          }}
        />
      </head>
      <body className={`${display.variable} ${sans.variable} ${handwritten.variable} ${mono.variable} min-h-screen bg-base font-sans text-text-primary antialiased`}>
        <div className="grain-layer" />
        <div className="min-h-screen lg:flex">
          <SiteHeader />
          <div className="flex min-w-0 flex-1 flex-col">
            <main className="mx-auto w-full max-w-7xl flex-1 px-5 py-8 sm:px-8 lg:px-12 lg:py-12">{children}</main>
            <SiteFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
