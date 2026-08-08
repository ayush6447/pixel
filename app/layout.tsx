import type { Metadata, Viewport } from 'next';
import { Newsreader, JetBrains_Mono } from 'next/font/google';
import { RoomProvider } from '@/lib/room-context';
import './globals.css';

const serif = Newsreader({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ayush Kumar Singh — the room',
  description:
    'A room in Jamshedpur. Everything in it opens something. Applied ML, Flutter, and the hardware that feeds them.',
  openGraph: {
    title: 'Ayush Kumar Singh — the room',
    description: 'An interactive pixel-art portfolio. Every object opens a project.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#E9E7E0',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${mono.variable}`}>
      <body className="fresh">
        <RoomProvider>{children}</RoomProvider>
      </body>
    </html>
  );
}
