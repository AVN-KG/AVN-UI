import styled from "styled-components";
import { ElementType } from "react";
import { PlusIcon } from "../icons/icons";
import ButtonProps from "./types";
import { defaultTheme } from "../../Service/defaultTheme";

export default function Button<T extends ElementType = "button">({
  small,
  big,
  buttonType,
  fullScreen,
  disabled,
  text,
  alignIcon,
  func,
  icon,
  iconPath,
  ...rest
}: ButtonProps<T>): JSX.Element {
  return (
    <StyledButton
      size={small ? "small" : big ? "big" : "normal"}
      btnType={
        buttonType === "outline"
          ? "outline"
          : buttonType === "link"
          ? "link"
          : buttonType === "icon"
          ? "icon"
          : "normal"
      }
      disabled={disabled}
      fullScreen={fullScreen}
      onClick={func ? () => func() : undefined}
      {...rest}
    >
      <StyledContent
        size={small ? "small" : big ? "big" : "normal"}
        alignIcon={buttonType === "icon" ? alignIcon : "right"}
      >
        {text}
        {buttonType === "icon" &&
          (icon ? (
            icon
          ) : iconPath ? (
            <img src={iconPath} alt="btn icon" />
          ) : (
            <PlusIcon color={disabled ? "var(--stroke)" : "var(--white)"} />
          ))}
      </StyledContent>
    </StyledButton>
  );
}

const StyledButton = styled.button<{
  size: string;
  btnType: string;
  fullScreen?: boolean;
}>`
  width: ${(props) => (props.fullScreen ? "100%" : "fit-content")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  outline: none;
  border-radius: 40px;
  border: none;
  cursor: pointer;
  transition: ${(props) =>
    props?.theme?.theme?.transition || defaultTheme.theme.transition};

  ${(props) =>
    props.size === "small"
      ? `padding: 4px 16px; 
         font-size: 12px; 
         line-height: 16px;`
      : props.size === "big"
      ? ` padding: 10.5px 24px; 
          font-size: 14px; 
          line-height: 19px;`
      : ` padding: 10.5px 24px; 
          font-size: 14px; 
          line-height: 19px;
  `};

  ${(props) =>
    props.btnType === "outline"
      ? `color: var(--main_color);
         background: none;
         border: 1px solid var(--main_color);

         :hover {
            background: linear-gradient(180deg, #2869FE 0%, #023DC4 97.4%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            box-shadow: 0px 0px 10px rgba(40, 105, 254, 0.5);
         }

         :disabled:hover {
            color: var(--blue_gray);
            background: var(--stroke);
            -webkit-background-clip:  var(--blue_gray);
            -webkit-text-fill-color:var(--blue_gray);
            background-clip:var(--blue_gray);
            text-fill-color: var(--blue_gray);
         }
         
          :active {
            box-shadow: inset 0px 1px 4px rgba(0, 0, 0, 0.25), 
                        inset 0px -1px 4px rgba(255, 255, 255, 0.25);
          }
        `
      : props.btnType === "link"
      ? `color: var(--main_color);
         background: none;
         padding: 0;
         border-radius: 0;

         :hover {
            background: linear-gradient(180deg, #2869FE 0%, #023DC4 97.4%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
         }

         :disabled:hover {
            color: var(--blue_gray);
            background: none;
            -webkit-background-clip:  var(--blue_gray);
            -webkit-text-fill-color:var(--blue_gray);
            background-clip:var(--blue_gray);
            text-fill-color: var(--blue_gray);
         }
         
          :active {
            color: var(--main_color);
          }
        `
      : `
         color: var(--white);
         background: var(--default_gradient);
         
        :hover {
          background: var(--main_gradient);
        }

        :active {
          background: var(--default_gradient);
          box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.25),
            inset 0px -2px 4px rgba(255, 255, 255, 0.25);
        } 
  `};

  ${(props) =>
    props.btnType === "icon"
      ? `
        :disabled,
        :disabled:hover,
        :disabled:active {
          background: var(--white);
          box-shadow: none;
          color: var(--stroke);
          border: 1px solid var(--stroke);
        }
        `
      : props.btnType !== "link"
      ? `
        :disabled,
        :disabled:hover,
        :disabled:active {
          background: var(--stroke);
          box-shadow: none;
          color: var(--blue_gray);
          border: none;
        }`
      : `
        :disabled,
        :disabled:hover,
        :disabled:active {
          background: none;
          box-shadow: none;
          color: var(--blue_gray);
          border: none;
        }
  `}
`;

const StyledContent = styled.div<{ size: string; alignIcon?: string }>`
  display: flex;
  align-items: center;
  ${(props) =>
    props.alignIcon === "left"
      ? `flex-direction: row-reverse;`
      : `flex-direction: row;`};

  gap: ${(props) =>
    props.size === "small" ? "6px" : props.size === "big" ? "10px" : "10px"};

  svg {
    height: ${(props) =>
      props.size === "small" ? "9px" : props.size === "big" ? "12px" : "12px"};
    object-fit: cover;
  }
  img {
    height: ${(props) =>
      props.size === "small" ? "9px" : props.size === "big" ? "12px" : "12px"};
    object-fit: cover;
  }
`;
