import type { Metadata } from "next";
import "./global.css";
import { StoreProvider } from "@/store/StoreProvider";

export const metadata: Metadata = {
  title: "A-contract",
  description: "A-contract. Service for analyse contracts",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
};

export default function BaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
        </head>
        <body>{children}</body>
      </html>
    </StoreProvider>
  );
}
