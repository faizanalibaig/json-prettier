import type { Metadata } from 'next';
import './globals.css';

const calSans = {
  fontFamily: 'Cal Sans, sans-serif',
  fontWeight: '400',
  fontStyle: 'normal',
};

const dmSans = {
  fontFamily: 'DM Sans, sans-serif',
  fontWeight: '400',
  fontStyle: 'normal',
};

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
      <head>
        <link
          href='https://fonts.googleapis.com/css2?family=Cal+Sans&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap'
          rel='stylesheet'
        />
        <style>{`
          body { font-family: ${calSans.fontFamily}; }
          h1, h2, h3, h4, h5, h6 { font-family: ${calSans.fontFamily}; }
          p, span, div, input, textarea { font-family: ${dmSans.fontFamily}; }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
