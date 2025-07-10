// import React, { useEffect, useRef } from "react";
// import styled from "styled-components";

// import { ContentArea } from "./ContentArea";
// import { FloatArea } from "./FloatArea";
// import { Title } from "./FooterTitle";
// import { FooterProvider, useFooterContext } from "./footerContext";

// interface FooterProps {
//   children?: React.ReactNode;
//   fixed?: boolean;
//   fillColor?: string;
//   padding?: number;
//   bottomSpace?: number;
// }

// export function FooterComponent({
//   children,
//   fixed = false,
//   fillColor,
//   padding = 0,
//   bottomSpace,
// }: FooterProps) {
//   return (
//     <FooterProvider>
//       <FooterWithContext
//         fixed={fixed}
//         fillColor={fillColor}
//         padding={padding}
//         bottomSpace={bottomSpace}
//       >
//         {children}
//       </FooterWithContext>
//     </FooterProvider>
//   );
// }

// function FooterWithContext({
//   children,
//   fixed,
//   fillColor,
//   padding,
//   bottomSpace,
// }: FooterProps) {
//   const { setFooterHeight, footerHeight } = useFooterContext();
//   const footerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (footerRef.current) {
//       const height = footerRef.current.offsetHeight;
//       setFooterHeight(height);
//     }
//   }, [children]);

//   const childrenArray = React.Children.toArray(children);

//   const FloatAreas = childrenArray.filter(
//     (child: any) => child.type === FloatArea
//   );

//   const regularChildren = childrenArray.filter(
//     (child: any) => child.type !== FloatArea
//   );

//   return (
//     <>
//       {fixed && <AntiFooter style={{ height: footerHeight }} />}

//       {FloatAreas}

//       <FooterContainer
//         ref={footerRef}
//         $fixed={!!fixed}
//         $fillColor={fillColor}
//         $padding={padding ?? 0}
//         $bottomSpace={bottomSpace ?? padding ?? 0}
//       >
//         {regularChildren}
//       </FooterContainer>
//     </>
//   );
// }

// export const WebFooter = Object.assign(FooterComponent, {
//   FloatArea,
//   Title,
//   ContentArea,
// });

// const AntiFooter = styled.div`
//   width: 100%;
// `;

// const FooterContainer = styled.div<{
//   $fixed: boolean;
//   $fillColor?: string;
//   $padding: number;
//   $bottomSpace: number;
// }>`
//   position: ${({ $fixed }) => ($fixed ? "fixed" : "relative")};
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   padding: ${({ $padding }) => `${$padding}px`};
//   padding-bottom: ${({ $bottomSpace }) => `${$bottomSpace}px`};
//   background-color: ${({ $fillColor }) => $fillColor || "transparent"};
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-around;
//   z-index: 1000;
// `;
