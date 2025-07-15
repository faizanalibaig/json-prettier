import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'quick - prettier',
  description: 'simple and secure json prettier and validator',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
