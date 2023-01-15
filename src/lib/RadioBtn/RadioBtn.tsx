import { useEffect, useState } from "react";
import styled from "styled-components";
import RadioBtnProps, { PositionType, SizeType } from "./types";

export default function RadioBtn(props: RadioBtnProps) {
  const {
    label,
    name,
    onChange,
    size = "normal",
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
    <StyledRadioBtn>
      {label ? <StLabel position={labelPosition}>{label}</StLabel> : null}
      <StRadioContainer
        onClick={handleCheck}
        checked={check}
        size={size}
        disabled={disabled ? true : false}
      ></StRadioContainer>
    </StyledRadioBtn>
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

const StRadioContainer = styled.div<{
  checked: boolean;
  disabled: boolean;
  size: keyof SizeType;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.1s ease-out;
  cursor: ${(props) => !props.disabled && "pointer"};
  border-radius: 20px;
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
  }

  ${(props) =>
    !props.disabled &&
    `
      :hover {
        border-color: var(--main_color);
      }
  `}

  ${(props) =>
    props.checked &&
    ` 
      border: ${
        props.size === "big" ? "8px" : props.size === "small" ? "5px" : "6px"
      } solid;
      border-color:  ${!props.disabled ? "var(--main_color)" : "var(--stroke)"};
  `}
`;

const StyledRadioBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
