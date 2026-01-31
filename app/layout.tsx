import "./globals.css";
import Toast from "@/components/ui/Toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Toast />
        {children}
      </body>
    </html>
  );
}
