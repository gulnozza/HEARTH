import "./globals.css";

export const metadata = {
  title: "HEARTH — Move with confidence",
  description: "HEARTH helps women in Uzbekistan choose safer routes, find trusted places, and stay connected.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
