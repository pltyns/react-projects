import './globals.css';
import { ReactNode } from 'react';
import { Suspense } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<p>Yükleniyor...</p>}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
