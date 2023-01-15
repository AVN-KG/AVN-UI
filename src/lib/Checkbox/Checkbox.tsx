import { useEffect, useState } from "react";
import styled from "styled-components";
import { CheckedIcon } from "../icons/icons";
import CheckboxProps, { IconType, PositionType, SizeType } from "./types";

export default function Checkbox(props: CheckboxProps) {
  const {
    label,
    name,
    onChange,
    size = "normal",
    iconType = "success",
    labelPosition = "left",
    disabled,
    checked,
    defaultChecked,
  } = props;
  const [check, setCheck] = useState<boolean>(false);

  useEffect(() => {
    if (checked !== undefined) {
      return setCheck(checked);
    } else if (defaultChecked !== undefined) {
      return setCheck(defaultChecked);
    }
  }, [checked, defaultChecked]);

  const handleCheck = () => {
    if (checked == undefined) {
      if (!disabled) {
        setCheck(!check);
        onChange && onChange({ name: name ? name : "", checked: !check });
      }
    }
  };

  return (
    <StyledCheckbox>
      {label ? <StLabel position={labelPosition}>{label}</StLabel> : null}
      <StCheckContainer
        onClick={handleCheck}
        iconType={iconType}
        checked={check}
        size={size}
        disabled={disabled ? true : false}
      >
        <CheckedIcon iconType={iconType} />
      </StCheckContainer>
    </StyledCheckbox>
  );
}

const StLabel = styled.label<{ position: keyof PositionType }>`
  font-weight: 400;
  font-size: 14px;
  line-height: 125%;
  letter-spacing: 0.005em;
  color: #000;
  order: ${(props) => props.position == "right" && 1};
`;

const StCheckContainer = styled.div<{
  checked: boolean;
  disabled: boolean;
  iconType: keyof IconType;
  size: keyof SizeType;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease-out;
  cursor: ${(props) => !props.disabled && "pointer"};
  border-radius: 6px;
  background-color: var(--white);
  border: 2px solid
    ${(props) => (!props.disabled ? "var(--light_blue)" : "var(--stroke)")};
  width: ${(props) =>
    props.size === "big" ? "24px" : props.size === "small" ? "16px" : "20px"};
  height: ${(props) =>
    props.size === "big" ? "24px" : props.size === "small" ? "16px" : "20px"};

  svg {
    width: 0;
    height: 0;
    object-fit: cover;
    transition: 0.1s ease-out;
  }

  ${(props) =>
    !props.disabled &&
    `
      :hover {
        border-color: ${
          props.iconType === "mistake" ? "var(--f_red)" : "var(--main_color)"
        };
      }
  `}

  ${(props) =>
    props.checked
      ? ` 
        svg {
        ${
          props.size === "big"
            ? `
              width: 20px;
              height: 20px;
            `
            : props.size === "small"
            ? `
              width: 12px;
              height: 12px;
            `
            : `
              width: 16px;
              height: 16px;
            `
        }
        object-fit: cover;
      }
      ${
        !props.disabled
          ? `
            border-color: ${
              props.iconType === "mistake"
                ? "var(--f_red)"
                : "var(--main_color)"
            };
            background-color: ${
              props.iconType === "mistake"
                ? "var(--f_red)"
                : "var(--main_color)"
            };
        `
          : `
            border-color:  var(--stroke);
            background-color: var(--stroke);
          `
      }
  `
      : null}
`;

const StyledCheckbox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
