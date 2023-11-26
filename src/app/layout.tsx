'use client';
import Navbar from '@components/@components/Navbar';
import './globals.css';
import { ThemeProvider } from 'next-themes';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      {/* <head /> */}
      <body className='dark:bg-stone-900'>
        <ThemeProvider enableSystem={true} attribute='class'>
          <Navbar />
          {children}
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
