import './globals.css';

export const metadata = {
  title: 'Cling Info Tech | IT Solutions & Web Development (Redesign)',
  description: 'Website development, mobile apps, digital marketing, custom web portals, ERP development and AI. Homepage redesign concept.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@500;700;800&family=Manrope:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
