import PublicHeader from "@/components/layouts/PublicHeader";
import "./globals.css";
import { IBM_Plex_Mono } from "next/font/google";
import PublicFooter from "@/components/layouts/PublicFooter";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${ibmPlexMono.className} dark:bg-[#212737]`}>
        <PublicHeader />
        {children}
        <PublicFooter />
      </body>
    </html>
  );
}
