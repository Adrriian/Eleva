import "./globals.css";
import { ThemeProvider } from "../contexts/themeMode";
import { UserProvider } from "@/contexts/userContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </UserProvider>
      </body>
    </html>
  );
}
