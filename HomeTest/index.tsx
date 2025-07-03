import styled, { css } from "styled-components";

type Props = {
  children: React.ReactNode;
  direction?: "row" | "column";
  aligh?: "center" | "start" | "end";
  size?: number;
  debug?: boolean | string;
};

export function HomeTest({
  children,
  direction = "row",
  size,
  debug = false,
  aligh,
}: Props) {
  if (direction === "row") {
    return (
      <RowContainer size={size} debug={debug} aligh={aligh}>
        {children}
      </RowContainer>
    );
  }

  return (
    <ColumnContainer aligh={aligh} debug={debug}>
      {children}
    </ColumnContainer>
  );
}

const GAP_PX = 16;
const TOTAL_COLUMNS = 12;

const RowContainer = styled.div<{
  size?: number;
  debug?: boolean | string;
  aligh?: string;
}>`
  display: flex;
  flex-direction: row;
  gap: ${GAP_PX}px;

  ${({ aligh }) => {
    switch (aligh) {
      case "center":
        return "justify-content: center;";
      case "start":
        return "justify-content: flex-start;";
      case "end":
        return "justify-content: flex-end;";
      default:
        return "";
    }
  }}

  ${({ debug }) =>
    typeof debug === "boolean" && debug
      ? css`
          border: 1px solid red;
        `
      : debug
      ? css`
          border: 1px solid ${debug};
        `
      : ""}
  ${({ size }) =>
    size
      ? `
    flex: none;
    width: calc(
      (100% - ${(TOTAL_COLUMNS - 1) * GAP_PX}px) / ${TOTAL_COLUMNS} * ${size} +
      ${(size - 1) * GAP_PX}px
    );
  `
      : `
    flex: 1;
  `}
`;

const ColumnContainer = styled.div<{
  debug?: boolean | string;
  aligh?: string;
}>`
  display: flex;
  flex-direction: column;
  flex: 1;

  ${({ aligh }) => {
    switch (aligh) {
      case "center":
        return "aligh-items: center;";
      case "start":
        return "aligh-items: flex-start;";
      case "end":
        return "aligh-items: flex-end;";
      default:
        return "";
    }
  }}

  ${({ debug }) =>
    typeof debug === "boolean" && debug
      ? css`
          border: 1px solid red;
        `
      : debug
      ? css`
          border: 1px solid ${debug};
        `
      : ""}
`;
