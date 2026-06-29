import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Oncolo Oysa — Creative Studio",
  description: "Building extraordinary digital experiences at the intersection of design and technology. Oncolo Oysa — Creative Studio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/jpeg" href="/u/photo_2026-04-25_09-15-43.jpg" />
      </head>
      <body>
        <ThemeProvider>
          <div className="grain" aria-hidden="true" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
