import { DefaultTheme, useTheme } from "styled-components";

export interface ViewBaseProps extends React.HTMLAttributes<HTMLDivElement> {
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
    return theme.gaps[GapTag];
  }
  return (
    <div
      style={{
        display: "flex",
        gap: calculateGap(),
        ...(full && { flex: 1 }),
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
