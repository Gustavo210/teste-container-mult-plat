import { ThemeProvider } from "styled-components";

import defaultSizes from "@/defaultSizes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      theme={{
        ...defaultSizes.layout,
      }}
    >
      {children}
    </ThemeProvider>
  );
}
