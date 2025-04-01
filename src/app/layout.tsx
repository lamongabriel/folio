import "@/styles/globals.css"

import { inter, esbuild } from './fonts';
import { ReactElement } from 'react';
import { Heading } from "@/components/shared/heading";
import { Footer } from "@/components/shared/footer";
import { LanguageProvider } from "@/lib/i18n/language-context";
import { LanguageSelector } from "@/components/shared/language-selector";

export const metadata = {
  title: "Gabriel Lamon | Software Engineer",
  description: "Fullstack engineer with 5+ years of experience creating seamless, efficient applications that solve real-world problems.",
};

export const preferredRegion = 'edge';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#000000',
};

const RootLayout = ({ children }: {children: ReactElement}) => (
  <html lang="en" className={`${inter.variable} ${esbuild.variable} scroll-smooth`}>
    <body className="dark" style={{colorScheme: "dark"}}>
      <LanguageProvider>
        <Heading />
        {children}
        <Footer />
        <LanguageSelector variant="floating" />
      </LanguageProvider>
    </body>
  </html>
);

export default RootLayout;
