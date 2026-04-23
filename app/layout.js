export const metadata = {
  title: "EuTech",
  description: "School Management Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
