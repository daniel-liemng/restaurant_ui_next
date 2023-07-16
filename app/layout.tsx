import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Silverspoon Restaurant',
  description: 'A Nextjs web application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
