import React from "react";
import styled from "styled-components";

export type Props = {
  children: any;
  direction?: string;
  align?: string;
  justify?: string;
  margin?: string;
  padding?: string;
  gap?: string;
};

function HeaderWrapper(props: Props) {
  return <div {...props}>{props.children}</div>;
}

const StyledHeadWrap = styled(HeaderWrapper)`
  display: flex;
  align-items: ${(props) => props.align || "stretch"};
  justify-content: ${(props) => props.justify || "stretch"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  gap: ${(props) => props.gap || "0"};
`;

export default StyledHeadWrap;
