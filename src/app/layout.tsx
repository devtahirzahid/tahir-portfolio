import type { Metadata } from 'next';
import './globals.css';

// Providers Import
import Providers from './providers';
import ThemeSwitcher from './ThemeSwitcher';

export const metadata: Metadata = {
  title: "Tahir's Portfolio",
  description: 'Made by Tahir',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <ThemeSwitcher />
          {children}
        </Providers>
      </body>
    </html>
  );
}
