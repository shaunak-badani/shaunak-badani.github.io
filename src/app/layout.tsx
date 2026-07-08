import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { personalInfo } from "@/data/content";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: personalInfo.name,
  description: `Portfolio of ${personalInfo.name}`,
  applicationName: personalInfo.name,
  verification: {
    google: "Rb4gpizrEIAT-qzSofnOxEo-qCJBqSMqDLa3kfVm5WM"
  },
  openGraph: {
      title: personalInfo.name,
      description: `Portfolio of ${personalInfo.name}`,
      siteName: personalInfo.name
  }
};

import type { Person } from 'schema-dts';
 
const inventor: Person = {
  '@type': 'Person',
  name: 'Shaunak Badani',
  url: "https://shaunak-badani.com",
  disambiguatingDescription: 'Software Engineer, Independent researcher'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(inventor).replace(/</g, '\\u003c'),
        }}
      />
        {children}
      </body>
    </html>
  );
}
