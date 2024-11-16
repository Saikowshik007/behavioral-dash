
import "./globals.css";
import { Inter } from "next/font/google";

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
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
