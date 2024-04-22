import { Merriweather } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "DNDSuite",
  description: "A modern toolset for the world's greatest roleplaying game.",
  icons: {
    icon: "/dndsuite_cropzoom.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={merriweather.className}>{children}</body>
    </html>
  );
}
