import React from "react";
import styled from "styled-components";
import Flex from "../../global-components/Flex";
import AppTitle from "../AppTitle/AppTitle";
import AvatarAppsContainer from "../AvatarAppsContainer/AvatarAppsContainer";
import { BurgerIcon } from "../icons/icons";
import LangSwitch from "../LangSwitch/LangSwitch";
import Navigation from "../Navigation/Navigation";
import { defaultTheme } from "../../Service/defaultTheme";

function Navbar() {
  return (
    <StyledNavbar>
      <Flex justify="space-between" gap="10px" padding="0px 15px" width="100%">
        <Flex gap="10px" align="center">
          <Flex gap="20px" align="center">
            <StyledBurger>
              <BurgerIcon />
            </StyledBurger>
            <AppTitle app_name="Название приложения" auto_media />
          </Flex>
          <ShowNavigation>
            <Navigation />
          </ShowNavigation>
        </Flex>
        <Flex gap="20px" align="center">
          <StyledLangSwitch>
            <LangSwitch />
          </StyledLangSwitch>
          <AvatarAppsContainer auto_media />
        </Flex>
      </Flex>
    </StyledNavbar>
  );
}

const StyledLangSwitch = styled.div`
  @media ${(props) =>
      props?.theme?.media?.tablet || defaultTheme.media.tablet} {
    display: none;
  }
`;

const StyledNavbar = styled.div`
  width: 100%;
  background: var(--white);
  border-bottom: 1px solid #e3e8ef;
  display: flex;
  align-items: center;
  max-height: ${(props) =>
    props?.theme?.theme?.header_height || defaultTheme.theme.header_height};
  min-height: ${(props) =>
    props?.theme?.theme?.header_height || defaultTheme.theme.header_height};

  padding: 0px 5px;
  transition: ${(props) =>
    props?.theme?.theme?.transition || defaultTheme.theme.transition};

  @media ${(props) =>
      props?.theme?.media?.laptop || defaultTheme.media.laptop} {
    padding: 0px;
  }
`;

const StyledBurger = styled.div`
  display: none;
  max-width: 20px;
  max-height: 20px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
    object-fit: cover;
  }

  @media ${(props) =>
      props?.theme?.media?.laptop || defaultTheme.media.laptop} {
    display: block;
  }
`;

const ShowNavigation = styled.div`
  @media ${(props) =>
      props?.theme?.media?.tablet || defaultTheme.media.tablet} {
    display: none;
  }
`;

export default Navbar;
