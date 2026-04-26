import "./globals.css";

export const metadata = {
  title: "PulseFit Gym",
  description: "High-energy gym landing page built with Next.js."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
