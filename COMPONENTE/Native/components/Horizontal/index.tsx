import { ViewBase, ViewBaseProps } from "../ViewBase";

export function Horizontal({ children, ...rest }: ViewBaseProps) {
  return (
    <ViewBase
      style={{
        flexDirection: "row",
      }}
      {...rest}
    >
      {children}
    </ViewBase>
  );
}
