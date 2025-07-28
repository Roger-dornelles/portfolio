import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Roger - Portifólio',
  description: 'portfolio creation',
  icons: {
    icon: '/favicon-v1.ico',
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>{children}</body>
    </html>
  );
};
export default RootLayout;
