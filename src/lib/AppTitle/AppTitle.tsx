import React, { ReactElement } from "react";
import styled from "styled-components";
import Flex from "../../global-components/Flex";
import AppLogo from "../AppLogo/AppLogo";
import { defaultTheme } from "../../Service/defaultTheme";

export interface AppTitleProps {
  app_name: string;
  auto_media?: boolean;
  app_logo?: ReactElement;
  logo_path?: string;
}

const StyledAppName = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  color: var(--black);

  @media ${(props) => props?.theme?.media?.phone || defaultTheme.media.phone} {
    font-size: 14px;
  }
`;

function AppTitle(props: AppTitleProps) {
  return (
    <Flex gap="20px" align="center">
      <AppLogo {...props} />
      <StyledAppName>{props?.app_name}</StyledAppName>
    </Flex>
  );
}

export default AppTitle;
