import React, { FC } from "react";
import styled from "styled-components";

type Props = {
  children: any;
  direction?: string;
  align?: string;
  justify?: string;
  margin?: string;
  padding?: string;
  gap?: string;
  width?: string;
  cursor?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const Flex: FC<Props> = ({ ...props }) => {
  return (
    <div {...props} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

const StyledFlex = styled(Flex)`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "stretch"};
  justify-content: ${(props) => props.justify || "stretch"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  gap: ${(props) => props.gap || "0"};
  width: ${(props) => props.width || "auto"};
  cursor: ${(props) => props.cursor || "auto"};
`;

export default StyledFlex;
