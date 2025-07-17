import { forwardRef, useCallback } from "react";
import type { ViewStyle } from "react-native";
import { FlexStyle, View, ViewProps } from "react-native";
import { DefaultTheme, useTheme } from "styled-components";

type alignType = "START" | "CENTER" | "END";
type PaddingType = Uppercase<keyof DefaultTheme["spacing"] & string>;
export interface ViewBaseProps extends ViewProps {
  full?: boolean;
  gap?: Uppercase<keyof DefaultTheme["gaps"] & string>;
  overflow?: "HIDDEN" | "SCROLL";
  align?: `${alignType}_${alignType}` | alignType | "BETWEEN";
  padding?:
    | PaddingType
    | `${PaddingType}_${PaddingType}`
    | `${PaddingType}_${PaddingType}_${PaddingType}_${PaddingType}`;
}

export const ViewBase = forwardRef<View, ViewBaseProps>(function ViewBase(
  { children, gap, full, style, overflow, align, padding, ...rest },
  ref
) {
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
        switch (token) {
          case "start":
            return "flex-start";
          case "center":
            return "center";
          case "end":
            return "flex-end";
          case "between":
            return "space-between";
          default:
            throw new Error(`Invalid alignment token: ${token}`);
        }
      });

    if (tokens.length === 1) {
      if (tokens[0] === "space-between") {
        return {
          justifyContent: tokens[0],
        };
      }
      return {
        justifyContent: tokens[0],
        alignItems: tokens[0],
      };
    }
    return {
      justifyContent: tokens[0],
      alignItems: tokens[1] as FlexStyle["alignItems"],
    };
  }, [align]);

  const ConfigurePadding = useCallback(() => {
    if (!padding) return {};
    const paddingTokens = padding.toLowerCase().split("_");
    const paddingStyles: ViewStyle = {};
    type SpacingKey = keyof typeof theme.spacing;
    if (paddingTokens.length === 1) {
      paddingStyles.padding = theme.spacing[paddingTokens[0] as SpacingKey];
    } else if (paddingTokens.length === 2) {
      paddingStyles.paddingVertical =
        theme.spacing[paddingTokens[0] as SpacingKey];
      paddingStyles.paddingHorizontal =
        theme.spacing[paddingTokens[1] as SpacingKey];
    } else if (paddingTokens.length === 4) {
      paddingStyles.paddingTop = theme.spacing[paddingTokens[0] as SpacingKey];
      paddingStyles.paddingRight =
        theme.spacing[paddingTokens[1] as SpacingKey];
      paddingStyles.paddingBottom =
        theme.spacing[paddingTokens[2] as SpacingKey];
      paddingStyles.paddingLeft = theme.spacing[paddingTokens[3] as SpacingKey];
    }
    return paddingStyles;
  }, [padding, theme]);
  return (
    <View
      ref={ref}
      style={[
        {
          gap: calculateGap(),
        },
        full && { flex: 1 },
        overflow && {
          overflow: overflow.toLowerCase() as FlexStyle["overflow"],
        },
        align && configureAlign(),
        padding && ConfigurePadding(),
        style,
      ]}
      {...rest}
    >
      {children}
    </View>
  );
});
