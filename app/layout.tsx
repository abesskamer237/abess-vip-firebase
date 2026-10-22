import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ABESS VIP | Web Console",
  description: "Web console for ABESS VIP. The VPN engine is hosted separately."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
