import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Flex from "../../global-components/Flex";
import { ChevronRightIcon } from "../icons/icons";

function Navigation() {
  return (
    <Flex gap="10px" align="center">
      <StyledNavPath>
        <ChevronRightIcon />
        <a>appPage</a>
      </StyledNavPath>
      <StyledNavPath activeLink={true}>
        <ChevronRightIcon />
        <a>subpage</a>
      </StyledNavPath>
    </Flex>
  );
}

const StyledNavPath = styled.div<{ activeLink?: Boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  order: 2;
  
  svg {
    width: 14px;
    height: 14px;
    object-fit: cover;
  }

  a {
    cursor: pointer;
    color: ${(props: any) =>
      !props.activeLink ? "var(--blue_gray)" : "var(--main_color)"};
  }
`;

export default Navigation;
