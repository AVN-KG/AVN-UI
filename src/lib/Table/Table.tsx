import { useEffect, useState } from "react";
import styled from "styled-components";
import TableProps from "./types";

export default function Table(props: TableProps) {
  const { theadChild, tbodyChild, border } = props;
  const cordinat =
    border?.x && border?.y
      ? "all"
      : border?.y
      ? "y"
      : border?.x == false
      ? "none"
      : "x";

  return (
    <AvnTable>
      <StThead border={cordinat}>{theadChild && theadChild}</StThead>
      <StTbody border={cordinat}>{tbodyChild && tbodyChild}</StTbody>
    </AvnTable>
  );
}

const StTbody = styled.tbody<{ border: string }>`
  tr {
    cursor: pointer;
  }

  td {
    padding: 16px;
    color: var(--black);
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    border: none;
    border-bottom: ${(props) =>
      props.border !== "none" && props.border !== "y"
        ? "1px solid var(--stroke)"
        : "none"};
    border-right: ${(props) =>
      props.border === "all" || props.border === "y"
        ? "1px solid var(--stroke)"
        : "none"};
  }
  ${(props) =>
    props.border === "all" &&
    `
      tr:last-child td {
        border-bottom: none;
      }
  `}

  td:first-child {
    padding-left: 21px;
  }

  td:last-child {
    padding-right: 21px;
    border-right: none;
  }

  tr:hover {
    background: linear-gradient(
      90deg,
      rgba(247, 249, 252, 0) 0%,
      #eff5ff 2.72%,
      rgba(239, 245, 255, 0.8883) 96.48%,
      rgba(247, 249, 252, 0) 100%
    );
    transition: ${(props) => props.theme.theme.transition};
  }
`;

const StThead = styled.thead<{ border: string }>`
  th {
    height: 52px;
    padding: 8px 16px;
    color: var(--blue_gray);
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    border: none;
    border-bottom: ${(props) =>
      props.border !== "none" && props.border !== "y"
        ? "1px solid var(--stroke)"
        : "none"};
    border-right: ${(props) =>
      props.border === "all" || props.border === "y"
        ? "1px solid var(--stroke)"
        : "none"};
  }

  th:first-child {
    padding-left: 21px;
  }
  th:last-child {
    padding-right: 21px;
    border-right: none;
  }
`;

const AvnTable = styled.table`
  border-spacing: 0;
  padding: 20px;
  background-color: var(--white);
  box-shadow: 0px 0px 20px rgba(40, 105, 254, 0.07);
  border-radius: 6px;
`;
