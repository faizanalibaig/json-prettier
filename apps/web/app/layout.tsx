import type { Metadata } from 'next';
import './globals.css';

const calSans = {
  fontFamily: 'Cal Sans, sans-serif',
  fontWeight: '400',
  fontStyle: 'normal',
};

export const metadata: Metadata = {
  title: 'Json - Prettier',
  description: 'simple and secure json prettier and validator',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          href='https://fonts.googleapis.com/css2?family=Cal+Sans:wght@300;400;500;600;700&display=swap'
          rel='stylesheet'
        />
      </head>
      <body style={calSans}>{children}</body>
    </html>
  );
}
