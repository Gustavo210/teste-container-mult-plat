import AndroidThemeProvider from "./android";
import WebThemeProvider from "./web";

import { FC, ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

const CombinedThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return (
    <WebThemeProvider>
      <AndroidThemeProvider>{children}</AndroidThemeProvider>
    </WebThemeProvider>
  );
};

export default CombinedThemeProvider;
