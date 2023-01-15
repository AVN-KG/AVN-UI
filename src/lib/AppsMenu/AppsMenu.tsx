import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { App2x2Icon, AppsMenuIcon } from "../icons/icons";
import Flex from "../../global-components/Flex";
import { defaultTheme } from "../../Service/defaultTheme";

const apps = [
  { id: 1, name: "WorkPlace", path: "https://workplace.avn.kg/", icon: null },
  { id: 2, name: "AVN 13", path: "https://workplace.avn.kg/", icon: null },
  { id: 3, name: "AVN Visa", path: "https://workplace.avn.kg/", icon: null },
  { id: 4, name: "AVN Campus", path: "https://workplace.avn.kg/", icon: null },
  { id: 5, name: "AVN 11", path: "https://workplace.avn.kg/", icon: null },
  { id: 6, name: "WorkPlace", path: "https://workplace.avn.kg/", icon: null },
  { id: 7, name: "AVN 13", path: "https://workplace.avn.kg/", icon: null },
  { id: 8, name: "AVN Visa", path: "https://workplace.avn.kg/", icon: null },
];

export interface AppsMenuProps {
  auto_media?: boolean;
  menuIconColor?: string;
}

export default function AppsMenu(props: AppsMenuProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [modal, setModal] = useState<boolean>(false);

  const handleShowModal = () => {
    setModal(!modal);
  };

  const handleModalClose = (event: MouseEvent): void => {
    const path = event.composedPath && event.composedPath();
    if (ref.current && !path.includes(ref.current)) {
      setModal(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleModalClose);
  }, []);

  return (
    <StyledAppsMenu ref={ref} {...props}>
      <StyledIconContainer onClick={handleShowModal}>
        <AppsMenuIcon menuIconColor={props.menuIconColor} />
      </StyledIconContainer>
      <StyledAppsContainer modal={modal}>
        {apps.map((list, index) => {
          return (
            <StyledAppItem
              key={list.id}
              onClick={() => setModal(false)}
              href={list.path}
            >
              <StyledAppIcon>
                {list.icon ? (
                  <img
                    src={`${`data:image/jpeg;base64,${list.icon}`}`}
                    alt={list.name}
                  />
                ) : (
                  <App2x2Icon />
                )}
              </StyledAppIcon>
              <StyledAppName>
                {/* <div onClick={() => changeLanguage(list.key, list.title)}> */}
                {list.name}
                {/* </div> */}
              </StyledAppName>
            </StyledAppItem>
          );
        })}
      </StyledAppsContainer>
    </StyledAppsMenu>
  );
}

const StyledAppsMenu = styled.div<AppsMenuProps>`
  /* display: flex;
    align-items: center; */
  @media ${(props) => props?.theme?.media?.phone || defaultTheme.media.phone} {
    display: ${(props) => (props.auto_media ? "none" : "block")};
  }
`;

const StyledIconContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 17px;
  max-height: 17px;
  width: 100%;
  cursor: pointer;
  svg {
    width: 17px;
    height: 17px;
    object-fit: cover;
  }
`;

const StyledAppsContainer = styled.ul<{ modal?: boolean }>`
  max-height: 324px;
  overflow-y: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  opacity: ${(props) => (props.modal ? "1" : "0")};
  visibility: ${(props) => (props.modal ? "visible" : "hidden")};
  top: ${(props) =>
    props?.theme?.theme?.header_height || defaultTheme.theme.header_height};
  right: 0;
  position: absolute;
  padding: 20px;
  background: var(--white);
  box-shadow: 0px 4px 40px 4px rgba(66, 133, 244, 0.1);
  border-radius: 0px 0px 0px 6px;
  transition: ${(props) =>
    props?.theme?.theme?.transition || defaultTheme.theme.transition};
  z-index: ${(props) => (props.modal ? "1" : "-10")};
`;

const StyledAppItem = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 65px;
  text-decoration: none;
  transition: ${(props) =>
    props?.theme?.theme?.transition || defaultTheme.theme.transition};
  cursor: pointer;

  :hover div {
    color: var(--main_color);
  }
`;

const StyledAppIcon = styled.div`
  max-width: 30px;
  max-height: 30px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  img {
    width: 100%;
    /* height: 30px; */
    object-fit: cover;
  }
  svg {
    width: 30px;
    height: 30px;
    object-fit: cover;
  }
`;

const StyledAppName = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: var(--blue_gray);
  text-align: center;
`;
