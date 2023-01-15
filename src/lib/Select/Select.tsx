import React, { ReactElement } from "react";
import styled from "styled-components";
import Flex from "../../global-components/Flex";
import AppLogo from "../AppLogo/AppLogo";
import SelectProps from "./types";
import { defaultTheme } from "../../Service/defaultTheme";

const StyledAppName = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  color: var(--black);

  @media ${(props) => props?.theme?.media?.phone || defaultTheme.media.phone} {
    font-size: 14px;
  }
`;

function Select() {
  return (
    <Flex gap="20px" align="center">
      SELECT
    </Flex>
  );
}

export default Select;
