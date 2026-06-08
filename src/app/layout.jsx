import { Geist, Geist_Mono, Barlow } from "next/font/google";
import "./globals.css";
import StructuredData from "@/app/_components/StructuredData";
import {
  HOME_SEO,
  ORGANIZATION_JSON_LD,
  SITE_NAME,
  SITE_URL,
  WEBSITE_JSON_LD,
  buildPageMetadata,
} from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  ...buildPageMetadata({
    title: HOME_SEO.title,
    description: HOME_SEO.description,
    path: "/",
  }),
  applicationName: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${barlow.variable} h-full antialiased relative`}
      data-scroll-behavior="smooth"
    >
      <body className={`${barlow.className} min-h-full flex flex-col relative`}>
        <StructuredData data={ORGANIZATION_JSON_LD} />
        <StructuredData data={WEBSITE_JSON_LD} />
        {children}
      </body>
    </html>
  );
}
