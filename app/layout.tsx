import Navigation from "../components/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Next movies",
    default: "Loading...",
  },
  description: "The bes movies on the best framework",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
