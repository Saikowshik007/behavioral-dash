import "./globals.css";
import { Inter } from "next/font/google";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });
const baseUrl = process.env.NODE_ENV === 'production'
  ? '/behavioral-dash'
  : '';

export const metadata = {
  title: 'Interview Dashboard',
  description: 'Interview Q&A Dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <base href={baseUrl + '/'} />
        {/* Add this line to ensure proper path resolution */}
        <link rel="stylesheet" href={`${baseUrl}/_next/static/css/app/layout.css`} />
      </head>
      <body className={inter.className}>
        {children}
        {/* Add this to ensure proper JS loading */}
        <Script src={`${baseUrl}/_next/static/chunks/main.js`} strategy="beforeInteractive" />
      </body>
    </html>
  );
}