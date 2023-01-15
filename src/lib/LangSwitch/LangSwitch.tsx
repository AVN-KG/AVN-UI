import React, { RefObject, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Flex from "../../global-components/Flex";
import { ArrowDownIcon } from "../icons/icons";
import { defaultTheme } from "../../Service/defaultTheme";

const languages = [
  { title: "Рус", key: "ru" },
  { title: "Кырг", key: "kg" },
  { title: "En", key: "en" },
];

export interface LangSwitchProps {
  divRef?: RefObject<HTMLDivElement>;
  modal?: Boolean;
  themeColor?: string;
}

function LangSwitch(props: LangSwitchProps) {
  let lang = localStorage.getItem("lang") || "";
  const ref = useRef<HTMLDivElement | null>(null);
  // const { t, i18n } = useTranslation();
  const [modal, setModal] = useState<boolean>(false);
  const [activeLang, setActiveLang] = useState<{ title: string; key: string }>({
    title: "Рус",
    key: "ru",
  });

  useEffect(() => {
    if (lang) {
      const locale = languages.find((x) => x.key === lang);
      setActiveLang(locale || activeLang);
    }
  }, []);

  const changeLanguage = (key: string, title: string) => {
    localStorage.setItem("lang", key);
    setActiveLang({
      title,
      key,
    });
    handleShowModal();
  };

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
    <StyledLSWrap ref={ref}>
      <Flex
        align="center"
        gap="10px"
        cursor="pointer"
        padding="20px"
        onClick={() => handleShowModal()}
      >
        <StyledLangTitle active themeColor={props.themeColor}>
          <div>{activeLang.title}</div>
        </StyledLangTitle>
        <StyledChevron modal={modal}>
          <ArrowDownIcon themeColor={props.themeColor} />
        </StyledChevron>
      </Flex>
      <StyledLangList modal={modal}>
        {languages.map((list, index) => {
          if (activeLang.key !== list.key) {
            return (
              <Flex
                key={index}
                align="center"
                gap="10px"
                cursor="pointer"
                padding="5px"
                onClick={() => changeLanguage(list.key, list.title)}
              >
                <StyledLangTitle>{list.title}</StyledLangTitle>
              </Flex>
            );
          }
        })}
      </StyledLangList>
    </StyledLSWrap>
  );
}

const StyledLSWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLangList = styled.ul<LangSwitchProps>`
  opacity: ${(props) => (props.modal ? "1" : "0")};
  visibility: ${(props) => (props.modal ? "visible" : "hidden")};
  top: ${(props) =>
    `calc(${
      props?.theme?.theme?.header_height || defaultTheme.theme.header_height
    } + 1px)`};
  left: 0;
  position: absolute;
  padding: 15px;
  background: var(--white);
  box-shadow: 0px 4px 40px 4px rgba(66, 133, 244, 0.1);
  border-radius: 0px 0px 4px 4px;
  transition: ${(props) =>
    props?.theme?.theme?.transition || defaultTheme.theme.transition};
  z-index: ${(props) => (props.modal ? "1" : "-10")};
`;

const StyledLangTitle = styled.h3<{ active?: Boolean; themeColor?: string }>`
  color: ${(props) =>
    props.themeColor
      ? props.themeColor
      : props.active
      ? "var(--main_color)"
      : "var(--blue_gray)"};
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  transition: ${(props) =>
    props?.theme?.theme?.transition || defaultTheme.theme.transition};
  & :hover {
    color: ${(props) =>
      props.themeColor ? props.themeColor : "var(--main_color)"};
    transition: ${(props) =>
      props?.theme?.theme?.transition || defaultTheme.theme.transition};
  }
`;

const StyledChevron = styled.div<{ modal?: Boolean }>`
  display: flex;
  svg {
    transition: ${(props) =>
      props?.theme?.theme?.transition || defaultTheme.theme.transition};
    transform: ${(props) => (props.modal ? "scale(1, -1)" : "scale(1, 1)")};
  }
`;

export default LangSwitch;
