import { styled } from "styled-components";
import { ViewBase } from "../ViewBase";

interface LayoutProps {
  children: React.ReactNode;
}

export function Main({ children }: LayoutProps) {
  return <PageWrapper gap="NONE">{children}</PageWrapper>;
}

const PageWrapper = styled(ViewBase)`
  width: 100%;
  max-width: 73.5rem;
  flex-direction: column;
  margin: 0 auto;
  position: relative;
  padding: 0px 4px 12px 4px;
  height: 100%;
`;
