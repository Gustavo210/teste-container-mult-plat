import { ViewBase, ViewBaseProps } from "../ViewBase";

export function Vertical({ children, ...rest }: ViewBaseProps) {
  return (
    <ViewBase
      style={{
        flexDirection: "column",
      }}
      {...rest}
    >
      {children}
    </ViewBase>
  );
}
