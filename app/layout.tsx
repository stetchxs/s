import './globals.css';
import type { Metadata } from 'next';
import { Inter, Tajawal } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const tajawal = Tajawal({ 
  subsets: ['arabic'], 
  weight: ['300', '400', '500', '700'],
  variable: '--font-tajawal'
});

export const metadata: Metadata = {
  title: 'UN Group - International University Applications | Study Abroad',
  description: 'Expert guidance for international university applications. We help students achieve their dreams of studying abroad with personalized support and proven success.',
  keywords: 'international university, study abroad, university applications, student visa, education consulting',
  authors: [{ name: 'UN Group' }],
  creator: 'UN Group',
  publisher: 'UN Group',
  openGraph: {
    title: 'UN Group - International University Applications',
    description: 'Expert guidance for international university applications. We help students achieve their dreams of studying abroad.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ar_SA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UN Group - International University Applications',
    description: 'Expert guidance for international university applications. We help students achieve their dreams of studying abroad.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${tajawal.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}