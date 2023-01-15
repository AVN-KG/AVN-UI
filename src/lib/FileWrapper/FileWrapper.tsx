import React, { ReactElement } from "react";
import styled from "styled-components";
import { fileExt } from "../../Service/fileExt";
import FileTypesIcon from "../icons/fileTypes";
import FileWrapperProps from "./types";

export default function FileWrapper({
  name,
  path,
  rightPosition,
}: FileWrapperProps) {
  function bgStyler(name: string) {
    const ext = fileExt(name).length ? fileExt(name) : "";
    let color = "var(--f_blue)";
    let bg = "var(--fb_blue)";

    if (
      ext === "mdb" ||
      ext === "rar" ||
      ext === "dll" ||
      ext === "bmp" ||
      ext === "xml" ||
      ext === "mp4" ||
      ext === "mdb" ||
      ext === "tiff"
    ) {
      color = "var(--f_purple)";
      bg = "var(--fb_purple)";
    } else if (
      ext === "cvg" ||
      ext === "crd" ||
      ext === "wav" ||
      ext === "xsl" ||
      ext === "jpg" ||
      ext === "mpeg" ||
      ext === "html"
    ) {
      color = "var(--f_green)";
      bg = "var(--fb_green)";
    } else if (
      ext === "wma" ||
      ext === "gif" ||
      ext === "svg" ||
      ext === "eps" ||
      ext === "avi" ||
      ext === "rss" ||
      ext === "ai"
    ) {
      color = "var(--f_orange)";
      bg = "var(--fb_orange)";
    } else if (
      ext === "raw" ||
      ext === "zip" ||
      ext === "pdf" ||
      ext === "mp3" ||
      ext === "flv" ||
      ext === "pub" ||
      ext === "ppt" ||
      ext === "java"
    ) {
      color = "var(--f_red)";
      bg = "var(--fb_red)";
    } else if (
      ext === "ps" ||
      ext === "png" ||
      ext === "mid" ||
      ext === "dwg" ||
      ext === "psd"
    ) {
      color = "var(--f_dark_blue)";
      bg = "var(--fb_dark_blue)";
    } else {
      color = "var(--f_blue)";
      bg = "var(--fb_blue)";
    }

    return (
      <StyledFile
        reversPosition={rightPosition && rightPosition}
        style={{ backgroundColor: bg }}
      >
        <FileTypesIcon name={name} path={path} />
        <StyledLink href={path && path} color={color}>
          {name.length > 25 ? name.substr(0, 25) + "..." : name}
        </StyledLink>
      </StyledFile>
    );
  }

  return bgStyler(name);
}

const StyledFile = styled.div<{ reversPosition?: boolean }>`
  max-width: 250px;
  border-radius: 4px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  /* color: var(--black); */
  ${(props) => props.reversPosition && `flex-direction: row-reverse;`}
`;

const StyledLink = styled.a<{ color: string }>`
  text-decoration: none;
  color: ${(props) => props.color};
  :visited,
  :active {
    color: ${(props) => props.color};
  }
`;
