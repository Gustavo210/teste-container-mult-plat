import { ImageSourcePropType } from "react-native";
import styled, { DefaultTheme, css } from "styled-components/native";

interface ImageProps {
  borderRadius?: Uppercase<keyof DefaultTheme["borderRadius"] & string>;
  size: Uppercase<keyof DefaultTheme["size"] & string>;
  src: string | ImageSourcePropType;
  alt: string;
}
export function Img(props: ImageProps) {
  const formattedSource =
    typeof props.src === "string" ? { uri: props.src } : props.src;
  return (
    <Imagem
      $radiusKey={props.borderRadius || "DEFAULT"}
      $widthKey={props.size}
      source={formattedSource}
      alt={props.alt}
    ></Imagem>
  );
}

const Imagem = styled.Image<{
  $widthKey: ImageProps["size"];
  $radiusKey?: ImageProps["borderRadius"];
}>`
  ${({ $widthKey, $radiusKey, theme }) => {
    const key = $widthKey?.toLowerCase();
    const value = theme.size[key];
    const unit = $widthKey === "FULL" ? "%" : "px";

    return css`
      width: ${value}${unit};
      height: ${value}${unit};

      ${$radiusKey &&
      css`
        border-radius: ${theme.borderRadius[$radiusKey.toLowerCase()]};
      `}
    `;
  }}
`;
