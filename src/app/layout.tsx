'use client';
import Navbar from '@components/@components/Navbar';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import Footer from './footer';

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
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
            }}
          >
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
