import React, { useEffect, useState } from "react";
import { defaultTheme } from "../../Service/defaultTheme";

// import { ReactDatePicker } from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import {
  CalendarIcon,
  ClockIcon,
  InputCurrentIcon,
  InputErrorIcon,
  InputWarningIcon,
  LockIcon,
  SearchIcon,
  UserIcon,
} from "../icons/icons";
import InputProps from "./types";

export default function Input({
  inputType,
  inputState,
  inputMsgs,
  disabled,
  label,
  placeholder,
  name,
  onChange,
  defaultValue,
  icon,
}: InputProps) {
  const [unLock, setUnLock] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [startDate, setStartDate] = useState<Date>(new Date());

  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue);
    }
  }, [defaultValue]);

  const handleUnlocked = () => {
    setUnLock(!unLock);
  };

  // useEffect(() => {
  //   let idIcon = document.querySelector("#draggable");
  //   idIcon!.setAttribute("draggable", "false");
  // }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event);
    setValue(event.target.value);
  };

  switch (inputType) {
    case "login":
      return (
        <StyledAuthInput>
          {label ? <StyledLabel> {label}</StyledLabel> : null}
          <StyledInputContainer inputState={inputState} disabled={disabled}>
            <StyledInputs
              type={"text"}
              placeholder={placeholder}
              disabled={disabled}
              onChange={handleChange}
              value={value}
              name={name}
            />
            <UserIcon iconType={""} />
          </StyledInputContainer>
          {inputState && !disabled ? (
            <StyledWarning inputState={inputState}>
              {inputState === "warning" && inputMsgs?.warning ? (
                <InputWarningIcon />
              ) : inputState === "current" && inputMsgs?.current ? (
                <InputCurrentIcon />
              ) : inputState === "error" && inputMsgs?.error ? (
                <InputErrorIcon />
              ) : null}
              <span>{inputMsgs ? inputMsgs[inputState] : null}</span>
            </StyledWarning>
          ) : null}
        </StyledAuthInput>
      );
    case "password":
      return (
        <StyledAuthInput>
          {label ? <StyledLabel> {label}</StyledLabel> : null}
          <StyledInputContainer inputState={inputState} disabled={disabled}>
            <StyledInputs
              type={unLock ? "text" : "password"}
              placeholder={placeholder}
              disabled={disabled}
              onChange={handleChange}
              value={value}
              name={name}
            />
            <LockIcon
              unlock={unLock ? true : false}
              func={handleUnlocked}
              iconType={""}
            />
          </StyledInputContainer>
          {inputState && !disabled ? (
            <StyledWarning inputState={inputState}>
              {inputState === "warning" && inputMsgs?.warning ? (
                <InputWarningIcon />
              ) : inputState === "current" && inputMsgs?.current ? (
                <InputCurrentIcon />
              ) : inputState === "error" && inputMsgs?.error ? (
                <InputErrorIcon />
              ) : null}
              <span>{inputMsgs ? inputMsgs[inputState] : null}</span>
            </StyledWarning>
          ) : null}
        </StyledAuthInput>
      );
    case "time":
      return (
        <StyledAuthInput>
          {label ? <StyledLabel> {label}</StyledLabel> : null}
          <StyledInputContainer inputState={inputState} disabled={disabled}>
            <StyledInputs
              type={"text"}
              placeholder={placeholder}
              disabled={disabled}
              onChange={handleChange}
              value={value}
              name={name}
            />
            <ClockIcon iconType={""} />
          </StyledInputContainer>
          {inputState && !disabled ? (
            <StyledWarning inputState={inputState}>
              {inputState === "warning" && inputMsgs?.warning ? (
                <InputWarningIcon />
              ) : inputState === "current" && inputMsgs?.current ? (
                <InputCurrentIcon />
              ) : inputState === "error" && inputMsgs?.error ? (
                <InputErrorIcon />
              ) : null}
              <span>{inputMsgs ? inputMsgs[inputState] : null}</span>
            </StyledWarning>
          ) : null}
        </StyledAuthInput>
      );
    case "date":
      return (
        <StyledAuthInput>
          {label ? <StyledLabel> {label}</StyledLabel> : null}
          <StyledInputContainer inputState={inputState} disabled={disabled}>
            <StyledInputs
              type={"date"}
              placeholder={placeholder}
              disabled={disabled}
              onChange={handleChange}
              value={value}
              name={name}
            />
            <div style={{ position: "absolute", right: "10px", top: "8px" }}>
              <CalendarIcon iconType={""} />
            </div>
          </StyledInputContainer>
          {inputState && !disabled ? (
            <StyledWarning inputState={inputState}>
              {inputState === "warning" && inputMsgs?.warning ? (
                <InputWarningIcon />
              ) : inputState === "current" && inputMsgs?.current ? (
                <InputCurrentIcon />
              ) : inputState === "error" && inputMsgs?.error ? (
                <InputErrorIcon />
              ) : null}
              <span>{inputMsgs ? inputMsgs[inputState] : null}</span>
            </StyledWarning>
          ) : null}
        </StyledAuthInput>
        // <ReactDatePicker
        //   selected={startDate}
        //   onChange={(date: Date) => setStartDate(date)}
        // />
      );
    case "search":
      return (
        <StyledAuthInput>
          {label ? <StyledLabel> {label}</StyledLabel> : null}
          <StyledInputContainer inputState={inputState} disabled={disabled}>
            <StyledInputs
              type={"text"}
              placeholder={placeholder}
              disabled={disabled}
              onChange={handleChange}
              value={value}
              name={name}
            />
            <SearchIcon iconType={""} />
          </StyledInputContainer>
          {inputState && !disabled ? (
            <StyledWarning inputState={inputState}>
              {inputState === "warning" && inputMsgs?.warning ? (
                <InputWarningIcon />
              ) : inputState === "current" && inputMsgs?.current ? (
                <InputCurrentIcon />
              ) : inputState === "error" && inputMsgs?.error ? (
                <InputErrorIcon />
              ) : null}
              <span>{inputMsgs ? inputMsgs[inputState] : null}</span>
            </StyledWarning>
          ) : null}
        </StyledAuthInput>
      );
    default:
      return (
        <StyledAuthInput>
          {label ? <StyledLabel> {label}</StyledLabel> : null}
          <StyledInputContainer inputState={inputState} disabled={disabled}>
            <StyledInputs
              type={"text"}
              placeholder={placeholder}
              disabled={disabled}
              onChange={handleChange}
              value={value}
              name={name}
            />
            {icon ? icon : null}
          </StyledInputContainer>
          {inputState && !disabled ? (
            <StyledWarning inputState={inputState}>
              {inputState === "warning" && inputMsgs?.warning ? (
                <InputWarningIcon />
              ) : inputState === "current" && inputMsgs?.current ? (
                <InputCurrentIcon />
              ) : inputState === "error" && inputMsgs?.error ? (
                <InputErrorIcon />
              ) : null}
              <span>{inputMsgs ? inputMsgs[inputState] : null}</span>
            </StyledWarning>
          ) : null}
        </StyledAuthInput>
      );
  }
}

