import { css } from "styled-components";

export function getAlignmentStyles($align: string, $noFlex: boolean) {
  if (!$align) return "";

  if ($noFlex) {
    const flexValues = {
      LEFT: "flex-start",
      CENTER: "center",
      RIGHT: "flex-end",
      SPACE_BETWEEN: "space-between",
    };
    const value = flexValues[$align];

    return value
      ? css`
          justify-content: ${value};
        `
      : "";
  }

  const marginStyles = {
    LEFT: css`
      margin-right: auto;
    `,
    CENTER: css`
      margin-left: auto;
      margin-right: auto;
    `,
    RIGHT: css`
      margin-left: auto;
    `,
  };
  return marginStyles[$align] || "";
}
