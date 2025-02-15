import { Inter } from 'next/font/google';
import './global.css';
import { AuthGuard } from '@/lib/AuthGuard'

import { ToastProvider } from '@/components/ui/toast'

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
      <AuthGuard>
          <ToastProvider>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
          {children}
        </div>
            </ToastProvider>
        </AuthGuard>
      </body>
    </html>
  );
}