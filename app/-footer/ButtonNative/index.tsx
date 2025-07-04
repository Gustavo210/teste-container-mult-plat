import styled, { css } from "styled-components/native";

interface ButtonNativeProps {
  children?: React.ReactNode;
}

export function ButtonNative(props: ButtonNativeProps) {
  return <DefaultButton>{props.children}</DefaultButton>;
}

const DefaultButton = styled.TouchableHighlight`
  background-color: ${({ theme }) => theme.colors.button.default};
  min-height: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 15px;
  background-color: #007bff;
  flex: 1;
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
    `}
`;
