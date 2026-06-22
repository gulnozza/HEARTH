import "./globals.css";

export const metadata = {
  title: "Hearth",
  description: "AI safety intelligence for modern cities.",
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
