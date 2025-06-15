import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata = {
  title: "Hotel management",
  description: "Gerenciamento on-line de hotéis",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={`${lexend.className} antialiased bg-gray-100`}>{children}</body>
    </html>
  );
}
