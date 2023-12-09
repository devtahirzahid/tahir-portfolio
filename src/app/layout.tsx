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
  // Rebuild this component
  // Using sneat configs // help from errands
  // still no progress
  // still no progress
  return (
    <html lang='en'>
      <body>
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
