import React from "react";
import styled from "styled-components";
import { AppTitleProps } from "../AppTitle/AppTitle";
import { MainLogoIcon } from "../icons/logo";
import { defaultTheme } from "../../Service/defaultTheme";

export default function AppLogo(props: AppTitleProps) {
  const { app_logo, logo_path } = props;

  return (
    <StyledAppLogo {...props}>
      {!logo_path && !app_logo ? (
        <MainLogoIcon />
      ) : logo_path ? (
        <img src={logo_path} alt="" />
      ) : (
        app_logo
      )}
    </StyledAppLogo>
  );
}

const StyledAppLogo = styled.div<AppTitleProps>`
  max-width: 42px;
  max-height: 15px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  svg {
    width: 42px;
    height: 15px;
    object-fit: cover;
  }
  img {
    max-height: 15px;
    height: 100%;
    object-fit: cover;
  }

  @media ${(props) => props?.theme?.media?.phone || defaultTheme.media.phone} {
    display: ${(props) => (props.auto_media ? "none" : "block")};
  }
`;
