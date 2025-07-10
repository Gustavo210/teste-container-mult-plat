import { useCallback } from "react";
import type { ViewStyle } from "react-native";
import { FlexStyle, View, ViewProps } from "react-native";
import { DefaultTheme, useTheme } from "styled-components";
type alignType = "START" | "CENTER" | "END";
export interface ViewBaseProps extends ViewProps {
  full?: boolean;
  gap?: Uppercase<keyof DefaultTheme["gaps"] & string>;
  overflow?: "HIDDEN" | "SCROLL";
  align?: `${alignType}_${alignType}` | alignType;
}

export function ViewBase({
  children,
  gap,
  full,
  style,
  overflow,
  align,
  ...rest
}: ViewBaseProps) {
  const theme = useTheme();

  if (theme === undefined) {
    throw new Error("ViewBase must be used within a ThemeProvider");
  }
  // TODO: verificar se o useCallback é necessário
  const calculateGap = useCallback(() => {
    if (!gap) return 0;
    const GapTag = gap.toLowerCase();
    return Number(theme.gaps[GapTag]);
  }, [gap, theme.gaps]);

  const configureAlign = useCallback(():
    | Partial<Pick<ViewStyle, "justifyContent" | "alignItems">>
    | undefined => {
    if (!align) return undefined;

    const tokens = align
      .toLowerCase()
      .split("_")
      .map((token) => {
        if (token === "start") return "flex-start";
        if (token === "center") return "center";
        if (token === "end") return "flex-end";
        throw new Error(`Invalid alignment token: ${token}`);
      });

    if (tokens.length === 1) {
      return {
        justifyContent: tokens[0],
        alignItems: tokens[0],
      };
    }
    return {
      justifyContent: tokens[0],
      alignItems: tokens[1],
    };
  }, [align]);
  return (
    <View
      style={[
        {
          gap: calculateGap(),
        },
        full && { flex: 1 },
        overflow && {
          overflow: overflow.toLowerCase() as FlexStyle["overflow"],
        },
        align && configureAlign(),
        style,
      ]}
      {...rest}
    >
      {children}
    </View>
  );
}
