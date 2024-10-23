import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

export const montserrat = Montserrat({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Movie App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
}