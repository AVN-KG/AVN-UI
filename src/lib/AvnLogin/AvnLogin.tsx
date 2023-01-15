import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Flex from "../../global-components/Flex";
import AppsMenu from "../AppsMenu/AppsMenu";
import { InputErrorIcon, LockIcon, UserIcon } from "../icons/icons";
import { MainLogoIcon } from "../icons/logo";
import LangSwitch from "../LangSwitch/LangSwitch";
import { defaultTheme } from "../../Service/defaultTheme";

export interface Types {
  authFunc: Function;
  appVersion?: string;
  orgName?: string;
  orgLogoPath?: string;
  loginLength?: number;
  passwordLength?: number;
}

function AvnLogin({
  authFunc,
  orgName,
  orgLogoPath,
  loginLength = 0,
  passwordLength = 0,
  appVersion = "© 2022 App from AVN. v1.0.0",
}: Types) {
  const [unLock, setUnLock] = useState<boolean>(false);
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [authDisable, setAuthDisable] = useState<{
    password: boolean;
    login: boolean;
  }>({
    password: false,
    login: false,
  });

  useEffect(() => {}, []);

  window.onload = function () {
    console.log(1);
    hideAddressBar();

    window.addEventListener(
      "orientationchange",
      function () {
        hideAddressBar();
      },
      false
    );
  };

  function hideAddressBar() {
    setTimeout(function () {
      document.body.style.height = window.outerHeight + "px";
      setTimeout(function () {
        window.scrollTo(0, 1);
      }, 10000);
    }, 1000);
    return false;
  }

  const handleUnlocked = () => {
    setUnLock(!unLock);
  };

  function changeLogin(event: React.ChangeEvent<HTMLInputElement>) {
    setLogin(event.target.value);
  }

  function changePassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  const checkAuthLength = (): boolean => {
    let loginCheck = false;
    let pswCheck = false;

    if (login.length < loginLength) {
      loginCheck = true;
    }
    if (password.length < passwordLength) {
      pswCheck = true;
    }

    if (loginCheck || pswCheck) {
      setAuthDisable({ ...authDisable, login: loginCheck, password: pswCheck });
      return true;
    } else {
      setAuthDisable({ ...authDisable, login: loginCheck, password: pswCheck });
      return false;
    }
  };

  const handleAuthReq = () => {
    if (checkAuthLength()) return;
    authFunc();
  };

  return (
    <StyledAvnLogin>
      <StyledAppsMenu>
        <MainLogoIcon />
        <Flex gap="5px" align="center">
          <LangSwitch themeColor={"white"} />
          <AppsMenu menuIconColor={"white"} />
        </Flex>
      </StyledAppsMenu>
      <StyledLeftBG>
        <StyledLeftContent>
          <StyledLeftP>Добро пожаловать в информационную систему</StyledLeftP>
          <StyledLogoContain>
            {orgLogoPath ? (
              <img src={orgLogoPath} alt="organization logo" />
            ) : (
              <MainLogoIcon />
            )}
          </StyledLogoContain>
          <StyledTitle>{orgName}</StyledTitle>
          <StyledAuthContainer>
            <Flex gap="24px" direction="column" width="100%" align="center">
              <StyledAuthInput>
                <StyledLabel>Логин</StyledLabel>
                <StyledInputContainer
                  invalid={authDisable.login && authDisable.login}
                >
                  <StyledInputs
                    type="text"
                    placeholder="Введите логин"
                    onChange={changeLogin}
                    value={login}
                  />
                  <UserIcon color={"var(--blue_gray)"} />
                </StyledInputContainer>
                {authDisable.login ? (
                  <StyledWarning>
                    <InputErrorIcon />
                    <span>
                      Логин не может быть меньше {loginLength} симоволов
                    </span>
                  </StyledWarning>
                ) : null}
              </StyledAuthInput>
              <StyledAuthInput>
                <StyledLabel>Пароль</StyledLabel>
                <StyledInputContainer
                  invalid={authDisable.password && authDisable.password}
                >
                  <StyledInputs
                    type={unLock ? "text" : "password"}
                    placeholder="Введите пароль"
                    onChange={changePassword}
                    value={password}
                  />
                  <LockIcon
                    unlock={unLock ? true : false}
                    color={"var(--blue_gray)"}
                    func={handleUnlocked}
                  />
                </StyledInputContainer>
                {authDisable.password ? (
                  <StyledWarning>
                    <InputErrorIcon />
                    <span>
                      Пароль не может быть меньше {passwordLength} симоволов
                    </span>
                  </StyledWarning>
                ) : null}
              </StyledAuthInput>
            </Flex>
            <StyledAuthBtn
              disabled={!login.length || !password.length}
              onClick={handleAuthReq}
            >
              Войти
            </StyledAuthBtn>
          </StyledAuthContainer>
        </StyledLeftContent>
      </StyledLeftBG>
      <StyledRiteBG>
        <StyledRiteText>
          <StyledSimpleTitle>
            <StyledAvnLogo>
              <MainLogoIcon white />
            </StyledAvnLogo>
            <StyledParagraph>Простые решения для сложных задач</StyledParagraph>
          </StyledSimpleTitle>
        </StyledRiteText>
      </StyledRiteBG>
      <StyledAppVersion>{appVersion}</StyledAppVersion>
    </StyledAvnLogin>
  );
}

