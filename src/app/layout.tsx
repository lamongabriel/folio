import "@/styles/globals.css"

import { inter, esbuild } from './fonts';
import { ReactElement } from 'react';
import { Heading } from "@/components/shared/heading";

export const preferredRegion = 'edge';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#000000',
};

const RootLayout = ({ children }: {children: ReactElement}) => (
  <html lang="en" className={`${inter.variable} ${esbuild.variable} dark`}>
    <body>
      <Heading />
      {children}
    </body>
  </html>
);

export default RootLayout;