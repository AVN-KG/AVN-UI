import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Flex from "../../global-components/Flex";
import { ArrowDownIcon } from "../icons/icons";
import { defaultTheme } from "../../Service/defaultTheme";

// interface Props {
//   divRef?: RefObject<HTMLDivElement>;
//   modal?: Boolean;
// }

export default function Profile() {
  let avaCode = localStorage.getItem("avatar");
  const localAvatar = avaCode ? JSON.parse(avaCode) : null;
  const ref = useRef<HTMLDivElement | null>(null);
  const [modal, setModal] = useState<boolean>(false);

  const handleModalClose = (event: MouseEvent): void => {
    const path = event.composedPath && event.composedPath();
    if (ref.current && !path.includes(ref.current)) {
      setModal(false);
    }
  };

  return (
    <StyledProfileWrap ref={ref}>
      <Flex gap="20px" align="center">
        <StyledFio>
          <p>Улукбеков А. У.</p>
          <span>Специалист</span>
        </StyledFio>
        <Flex gap="10px" align="center">
          <StyledAvatar>
            <img
              src={`${
                localAvatar
                  ? `data:image/jpeg;base64,${localAvatar}`
                  : "./Avatar.jpg"
              }`}
              alt={"fio"}
            />
          </StyledAvatar>
          <StyledChevron modal={modal}>
            <ArrowDownIcon />
          </StyledChevron>
        </Flex>
      </Flex>
    </StyledProfileWrap>
  );
}

const StyledProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledAvatar = styled.div`
  max-width: 40px;
  max-height: 40px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
  }
`;

const StyledFio = styled.div`
  max-width: 200px;
  display: grid;
  justify-content: end;
  text-align: end;
  font-size: 14px;
  line-height: 18px;

  p {
    white-space: pre;
    color: var(--main_color);
    font-weight: 600;
    overflow: hidden;
  }

  span {
    white-space: pre;
    overflow: hidden;
    color: var(--blue_gray);
    font-weight: 400;
  }

  @media ${(props) => props?.theme?.media?.phone || defaultTheme.media.phone} {
    display: none;
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