const StyledAvnLogin = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: grid;
  grid-template-columns: minmax(650px, 1fr) minmax(360px, 1fr);
  align-items: center;
  background-image: var(--opacity_gradient), url("bg_login.jpg");
  background-size: 100%;
  overflow: hidden;

  @media ${(props) =>
      props?.theme?.media?.laptop || defaultTheme.media.laptop} {
    grid-template-columns: auto;
    grid-template-rows: minmax(20%, 1fr) minmax(80%, 1fr);
    width: 100vw;
    max-height: 100vh;
    min-height: auto;
  }

  @media (max-height: 500px) {
    transition: 0.3s ease-out;
    height: 100%;
    grid-template-rows: minmax(0, 1fr) minmax(100%, 1fr);
  }

  @keyframes leftTranslate {
    0% {
      transform: translateX(-250%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes opacityShow {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes rightTranslate {
    0% {
      transform: translateX(250%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes topTranslate {
    0% {
      transform: translateY(-500%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes bottomTranslate {
    0% {
      transform: translateY(250%);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

const StyledAppsMenu = styled.div`
  top: 0;
  width: 100%;
  position: absolute;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 5;

  svg {
    animation: topTranslate 1s forwards;
  }

  div {
    :nth-child(1) {
      animation: topTranslate 0.5s forwards;
    }
    :nth-child(2) {
      animation: topTranslate 1s forwards;
    }
  }

  ul {
    right: -20px !important;
  }
`;

const StyledLogoContain = styled.div`
  display: flex;
  justify-content: center;
  max-height: 90px;
  max-width: 200px;
  height: 100%;
  width: 100%;
  animation: leftTranslate 1s forwards;

  svg {
    max-height: 90px;
    height: 100%;
    object-fit: cover;
  }

  img {
    max-height: 90px;
    height: 100%;
    object-fit: cover;
  }

  @media ${(props) =>
      props?.theme?.media?.laptop || defaultTheme.media.laptop} {
    animation: bottomTranslate 1s forwards;
  }
`;

const StyledSimpleTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 28px;
  animation: leftTranslate 1.3s ease-in-out forwards;

  div:nth-child(1) {
    animation: leftTranslate 1.5s ease-in-out forwards;
  }
  p:nth-child(2) {
    animation: leftTranslate 1.8s ease-in-out forwards;
  }

  @media ${(props) =>
      props?.theme?.media?.laptop || defaultTheme.media.laptop} {
    flex-direction: row;
    animation: none;

    div:nth-child(1) {
      animation: leftTranslate 0.7s ease-in-out forwards;
    }
    p:nth-child(2) {
      animation: rightTranslate 0.7s ease-in-out forwards;
    }
  }

  @media (max-width: 375px) {
    gap: 10px;
  }
`;

const StyledLeftBG = styled.div`
  width: 100%;
  background-image: url("exclude_right.svg");
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  -webkit-transition: 0.15s ease-out;
  transition: 0.15s ease-out;
  z-index: 1;
  animation: leftTranslate 1s forwards;

  @media ${(props) =>
      props?.theme?.media?.laptop || defaultTheme.media.laptop} {
    width: 100%;
    height: 100%;
    background-image: url("exclude_top.svg");
    background-size: cover;
    background-position: top;
    order: 2;
    animation: bottomTranslate 1s forwards;
  }
`;

const StyledLeftContent = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  color: var(--blue_gray);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;

  @media ${(props) =>
      props?.theme?.media?.laptop || defaultTheme.media.laptop} {
    height: initial;
    justify-content: start;
    padding: 0 15px;
    padding-top: 70px;
    gap: 20px;
  }

  @media (max-width: 375px) {
    padding-top: 45px;
  }
`;

const StyledAuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  align-items: center;
  gap: 40px;

  /* @media ${(props) =>
    props?.theme?.media?.tablet || defaultTheme.media.tablet} {
    padding: 40px;
    background: var(--blured);
    border-radius: 10px;
    border-top: 1px solid var(--white);
    border-bottom: 1px solid var(--white);
  } */
`;

const StyledAuthInput = styled.div`
  max-width: 400px;
  min-width: 200px;
  width: 100%;
  display: grid;
  gap: 5px;
  text-align: left;
  animation: leftTranslate 1.4s forwards;

  @media ${(props) =>
      props?.theme?.media?.laptop || defaultTheme.media.laptop} {
    animation: bottomTranslate 1.4s forwards;
  }
`;

const StyledInputContainer = styled.div<{ invalid?: boolean }>`
  padding: 15px 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  border: 2px solid
    ${(props) => (props.invalid ? "var(--red)" : "var(--stroke)")};
  border-radius: 10px;
  transition: ${(props) =>
    props?.theme?.theme?.transition || defaultTheme.theme.transition};

  svg {
    max-width: 22px;
    width: 100%;
    max-height: 22px;
    object-fit: cover;
  }

  :focus-within {
    border-color: var(--main_color);
  }
`;

const StyledInputs = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: var(--black);
  background: none;
  ::placeholder {
    color: var(--blue_gray);
  }
`;

const StyledWarning = styled.div`
  display: flex;
  gap: 8px;

  svg {
    max-width: 14px;
    max-height: 14px;
    width: 100%;
    object-fit: cover;
  }
  span {
    font-weight: 400;
    font-size: 11px;
    line-height: 15px;
    color: var(--red);
  }
`;

const StyledAuthBtn = styled.button<{ disabled?: Boolean }>`
  animation: leftTranslate 1.5s forwards;
  cursor: pointer;
  border: none;
  padding: 17px 35px;
  border-radius: 10px;
  max-width: 400px;
  width: 100%;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  /* transition: ${(p) => p.theme.theme.transition}; */
  color: var(--white);
  background: var(--main_color);
  :hover {
    background: var(--opacity_gradient);
  }

  :focus {
    background: ${(p) => (p.disabled ? "var(--stroke)" : "var(--main_color)")};
    box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.25),
      inset 0px -2px 4px rgba(255, 255, 255, 0.25);
  }

  @media ${(props) =>
      props?.theme?.media?.laptop || defaultTheme.media.laptop} {
    animation: bottomTranslate 1.5s forwards;
  }
`;

const StyledLabel = styled.label`
  color: var(--blue_gray);
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;

  @media ${(props) =>
      props?.theme?.media?.laptop || defaultTheme.media.laptop} {
    display: none;
  }
`;

const StyledTitle = styled.h3`
  max-width: 550px;
  text-align: center;
  font-weight: 700;
  font-size: 21px;
  line-height: 29px;
  letter-spacing: 0.005em;
  animation: leftTranslate 1.3s forwards;

  @media ${(props) =>
      props?.theme?.media?.laptop || defaultTheme.media.laptop} {
    max-width: 450px;
    font-size: 18px;
    line-height: 25px;
    animation: bottomTranslate 1.3s forwards;
  }
`;

const StyledLeftP = styled.p`
  width: 225px;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.005em;
  animation: leftTranslate 1s forwards;

  @media ${(props) => props?.theme?.media?.laptop || defaultTheme.media.laptop} {
    animation: bottomTranslate 1s forwards;
  }
`;

const StyledRiteBG = styled.div`
  margin-left: -150px;
  min-height: 100vh;
  height: 100%;
  background-image: var(--opacity_gradient), url("bg_login.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: ${(props) =>
    props?.theme?.theme?.transition || defaultTheme.theme.transition};
  animation: opacityShow 2s forwards;
  visibility: visible;
  transition: 0.3s ease;

  @media ${(props) => props?.theme?.media?.laptop || defaultTheme.media.laptop} {
    margin-left: 0;
    min-height: 95vh;
  }

  @media (max-height: 500px) {
    visibility: hidden;
  }
`;

const StyledRiteText = styled.div`
  padding-left: 120px;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: 0;
  animation: opacityShow 1s ease forwards;
  transition: ${(props) =>
    props?.theme?.theme?.transition || defaultTheme.theme.transition};

  @media ${(props) => props?.theme?.media?.laptop || defaultTheme.media.laptop} {
    padding-left: 0;
  }
`;

const StyledAvnLogo = styled.div`
  max-width: 165px;
  max-height: 60px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  svg {
    width: 165px;
    height: 60px;
    object-fit: cover;
  }

  @media ${(props) => props?.theme?.media?.laptop|| defaultTheme.media.laptop} {
    max-height: 40px;
    svg {
      height: 40px;
    }
  }
`;

const StyledParagraph = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: var(--white);

  @media ${(props) => props?.theme?.media?.laptop|| defaultTheme.media.laptop} {
    max-width: 150px;
  }
`;

const StyledAppVersion = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-weight: 500;
  font-size: 10px;
  line-height: 10px;
  color: var(--white);
  transition: ${(props) => props?.theme?.theme?.transition|| defaultTheme.theme.transition};
  animation: opacityShow 2s ease-in-out forwards;

  @media ${(props) => props?.theme?.media?.laptop|| defaultTheme.media.laptop} {
    width: 100%;
    z-index: 1;
    bottom: 10px;
    text-align: center;
    color: var(--main_color);
    font-size: 9px;
    line-height: 9px;
    right: 0;
    letter-spacing: 0.1px;
    animation: bottomTranslate 0.3s ease-in-out forwards;
  }

  @media (max-height: 500px) {
    display: none;
  }
`;

export default AvnLogin;
