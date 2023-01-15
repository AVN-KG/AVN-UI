import React from "react";
import styled from "styled-components";
import Flex from "../../global-components/Flex";
import AppsMenu from "../AppsMenu/AppsMenu";
import Profile from "../Profile/Profile";

export interface AvatarAppsContainerProps {
  auto_media?: boolean;
}

export default function AvatarAppsContainer(props: AvatarAppsContainerProps) {
  return (
    <Flex gap="20px" align="center">
      <Profile />
      <AppsMenu {...props} />
    </Flex>
  );
}

// const StyledLSWrap = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;
