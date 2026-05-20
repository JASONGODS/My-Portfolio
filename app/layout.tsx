import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jason Lim — Portfolio",
  description: "Fresh Graduate | Aspiring Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <div className="ambient-bg" />
        {children}
      </body>
    </html>
  );
}