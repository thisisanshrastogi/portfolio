import type { Metadata } from "next";

// import localFont from "next/font/local";
import "./globals.css";
// import { inter } from "./fonts/fonts";
import { ubuntu } from "./fonts/fonts";

import { ThemeProvider } from "next-themes";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Ansh Rastogi",
  description: "My dev Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <head>
        <link rel="icon" href="/favicon.ico" sizes=""/>
      </head> */}
      <body className={`${ubuntu.className} antialiased dark`}>
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
      </body>
    </html>
  );
}
