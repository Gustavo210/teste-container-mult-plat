import { View, ViewProps } from "react-native";
import { DefaultTheme, useTheme } from "styled-components";

export interface ViewBaseProps extends ViewProps {
  full?: boolean;
  gap?: Uppercase<keyof DefaultTheme["gaps"] & string>;
}

export function ViewBase({
  children,
  gap,
  full,
  style,
  ...rest
}: ViewBaseProps) {
  const theme = useTheme();
  function calculateGap() {
    if (!gap) return 0;
    const GapTag = gap.toLowerCase() as keyof DefaultTheme["gaps"];
    return Number(theme.gaps[GapTag]);
  }
  return (
    <View
      style={[
        {
          gap: calculateGap(),
        },
        full && { flex: 1 },
        style,
      ]}
      {...rest}
    >
      {children}
    </View>
  );
}
