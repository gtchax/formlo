import "./globals.css";
import { NextAuthProvider } from "./providers";

export const metadata = {
  title: "Formlo",
  description: "Build Beautiful Forms",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
