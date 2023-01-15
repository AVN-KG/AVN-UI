import React, { ReactElement, useRef, useState } from "react";
import styled from "styled-components";
import { ChevronDownIcon, SbIndicatorIcon } from "../icons/icons";
import MenuLiProps from "./types";
import { defaultTheme } from "../../Service/defaultTheme";

const MenuLi = ({
  name,
  path,
  count,
  icon,
  disableIndicator,
  subLinks,
  iconPath,
}: MenuLiProps) => {
  const navRef = useRef<HTMLDivElement>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<boolean>(false);
  const handleNavigation = (path: string | undefined) => {
    if (!subLinks?.length) {
      console.log(path);
    } else {
      handleSubMenu();
    }
  };

  const handleSubMenu = () => {
    setActiveSubMenu(!activeSubMenu);
  };

  return (
    <StMenuLi>
      {!disableIndicator && (
        <StyledSbIndicator>
          <SbIndicatorIcon />
        </StyledSbIndicator>
      )}
      <StLink onClick={() => handleNavigation(path)}>
        <StIconContainer>
          {iconPath ? <img src={iconPath} alt="name" /> : icon}
        </StIconContainer>
        <StTextContainer>
          <StParagraph>{name}</StParagraph>
          <StRightCon>
            {subLinks?.length ? (
              <StChevronCon active={activeSubMenu} onClick={handleSubMenu}>
                <ChevronDownIcon />
              </StChevronCon>
            ) : null}
            {count && count > 0 ? <StCounter>{count}</StCounter> : null}
          </StRightCon>
        </StTextContainer>
      </StLink>
      {subLinks?.length ? (
        <StSubMenu
          active={activeSubMenu}
          menuHeight={navRef.current?.clientHeight}
        >
          <div ref={navRef}>
            {subLinks.map((li, index) => {
              return (
                <StLink onClick={() => handleNavigation(li.path)} key={index}>
                  <StIconContainer></StIconContainer>
                  <StTextContainer>
                    <StParagraph>{li.name}</StParagraph>
                    <StRightCon>
                      {li.count && li.count > 0 ? (
                        <StCounter>{li.count}</StCounter>
                      ) : null}
                    </StRightCon>
                  </StTextContainer>
                </StLink>
              );
            })}
          </div>
        </StSubMenu>
      ) : null}
    </StMenuLi>
  );
};

export const StSubMenu = styled.div<{ active: boolean; menuHeight?: number }>`
  padding-top: ${(props) => (props.active ? "7px" : "0px")};
  height: ${(props) =>
    props.active ? `calc(${props.menuHeight}px + 7px)` : "0px"};
  transition: all 0.2s ease-out;
  overflow: hidden;
`;

const StParagraph = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  color: var(--blue_gray);
  white-space: nowrap;
`;

const StRightCon = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const StChevronCon = styled.div<{ active: boolean }>`
  height: 20px;
  width: 20px;
  svg {
    transition: 0.2s ease-out;
    transform: ${(props) => props.active && "scale(1, -1)"};
  }
`;

const StCounter = styled.div`
  width: 24px;
  height: 24px;
  background: var(--blue_gray);
  border-radius: 4px;
  font-weight: 700;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
`;

export const StTextContainer = styled.div`
  padding-left: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.2s ease-out;
  width: 0px;
  /* overflow: hidden; */
`;

const StIconContainer = styled.div`
  max-width: 20px;
  max-height: 20px;
  width: 100%;
  height: 100%;
  svg {
    width: 20px;
    height: 100%;
    object-fit: cover;
  }

  img {
    width: 20px;
    height: 100%;
    object-fit: cover;
    filter: invert(49%) sepia(32%) saturate(315%) hue-rotate(176deg)
      brightness(84%) contrast(87%);
  }
`;

const StLink = styled.div`
  padding: 4px 0px;
  display: flex;
  gap: 12px;
  align-items: center;
  cursor: pointer;
  transition: 0.2s ease-out;

  :active ${StParagraph}, :hover ${StParagraph} {
    color: var(--main_color);
    transition: 0.2s ease-out;
  }

  :active ${StIconContainer} svg path,
  :hover ${StIconContainer} svg path {
    fill: var(--main_color);
    transition: 0.2s ease-out;
  }

  :active ${StIconContainer} img,
  :hover ${StIconContainer} img {
    filter: invert(52%) sepia(80%) saturate(6180%) hue-rotate(214deg)
      brightness(98%) contrast(105%);
  }

  :active ${StRightCon}, :hover ${StRightCon} {
    svg path {
      fill: var(--main_color);
      transition: 0.2s ease-out;
    }

    ${StCounter} {
      background: var(--main_color);
      transition: 0.2s ease-out;
    }
  }
`;

const StyledSbIndicator = styled.div`
  left: -10px;
  width: 8px;
  height: 28px;
  position: absolute;
  transition: ${(props) => props?.theme?.theme?.transition || defaultTheme.theme.transition};

  svg {
    width: 8px;
    height: 100%;
    object-fit: cover;
  }
`;

export const StMenuLi = styled.div`
  padding: 10px 20px;
  position: relative;
  max-height: 48px;
  overflow: hidden;
  transition: 0.2s ease-out;

  :active ${StyledSbIndicator} {
    left: 0;
    transition: ${(props) =>  props?.theme?.theme?.transition || defaultTheme.theme.transition};
  }
`;

export default MenuLi;