const StyledAuthInput = styled.div`
  width: 100%;
  display: grid;
  gap: 5px;
  text-align: left;
`;

const StyledInputContainer = styled.div<{
  inputState?: string;
  disabled?: boolean;
}>`
  position: relative;
  padding: 8px 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  border-radius: 6px;
  transition: ${(props) =>
    props?.theme?.theme?.transition || defaultTheme.theme.transition};
  border: 1px solid var(--stroke);
  ${(props) =>
    props.disabled ? `background: var(--stroke);` : `background: var(--white);`}
  ${(props) =>
    !props.disabled && props.inputState === "current"
      ? `border: 1px solid var(--green);`
      : !props.disabled && props.inputState === "error"
      ? `border: 1px solid var(--red);`
      : `border: 1px solid var(--stroke);
  `}


  
  ::after svg {
    position: absolute;
  }

  img {
    height: 22px;
    width: 22px;
    object-fit: cover;
  }

  svg {
    width: 22px;
    height: 22px;
    object-fit: cover;
  }
  :focus-within {
    border-color: var(--main_color);
  }
`;

const StyledLabel = styled.label`
  color: var(--black);
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
`;

const StyledInputs = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: var(--black);
  background: none;
  -webkit-appearance: none;
  z-index: 1;
  ::placeholder {
    color: var(--blue_gray);
  }

  ::-webkit-inner-spin-button,
  ::-webkit-calendar-picker-indicator {
    background: rgb(255 255 255 / 0%);
    width: 22px;
    cursor: pointer;
    -webkit-appearance: none;
  }
`;

const StyledWarning = styled.div<{ inputState?: string }>`
  display: ${(props) =>
    !props.inputState || props.inputState === "normal" ? "none" : "flex"};
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
    ${(props) =>
      props.inputState === "current"
        ? `color: var(--green);`
        : props.inputState === "error"
        ? `color: var(--red);`
        : `color: var(--blue_gray);
    `}
  }
`;
