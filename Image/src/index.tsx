import styled, { DefaultTheme, css } from "styled-components";

import LazyImage from "@mobilestockweb/lazy-image";

interface ImageProps {
  borderRadius?: Uppercase<keyof DefaultTheme["borderRadius"] & string>;
  size: Uppercase<keyof DefaultTheme["sizeImage"] & string>;
  src: string;
  alt: string;
}
export function Img(props: ImageProps) {
  return (
    <Imagem
      $radiusKey={props.borderRadius || "DEFAULT"}
      $widthKey={props.size}
      src={props.src}
      alt={props.alt}
    />
  );
}

const Imagem = styled(LazyImage)<{
  $widthKey: ImageProps["size"];
  $radiusKey?: ImageProps["borderRadius"];
}>`
  ${({ $widthKey, $radiusKey, theme }) => css`
    ${$radiusKey &&
    css`
      border-radius: ${theme.borderRadius[$radiusKey.toLowerCase()]};
    `}

    ${$widthKey &&
    css`
      width: ${theme.sizeImage[$widthKey.toLowerCase()]};
      height: ${theme.sizeImage[$widthKey.toLowerCase()]};
    `}
  `}
`;
