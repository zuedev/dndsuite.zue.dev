import { Analytics } from "@vercel/analytics/react";
import TwemojiGLobal from "components/TwemojiGlobal";
import "./globals.css";
import Logo from "assets/dndsuite_cropzoom.png";

export const metadata = {
  title: "D&D Suite",
  description: "A modern toolset for the world's greatest roleplaying game.",
  icons: {
    icon: Logo.src,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <TwemojiGLobal />
      </body>
    </html>
  );
}
