import { theme } from "@/utils/theme";
import { DefaultTheme, ThemeProvider } from "styled-components/native";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme as DefaultTheme}>{children}</ThemeProvider>
  );
}
