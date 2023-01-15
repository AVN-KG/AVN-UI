import React, { ReactElement } from "react";
import styled from "styled-components";
import { App2x2Icon, ExitIcon, MoonIcon, SettingsIcon } from "../icons/icons";
import MenuLi, { StMenuLi, StTextContainer } from "../MenuLi/MenuLi";
import SidebarProps from "./types";
import { defaultTheme } from "../../Service/defaultTheme";

export default function Sidebar({
  releaseYear,
  appRelease,
  fixed,
  headerHeight,
  childLinks,
  settingsPath,
}: SidebarProps) {
  const SBheight = headerHeight ? `${headerHeight}px` : undefined;

  return (
    <StyledSidebar fixed={fixed}>
      <StFixed>
        <StMenu fixed={fixed} headerHeight={SBheight}>
          <StTopCon headerHeight={SBheight}>
            {childLinks.map((link, index) => {
              return (
                <MenuLi
                  key={index}
                  name={link.name}
                  icon={link.icon ? link.icon : <App2x2Icon />}
                  path={link.path}
                  iconPath={link.iconPath}
                  count={link.count}
                  subLinks={link.subLinks}
                />
              );
            })}
          </StTopCon>
          <StBottomCon>
            <MenuLi disableIndicator name="Темный режим" icon={<MoonIcon />} />
            <MenuLi
              disableIndicator
              name="Настройки"
              icon={<SettingsIcon />}
              path={settingsPath && settingsPath}
            />
            <MenuLi disableIndicator name="Выход" icon={<ExitIcon />} />
            <Li>
              <StVersion>
                <div>
                  © {releaseYear} <p>{appRelease}</p>
                </div>
              </StVersion>
            </Li>
          </StBottomCon>
        </StMenu>
      </StFixed>
    </StyledSidebar>
  );
}

const StVersion = styled.div`
  position: absolute;
  align-items: center;
  justify-content: center;
  bottom: 0;
  transition: 0.2s ease-out;
  width: 34px;

  div {
    white-space: nowrap;
    font-weight: 500;
    font-size: 9px;
    line-height: 9px;
    letter-spacing: 0.1px;
    color: var(--black);
    display: flex;
    justify-content: center;
    gap: 2px;
    text-align: center;
    transition: 0.2s ease-out;
    p {
      width: 0px;
      overflow: hidden;
      transition: 0.2s ease-out;
    }
  }
`;

const Li = styled.div`
  padding: 10px 14.5px;
  position: relative;
`;

const StBottomCon = styled.div`
  padding-top: 20px;
  border-top: 1px solid var(--stroke);
  display: grid;
  gap: 3px;
`;

const StTopCon = styled.div<{ headerHeight?: string }>`
  max-height: ${(props) =>
    `calc(100vh - 230px - ${
      props.headerHeight
        ? props.headerHeight
        : props?.theme?.theme?.header_height || defaultTheme.theme.header_height
    })`};
  display: grid;
  gap: 3px;
  overflow: hidden;
  overflow-y: auto;
`;

const StMenu = styled.div<{
  fixed?: boolean;
  headerHeight?: string | undefined;
}>`
  width: ${(props) => (props.fixed ? "300px" : "60px")};
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--white);
  transition: 0.2s ease-out;
  min-height: ${(props) =>
    `calc(100vh - ${
      props.headerHeight
        ? props.headerHeight
        : props?.theme?.theme?.header_height || defaultTheme.theme.header_height
    })`};
  border-right: 1px solid var(--stroke);
  box-shadow: 1px 1px 20px rgba(40, 105, 254, 0.06);
  height: 100%;
  overflow: hidden;

  :hover {
    width: 300px;
  }

  ${(props) =>
    !props.fixed
      ? `
      :hover {
        width: 300px;
      }

      :hover ${StMenuLi} {
        max-height: 300px; 
      }

      :hover ${StTextContainer} {
        padding-left: 0px;
        width: 227px;
      }

      :hover ${StVersion} {
        width: 270px;
      }

      :hover ${StVersion} div p {
        width: auto;
      }
      `
      : `
        
      ${StTextContainer},  ${StVersion} {
        padding-left: 0px;
        width: 227px;
      }
      
      ${StVersion} div p {
        width: auto;
      }
  `}
`;

const StFixed = styled.div`
  position: fixed;
  box-shadow: 1px 1px 20px rgba(40, 105, 254, 0.06);
`;

const StyledSidebar = styled.div<{ fixed?: boolean }>`
  width: ${(props) => (props.fixed ? "300px" : "60px")};
  position: relative;
  z-index: 10;
`;
